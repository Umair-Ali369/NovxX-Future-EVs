import React, { useEffect, useRef, useState } from "react";
import { useAI } from "../context/AIContext";

const AiInsightsPanel = ({ calculationData }) => {
  const { aiInsights, aiLoading, aiError, generateInsights } = useAI();
  const called = useRef(false)
  const [initiated, setInitiated] = useState(false)
  // Auto-generate insights when calculation data arrives
  useEffect(() => { // Only call once per calculationData mount
    if (calculationData && !called.current) {
      called.current = true;
      setInitiated(true);
      generateInsights(calculationData);
    }
  }, [calculationData]);

  if (!initiated) return null

  // Loading state
  if (aiLoading) {
    return (
      <div className="bg-[#091413] border border-[#44ACFF]/20 rounded-xl p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🤖</span>
          <h3 className="font-semibold text-sm text-[#44ACFF]">
            AI Insight
          </h3>
          <span className="ml-auto">
            <span className="w-4 h-4 border-2 border-[#44ACFF]/30 border-t-[#44ACFF] rounded-full animate-spin inline-block" />
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-4 rounded w-full" />
          <div className="skeleton h-4 rounded w-5/6" />
          <div className="skeleton h-4 rounded w-4/6" />
        </div>
        <p className="text-xs text-gray-600">
          Analyzing your driving data with AI...
        </p>
      </div>
    );
  }

  // Error state
  if (aiError) {
    return (
      <div className="bg-[#091413] border border-red-500/20 rounded-xl p-4 flex items-center gap-3">
        <span className="text-lg">🤖</span>
        <p className="text-gray-500 text-sm">{aiError}</p>
      </div>
    );
  }

  // No insights yet
  if (!aiInsights || aiInsights.length === 0) return null;

  return (
    <div className="bg-[#091413] border border-[#44ACFF]/25 rounded-xl p-4 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-lg">🤖</span>
        <h3 className="font-semibold text-sm text-[#44ACFF]">AI Insight</h3>
        <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-[#44ACFF]/10 text-[#44ACFF] border border-[#44ACFF]/20">
          Groq/comupnt
        </span>
      </div>

      <p className="text-xs text-gray-500">
        Personalized analysis based on your driving data
      </p>

      {/* Insights */}
      <ul className="flex flex-col gap-2">
        {aiInsights.map((insight, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#E8EDEC]">
            <span className="text-[#44ACFF] mt-0.5 flex-shrink-0">✦</span>
            {insight}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AiInsightsPanel;
