import React, { useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useDashboard } from "../context/DashboardContext";

const Dashboard = () => {
  const { user } = useAuth();
  const { statsData, loading } = useDashboard();
  if (!statsData) {
    return (
      <div>
        <p> NO Data Available.... </p>
      </div>
    );
  }
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

      {loading ? (
        <p> Loading Dashboard Data... </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-5">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center ">
            <h3 className="text-lg font-semibold text-gray-300">
              {" "}
              Average Range{" "}
            </h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {" "}
              {statsData.data.avgRange.toFixed(1)} km{" "}
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center ">
            <h3 className="text-lg font-semibold text-gray-300">
              {" "}
              Most used Driving Type{" "}
            </h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {" "}
              {statsData.data.mostUsed}{" "}
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center ">
            <h3 className="text-lg font-semibold text-gray-300">
              {" "}
              Total Calculations{" "}
            </h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {" "}
              {statsData.data.lastFive.length}{" "}
            </p>
          </div>
        </div>
      )}

      <div className="w-full max-w-5xl mt-12 bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-white mb-4">
          {" "}
          Recent Calculations{" "}
        </h3>
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
      </div>
    </div>
  );
};

export default Dashboard;
