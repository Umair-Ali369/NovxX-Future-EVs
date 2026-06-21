import React, { useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useDashboard } from "../context/DashboardContext";
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
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Map of efficiency labels to a numeric score so they can be plotted on a line chart
const EFFICIENCY_SCORE = { Low: 1, Moderate: 2, High: 3 };
const EFFICIENCY_COLORS = {
  Low: "#ef4444",
  Moderate: "#f59e0b",
  High: "#22c55e",
};
const CONDITION_COLORS = {
  city: "#3b82f6",
  highway: "#a855f7",
  mixed: "#06b6d4",
};

const Dashboard = () => {
  const { user } = useAuth();
  const { statsData, loading } = useDashboard();
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white text-lg"> Loading Dashboard Data.... </p>
      </div>
    );
  }
  if (!statsData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white text-lg"> NO Data Available.... </p>
      </div>
    );
  }

  const record = statsData.data.lastFive || [];

  // ---- Prepare chart data
  const chartsData = [...record]
    .slice()
    .reverse()
    .map((c, i) => ({
      label: new Date(c.date).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      }),
      range: Number(c.finalRange?.toFixed(1)),
      efficiency: EFFICIENCY_SCORE[c.efficiency] || 0,
      efficiency_label: c.efficiency,
      drivingCondition: c.DrivingCondition,
    }));

  // ---- Driving condition comparison
  const conditionCounts = record.reduce((acc, c) => {
    const key = c.DrivingCondition || "unknown";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  const conditionChartData = Object.entries(conditionCounts).map(
    ([name, value]) => ({ name, value }),
  );

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || payload.length) return null;
    return (
      <div className="bg-gray-900 border border-gray-700 rounded p-3 text-sm">
        <p className="text-gray-400 mb-1"> {label} </p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color }}>
            {" "}
            {p.name} : {p.value}{" "}
          </p>
        ))}
      </div>
    );
  };
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-24 pt-32 px-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl text-white font-bold lg:mb-10 md:mb-7 sm:mb-4">
          Hi, Welcome <span className="text-blue-600"> {user?.name}</span>
        </h1>
        <h2 className="text-3xl font-bold text-white text-center">
          Your EV Dashboard
        </h2>
      </div>
      {/* ---- Stat Cards ---- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-5">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center ">
          <h3 className="text-lg font-semibold text-gray-300">Average Range</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {statsData.data.avgRange.toFixed(1)} km
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center ">
          <h3 className="text-lg font-semibold text-gray-300">
            Most used Driving Type
          </h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {statsData.data.mostUsed}
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center ">
          <h3 className="text-lg font-semibold text-gray-300">
            Total Calculations
          </h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {statsData.data.totalCalculationCount ?? record.length}
          </p>
        </div>
      </div>

      {/* ---- Charts: Range History + Efficiency Trend ---- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl mt-8">
        {/* Range History */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-white mb-4"> Range History </h3>
          {chartsData.length === 0 ? (
            <p className="text-gray-400 text-sm">
              {" "}
              Not enough data to show a trend.{" "}
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="label" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="range"
                  name="Range (km)"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
        {/* Efficiency Trend */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-white mb-4">
            {" "}
            Efficiency Trend{" "}
          </h3>
          {chartsData.length === 0 ? (
            <p className="text-gray-400 text-sm">
              {" "}
              Not enough data to show a trend.{" "}
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="label" stroke="#9ca3af" fontSize={12} />
                <YAxis
                  stroke="#9ca3af"
                  fontSize={12}
                  domain={[0, 3]}
                  tick={[1, 2, 3]}
                  tickFormatter={(v) =>
                    ({ Low: 1, " Moderate": 2, High: 3 })[v] || ""
                  }
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (!active || !payload || !payload.length) return null;
                    return (
                      <div className="bg-gray-900 border border-gray-700 rounded p-3 text-sm">
                        <p className="text-gray-400 mb-1"> {label} </p>
                        <p className="text-blue-400">
                          {" "}
                          Efficiency :{" "}
                          {payload[0].payload.efficiency_label}{" "}
                        </p>
                      </div>
                    );
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="efficiencyScore"
                  name="Efficiency"
                  stroke="##22c55e"
                  strokeWidth={2}
                  dot={{ fill: "#22c55e", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* ---- Comparison: Driving Condition Usage ---- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl mt-6">
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-white mb-4">
            {" "}
            Drivin Condition Breakdown{" "}
          </h3>
          {conditionChartData.length === 0 ? (
            <p className="text-gray-400 text-sm"> No data yet. </p>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={conditionChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
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
                <Legend wrapperStyle={{ color: "#9ca3af", fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Range per calculation (bar comparison) */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-white mb-4">
            {" "}
            Range Comparison{" "}
          </h3>
          {chartsData.length === 0 ? (
            <p className="text-gray-400 text-sm"> No Data yet. </p>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="label" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="range" name="Range (km)" radius={[4, 4, 0, 0]}>
                  {chartsData.map((entry, i) => (
                    <Cell
                      key={i}
                      fill={EFFICIENCY_COLORS[entry.name] || "#3b82f6"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* ---- Recent Calculations Table ---- */}
      <div className="w-full max-w-5xl mt-12 bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-white mb-4">
          {" "}
          Recent Calculations{" "}
        </h3>
        {record.length === 0 ? (
          <p className="text-gray-400"> NO Calculaion Yet. </p>
        ) : (
          <table className="w-full text-left text-gray-300">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2"> Range (km) </th>
                <th className="py-2"> Efficiency </th>
                <th className="py-2"> Driving Condition </th>
                <th className="py-2"> Date </th>
              </tr>
            </thead>
            <tbody>
              {statsData.data.lastFive.map((c, i) => (
                <tr key={i} className="border-b border-gray-700">
                  <td className="py-2"> {c.finalRange.toFixed(1)} </td>
                  <td className="py-2"> {c.efficiency} </td>
                  <td className="py-2"> {c.DrivingCondition} </td>
                  <td className="py-2">
                    {" "}
                    {new Date(c.date).toLocaleDateString()}{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
