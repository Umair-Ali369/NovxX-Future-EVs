import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useAI } from "../context/AIContext";
import { useDashboard } from "../context/DashboardContext";
import useScrollReveal from "../hooks/useScrollReveal";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ReferenceLine,
} from "recharts";

// ── Constants ──
const EFFICIENCY_SCORE = { Low: 1, Moderate: 2, High: 3 };
const EFFICIENCY_COLORS = { Low: "#ef4444", Moderate: "#f59e0b", High: "#22c55e" };
const CONDITION_COLORS = { city: "#44ACFF", highway: "#a855f7", mixed: "#06b6d4" };

// ── Helpers ──
const computePerformanceScore = (record) => {
  if (!record) return 0;
  let score = 100;
  if (record.efficiency === "Low") score -= 35;
  else if (record.efficiency === "Moderate") score -= 15;
  if (record.batteryStress === "High") score -= 25;
  else if (record.batteryStress === "Moderate") score -= 10;
  const style = record.driving_style || record.drivingStyle;
  const terrain = record.terrain_type || record.terrainType;
  if (style === "aggressive") score -= 15;
  if (terrain === "mountainous") score -= 10;
  else if (terrain === "hilly") score -= 5;
  return Math.max(0, Math.min(100, score));
};

const getScoreColor = (score) => {
  if (score >= 75) return "#22c55e";
  if (score >= 50) return "#f59e0b";
  return "#ef4444";
};

const getScoreLabel = (score) => {
  if (score >= 75) return "Good";
  if (score >= 50) return "At Risk";
  return "Critical";
};

// ── Sub-components ──
const StatCard = ({ label, value, icon }) => (
  <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-5 flex flex-col gap-3 hover:border-[#44ACFF]/30 card-lift transition-colors">
    <div className="flex items-center justify-between">
      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
      <span className="text-xl">{icon}</span>
    </div>
    <p className="text-3xl font-bold text-[#44ACFF]">{value}</p>
  </div>
);

const BatteryGauge = ({ percent }) => {
  const filled = Math.round((percent / 100) * 8);
  const color = percent > 50 ? "#44ACFF" : percent > 20 ? "#f59e0b" : "#ef4444";
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <div
          className="w-20 h-36 rounded-lg border-2 flex flex-col-reverse overflow-hidden"
          style={{ borderColor: color }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 mx-1 mb-0.5 rounded-sm transition-all"
              style={{ backgroundColor: i < filled ? color : "rgba(255,255,255,0.05)" }}
            />
          ))}
        </div>
        <div className="w-8 h-2 rounded-t-sm mx-auto -mt-0.5" style={{ backgroundColor: color }} />
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold tabular-nums" style={{ color }}>{percent}%</p>
        <p className="text-gray-500 text-xs uppercase tracking-wider mt-0.5">SOC</p>
      </div>
    </div>
  );
};

const PerformanceRing = ({ score }) => {
  const color = getScoreColor(score);
  const label = getScoreLabel(score);
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
          <circle
            cx="50" cy="50" r="40" fill="none"
            stroke={color} strokeWidth="10" strokeLinecap="round"
            strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
            style={{ transition: "stroke-dashoffset 1s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold tabular-nums" style={{ color }}>{score}</span>
          <span className="text-gray-600 text-xs">/100</span>
        </div>
      </div>
      <p className="text-sm font-bold uppercase tracking-wider" style={{ color }}>{label}</p>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-[#091413] border border-white/15 rounded-lg p-3 text-sm">
      <p className="text-gray-400 mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }}>{p.name}: {p.value}</p>
      ))}
    </div>
  );
};

// ── Main Dashboard ──
const Dashboard = () => {
  const { user } = useAuth();
  const { statsData, loading } = useDashboard();
  const { weeklySummary, generateWeekly, aiLoading } = useAI();

  const statsRef = useScrollReveal();
  const batteryRef = useScrollReveal();
  const midRef = useScrollReveal();
  const chartsRef = useScrollReveal();
  const tableRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  // ── Derived data (before early returns so hooks order is stable) ──
  const records = statsData?.data?.lastFive || [];
  const latest = records[0] || null;
  const avgRange = statsData?.data?.avgRange || 0;

  // ── Auto-generate weekly summary ── (must be before any return)
  useEffect(() => {
    if (records.length >= 3 && !weeklySummary && !aiLoading) {
      generateWeekly(records);
    }
  }, [records.length]);

  // ── Loading ──
  if (loading) {
    return (
      <div className="min-h-screen bg-[#091413] px-6 py-32">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="skeleton h-28 rounded-xl" />
            <div className="skeleton h-28 rounded-xl" />
            <div className="skeleton h-28 rounded-xl" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="skeleton h-64 rounded-xl" />
            <div className="skeleton h-64 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  // ── No data ──
  if (!statsData || !statsData.data) {
    return (
      <div className="min-h-screen bg-[#091413] flex flex-col items-center justify-center gap-6 px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#44ACFF]/10 border border-[#44ACFF]/20 flex items-center justify-center text-2xl">⚡</div>
        <h2 className="font-bold text-2xl text-[#E8EDEC]">No data yet</h2>
        <p className="text-gray-500 max-w-sm">Run your first battery analysis to start seeing your performance data here.</p>
        <Link to="/calculator" className="px-7 py-3 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors btn-press">
          Run First Analysis
        </Link>
      </div>
    );
  }

  // ── No calculations yet ──
  if (records.length === 0) {
    return (
      <div className="min-h-screen bg-[#091413] flex flex-col items-center justify-center gap-6 px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#44ACFF]/10 border border-[#44ACFF]/20 flex items-center justify-center text-2xl">⚡</div>
        <h2 className="font-bold text-2xl text-[#E8EDEC]">No calculations yet</h2>
        <p className="text-gray-500 max-w-sm">
          Hi {user?.name} — run your first battery analysis to start seeing your performance data here.
        </p>
        <Link to="/calculator" className="px-7 py-3 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors btn-press">
          Run First Analysis
        </Link>
      </div>
    );
  }

  // ── Compute chart data ──
  const performanceScore = computePerformanceScore(latest);

  const chartData = [...records].reverse().map((c) => ({
    label: new Date(c.date).toLocaleDateString(undefined, { month: "short", day: "numeric" }),
    range: Number(c.finalRange?.toFixed(1)),
    efficiency: EFFICIENCY_SCORE[c.efficiency] || 0,
    efficiencyLabel: c.efficiency,
  }));

  // Handle both DrivingCondition (capital D from DB) and drivingCondition
  const conditionCounts = records.reduce((acc, c) => {
    const key = c.DrivingCondition || c.drivingCondition || "unknown";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  const conditionChartData = Object.entries(conditionCounts).map(([name, value]) => ({ name, value }));

  // Key factors — handle both field name variants from DB
  const drivingStyle = latest.driving_style || latest.drivingStyle || "N/A";
  const terrainType = latest.terrain_type || latest.terrainType || "N/A";
  const keyFactors = [
    { label: "Driving Style", value: drivingStyle, highlight: drivingStyle === "aggressive" },
    { label: "Terrain", value: terrainType, highlight: terrainType === "mountainous" },
    { label: "Temperature", value: latest.temperature ? `${latest.temperature}°C` : "N/A", highlight: latest.temperature > 35 || latest.temperature < 0 },
    { label: "AC Load", value: latest.acUsage ? "ON" : "OFF", highlight: !!latest.acUsage },
  ];

  return (
    <div className="min-h-screen bg-[#091413] px-4 md:px-6 py-20 md:pt-32">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-xs mb-1">Control Center</p>
            <h1 className="text-2xl md:text-4xl text-[#E8EDEC] font-bold">
              Welcome back, <span className="text-[#44ACFF]">{user?.name}</span>
            </h1>
            <p className="text-gray-500 text-sm mt-1">Here's your EV performance overview.</p>
          </div>
          <Link
            to="/calculator"
            className="self-start sm:self-auto px-5 py-2.5 rounded-lg bg-[#44ACFF] text-[#091413] text-sm font-semibold hover:bg-[#5FB8FF] transition-colors whitespace-nowrap btn-press"
          >
            + New Analysis
          </Link>
        </div>

        {/* ── Stat Cards ── */}
        <div ref={statsRef} className="reveal grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard label="Average Range" value={`${avgRange.toFixed(1)} km`} icon="📏" />
          <StatCard
            label="Most Used Condition"
            value={statsData.data.mostUsed ? statsData.data.mostUsed.charAt(0).toUpperCase() + statsData.data.mostUsed.slice(1) : "N/A"}
            icon="🛣️"
          />
          <StatCard label="Total Calculations" value={statsData.data.totalCalculationCount ?? records.length} icon="⚡" />
        </div>

        {/* ── Battery Status + Range History ── */}
        <div ref={batteryRef} className="reveal grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Battery Status */}
          <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6 flex flex-col gap-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Battery Status</p>
            <div className="flex items-center justify-around gap-4">
              <BatteryGauge percent={latest.batteryPercent || 0} />
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Stress</p>
                  <p className="text-lg font-bold" style={{ color: EFFICIENCY_COLORS[latest.batteryStress] || "#E8EDEC" }}>
                    {latest.batteryStress || "N/A"}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Last Range</p>
                  <p className="text-lg font-bold text-[#44ACFF]">{latest.finalRange?.toFixed(1)} km</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Efficiency</p>
                  <p className="text-lg font-bold" style={{ color: EFFICIENCY_COLORS[latest.efficiency] || "#E8EDEC" }}>
                    {latest.efficiency || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Range History Chart */}
          <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6 flex flex-col gap-4 lg:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Range History</p>
              <span className="text-xs text-gray-600">Est. Range vs Average</span>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
                <XAxis dataKey="label" stroke="#4b5563" fontSize={10} />
                <YAxis stroke="#4b5563" fontSize={10} />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine
                  y={avgRange} stroke="#44ACFF" strokeDasharray="4 4" strokeOpacity={0.4}
                  label={{ value: "Avg", fill: "#44ACFF", fontSize: 10, position: "right" }}
                />
                <Line type="monotone" dataKey="range" name="Range (km)" stroke="#44ACFF" strokeWidth={2} dot={{ fill: "#44ACFF", r: 3 }} activeDot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ── Key Factors + Performance Score + AI Insight ── */}
        <div ref={midRef} className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Key Factors */}
          <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6 flex flex-col gap-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Key Factors</p>
            <div className="flex flex-col gap-3">
              {keyFactors.map((f) => (
                <div key={f.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#44ACFF]/50" />
                    <p className="text-gray-400 text-sm">{f.label}</p>
                  </div>
                  <p className="text-sm font-semibold capitalize" style={{ color: f.highlight ? "#f59e0b" : "#E8EDEC" }}>
                    {f.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-white/5 pt-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-gray-400 text-sm">Total Trips</p>
                <p className="text-[#E8EDEC] font-semibold text-sm">{statsData.data.totalCalculationCount ?? records.length}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-400 text-sm">Avg Range</p>
                <p className="text-[#44ACFF] font-semibold text-sm">{avgRange?.toFixed(1)} km</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-400 text-sm">Most Used</p>
                <p className="text-[#E8EDEC] font-semibold text-sm capitalize">{statsData.data.mostUsed || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Performance Score */}
          <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest self-start">Performance Score</p>
            <PerformanceRing score={performanceScore} />
            <p className="text-gray-500 text-xs text-center">Based on your most recent trip analysis</p>
          </div>

          {/* AI Insight */}
          <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">AI Insight</p>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#44ACFF]/10 text-[#44ACFF] border border-[#44ACFF]/20">
                Qwen 3.8
              </span>
            </div>

            {aiLoading ? (
              <div className="flex flex-col gap-2 flex-1">
                <div className="skeleton h-4 rounded w-full" />
                <div className="skeleton h-4 rounded w-5/6" />
                <div className="skeleton h-4 rounded w-4/6" />
              </div>
            ) : weeklySummary?.summary ? (
              <div className="flex flex-col gap-3 flex-1">
                <p className="text-gray-300 text-sm leading-relaxed">{weeklySummary.summary}</p>
                <button
                  onClick={() => generateWeekly(records)}
                  disabled={aiLoading}
                  className="self-start text-xs text-gray-600 hover:text-[#44ACFF] transition-colors disabled:opacity-40"
                >
                  ↺ Regenerate
                </button>
                {weeklySummary.stats && (
                  <div className="border-t border-white/5 pt-3 grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-gray-600 text-xs">Avg Range</p>
                      <p className="text-[#44ACFF] text-sm font-semibold">{weeklySummary.stats.avgRange} km</p>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-gray-600 text-xs">Efficiency</p>
                      <p className="text-[#E8EDEC] text-sm font-semibold">{weeklySummary.stats.efficiency}</p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-3 flex-1">
                <p className="text-gray-500 text-sm">Get a personalized AI summary of your recent driving performance.</p>
                <button
                  onClick={() => generateWeekly(records)}
                  disabled={records.length < 3 || aiLoading}
                  className="mt-auto px-4 py-2.5 rounded-lg bg-[#44ACFF] text-[#091413] text-sm font-semibold hover:bg-[#5FB8FF] disabled:opacity-40 transition-colors btn-press"
                >
                  {records.length < 3 ? `Need ${3 - records.length} more trips` : "Generate Summary"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── Efficiency Trend + Condition Breakdown ── */}
        <div ref={chartsRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Efficiency Trend (bar, color-coded by efficiency) */}
          <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Efficiency Trend</h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
                <XAxis dataKey="label" stroke="#4b5563" fontSize={10} />
                <YAxis stroke="#4b5563" fontSize={10} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="range" name="Range (km)" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, i) => (
                    <Cell key={i} fill={EFFICIENCY_COLORS[entry.efficiencyLabel] || "#44ACFF"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Condition Breakdown */}
          <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Driving Condition Breakdown</h3>
            {conditionChartData.length === 0 ? (
              <p className="text-gray-500 text-sm">No data yet.</p>
            ) : (
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie data={conditionChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={65} label={(entry) => entry.name}>
                    {conditionChartData.map((entry, i) => (
                      <Cell key={i} fill={CONDITION_COLORS[entry.name] || "#6b7280"} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ color: "#6b7280", fontSize: 11 }} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* ── Recent Calculations Table ── */}
        <div ref={tableRef} className="reveal bg-[#0F1F1D] border border-white/10 rounded-xl p-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Recent Calculations</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5">
                  {["Range", "Efficiency", "Condition", "Stress", "Date"].map((h) => (
                    <th key={h} className="pb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider pr-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {records.map((c, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 text-sm text-[#E8EDEC] font-medium pr-4">{c.finalRange?.toFixed(1)} km</td>
                    <td className="py-3 pr-4">
                      <span
                        className="text-xs px-2.5 py-1 rounded-full font-semibold"
                        style={{
                          color: EFFICIENCY_COLORS[c.efficiency],
                          backgroundColor: `${EFFICIENCY_COLORS[c.efficiency]}18`,
                          border: `1px solid ${EFFICIENCY_COLORS[c.efficiency]}30`,
                        }}
                      >
                        {c.efficiency}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-gray-400 capitalize pr-4">
                      {c.DrivingCondition || c.drivingCondition || "N/A"}
                    </td>
                    <td className="py-3 pr-4">
                      <span className="text-xs font-semibold" style={{ color: EFFICIENCY_COLORS[c.batteryStress] || "#E8EDEC" }}>
                        {c.batteryStress || "N/A"}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-gray-500">{new Date(c.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── CTA ── */}
        <div ref={ctaRef} className="reveal bg-[#0F1F1D] border border-white/10 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-lg text-[#E8EDEC] mb-1">Ready for another analysis?</h3>
            <p className="text-gray-500 text-sm">Every calculation improves your smart insights accuracy.</p>
          </div>
          <Link
            to="/calculator"
            className="whitespace-nowrap px-7 py-3 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors btn-press"
          >
            Run New Analysis
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;