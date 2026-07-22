import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
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
} from "recharts";

const EFFICIENCY_SCORE = { Low: 1, Moderate: 2, High: 3 };
const EFFICIENCY_COLORS = {
  Low: "#ef4444",
  Moderate: "#f59e0b",
  High: "#22c55e",
};
const CONDITION_COLORS = {
  city: "#44ACFF",
  highway: "#a855f7",
  mixed: "#06b6d4",
};

const StatCard = ({ label, value, icon }) => (
  <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6 flex flex-col gap-3 hover:border-[#44ACFF]/30 card-lift transition-colors">
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-500 uppercase tracking-wider">{label}</p>
      <span className="text-xl">{icon}</span>
    </div>
    <p className="text-3xl font-bold text-[#44ACFF]">{value}</p>
  </div>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-[#091413] border border-white/15 rounded-lg p-3 text-sm">
      <p className="text-gray-400 mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }}>
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  );
};

const Dashboard = () => {
  const { user } = useAuth();
  const { statsData, loading } = useDashboard();

  // Each section gets its own scroll reveal ref
  const statsRef = useScrollReveal();
  const chartsRef = useScrollReveal();
  const conditionRef = useScrollReveal();
  const tableRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  // ── Loading state ──
  if (loading) {
    return (
      <div className="min-h-screen bg-[#091413] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-[#44ACFF]/30 border-t-[#44ACFF] rounded-full animate-spin" />
          <p className="text-gray-400 text-sm">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // ── No data / not logged in state ──

  if (!statsData || !statsData.data) {
    return (
      <div className="min-h-screen bg-[#091413] flex flex-col items-center justify-center gap-6 px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#44ACFF]/10 border border-[#44ACFF]/20 flex items-center justify-center text-2xl">
          ⚡
        </div>
        <h2 className="font-bold text-2xl text-[#E8EDEC]">No data yet</h2>
        <p className="text-gray-500 max-w-sm">
          Run your first battery analysis to start seeing your performance data
          here.
        </p>
        <Link
          to="/calculator"
          className="px-7 py-3 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors btn-press"
        >
          Run First Analysis
        </Link>
      </div>
    );
  }

  // Also handle the case where user has no calculations yet
  const records = statsData.data.lastFive || [];

  if (records.length === 0) {
    return (
      <div className="min-h-screen bg-[#091413] flex flex-col items-center justify-center gap-6 px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#44ACFF]/10 border border-[#44ACFF]/20 flex items-center justify-center text-2xl">
          ⚡
        </div>
        <h2 className="font-bold text-2xl text-[#E8EDEC]">
          No calculations yet
        </h2>
        <p className="text-gray-500 max-w-sm">
          Hi {user?.name} — run your first battery analysis to start seeing
          your performance data here.
        </p>
        <Link
          to="/calculator"
          className="px-7 py-3 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors btn-press"
        >
          Run First Analysis
        </Link>
      </div>
    );
  }

  // ── Chart data ──
  const chartData = [...records].reverse().map((c) => ({
    label: new Date(c.date).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    }),
    range: Number(c.finalRange?.toFixed(1)),
    efficiency: EFFICIENCY_SCORE[c.efficiency] || 0,
    efficiencyLabel: c.efficiency,
    drivingCondition: c.drivingCondition,
  }));

  // ── Condition breakdown ──
  const conditionCounts = records.reduce((acc, c) => {
    const key = c.DrivingCondition || "unknown";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  const conditionChartData = Object.entries(conditionCounts).map(
    ([name, value]) => ({ name, value })
  );

  return (
    <div className="min-h-screen bg-[#091413] px-6 py-24 pt-32">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">

        {/* ── Header — no reveal, always visible on load ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-xs mb-1">
              Control Center
            </p>
            <h1 className="text-3xl md:text-4xl text-[#E8EDEC] font-bold">
              Welcome back,{" "}
              <span className="text-[#44ACFF]">{user?.name}</span>
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Here's your EV performance overview.
            </p>
          </div>
          <Link
            to="/calculator"
            className="self-start sm:self-auto px-5 py-2.5 rounded-lg bg-[#44ACFF] text-[#091413] text-sm font-semibold hover:bg-[#5FB8FF] transition-colors whitespace-nowrap btn-press"
          >
            + New Analysis
          </Link>
        </div>

        {/* ── Stat Cards ── */}
        <div
          ref={statsRef}
          className=" grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <StatCard
            label="Average Range"
            value={`${statsData.data.avgRange.toFixed(1)} km`}
            icon="📏"
          />
          <StatCard
            label="Most Used Condition"
            value={
              statsData.data.mostUsed
                ? statsData.data.mostUsed.charAt(0).toUpperCase() +
                  statsData.data.mostUsed.slice(1)
                : "N/A"
            }
            icon="🛣️"
          />
          <StatCard
            label="Total Calculations"
            value={statsData.data.totalCalculationCount ?? records.length}
            icon="⚡"
          />
        </div>

        {/* ── Range History + Efficiency Trend ── */}
        <div
          ref={chartsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Range History */}
          <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#E8EDEC] mb-6">
              Range History
            </h3>
            {chartData.length === 0 ? (
              <p className="text-gray-500 text-sm">
                Not enough data to show a trend.
              </p>
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
                  <XAxis dataKey="label" stroke="#4b5563" fontSize={11} />
                  <YAxis stroke="#4b5563" fontSize={11} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="range"
                    name="Range (km)"
                    stroke="#44ACFF"
                    strokeWidth={2}
                    dot={{ fill: "#44ACFF", r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Efficiency Trend */}
          <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#E8EDEC] mb-6">
              Efficiency Trend
            </h3>
            {chartData.length === 0 ? (
              <p className="text-gray-500 text-sm">
                Not enough data to show a trend.
              </p>
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
                  <XAxis dataKey="label" stroke="#4b5563" fontSize={11} />
                  <YAxis
                    stroke="#4b5563"
                    fontSize={11}
                    domain={[0, 3]}
                    ticks={[1, 2, 3]}
                    tickFormatter={(v) =>
                      ({ 1: "Low", 2: "Moderate", 3: "High" }[v] || "")
                    }
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (!active || !payload || !payload.length) return null;
                      return (
                        <div className="bg-[#091413] border border-white/15 rounded-lg p-3 text-sm">
                          <p className="text-gray-400 mb-1">{label}</p>
                          <p className="text-green-400">
                            Efficiency: {payload[0].payload.efficiencyLabel}
                          </p>
                        </div>
                      );
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="efficiency"
                    name="Efficiency"
                    stroke="#22c55e"
                    strokeWidth={2}
                    dot={{ fill: "#22c55e", r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* ── Condition Breakdown + Range Comparison ── */}
        <div
          ref={conditionRef}
          className=" grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Driving Condition Breakdown */}
          <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#E8EDEC] mb-6">
              Driving Condition Breakdown
            </h3>
            {conditionChartData.length === 0 ? (
              <p className="text-gray-500 text-sm">No data yet.</p>
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={conditionChartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={75}
                    label={(entry) => entry.name}
                  >
                    {conditionChartData.map((entry, i) => (
                      <Cell
                        key={i}
                        fill={CONDITION_COLORS[entry.name] || "#6b7280"}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ color: "#6b7280", fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Range Comparison */}
          <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#E8EDEC] mb-6">
              Range Comparison
            </h3>
            {chartData.length === 0 ? (
              <p className="text-gray-500 text-sm">No data yet.</p>
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
                  <XAxis dataKey="label" stroke="#4b5563" fontSize={11} />
                  <YAxis stroke="#4b5563" fontSize={11} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="range"
                    name="Range (km)"
                    radius={[4, 4, 0, 0]}
                  >
                    {chartData.map((entry, i) => (
                      <Cell
                        key={i}
                        fill={
                          EFFICIENCY_COLORS[entry.efficiencyLabel] || "#44ACFF"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* ── Recent Calculations Table ── */}
        <div
          ref={tableRef}
          className=" bg-[#0F1F1D] border border-white/10 rounded-xl p-6"
        >
          <h3 className="text-lg font-bold text-[#E8EDEC] mb-6">
            Recent Calculations
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="pb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Range
                  </th>
                  <th className="pb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Efficiency
                  </th>
                  <th className="pb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Condition
                  </th>
                  <th className="pb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {records.map((c, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-3 text-sm text-[#E8EDEC] font-medium">
                      {c.finalRange.toFixed(1)} km
                    </td>
                    <td className="py-3">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                          c.efficiency === "High"
                            ? "bg-green-600/15 text-green-400 border border-green-600/25"
                            : c.efficiency === "Moderate"
                            ? "bg-amber-600/15 text-amber-400 border border-amber-600/25"
                            : "bg-red-600/15 text-red-400 border border-red-600/25"
                        }`}
                      >
                        {c.efficiency}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-gray-400 capitalize">
                      {c.drivingCondition}
                    </td>
                    <td className="py-3 text-sm text-gray-500">
                      {new Date(c.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          ref={ctaRef}
          className=" bg-[#0F1F1D] border border-white/10 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-bold text-lg text-[#E8EDEC] mb-1">
              Ready for another analysis?
            </h3>
            <p className="text-gray-500 text-sm">
              Every calculation improves your smart insights accuracy.
            </p>
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