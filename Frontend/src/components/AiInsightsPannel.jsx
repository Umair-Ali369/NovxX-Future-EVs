import { useEffect, useRef } from "react";
import { useAI } from "../context/AIContext";
 
const AiInsightsPanel = ({ calculationData }) => {
  const { aiInsights, aiLoading, aiError, generateInsights } = useAI();
  const called = useRef(false);
 
  useEffect(() => {
    if (!calculationData || called.current) return;
    called.current = true;
    generateInsights(calculationData);
  }, [calculationData]);
 
  // Loading state
  if (aiLoading) {
    return (
      <div className="mt-4 rounded-xl border border-[#44ACFF]/20 bg-[#44ACFF]/5 p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#44ACFF] text-sm font-semibold">
            ✦ AI Insights
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-[#44ACFF]/10 text-[#44ACFF] border border-[#44ACFF]/20">
            Llama 3.3
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-3 rounded w-full" />
          <div className="skeleton h-3 rounded w-5/6" />
          <div className="skeleton h-3 rounded w-4/6" />
        </div>
      </div>
    );
  }
 
  // Error state
  if (aiError) {
    return (
      <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
        <p className="text-red-400 text-sm font-semibold mb-1">✦ AI Insights</p>
        <p className="text-red-300/70 text-sm">{aiError}</p>
      </div>
    );
  }
 
  // No insights yet
  if (!aiInsights || aiInsights.length === 0) return null;
 
  return (
    <div className="mt-4 rounded-xl border border-[#44ACFF]/20 bg-[#44ACFF]/5 p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#44ACFF] text-sm font-semibold">
          ✦ AI Insights
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-[#44ACFF]/10 text-[#44ACFF] border border-[#44ACFF]/20">
        qwen/qwen3.8-27b
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {aiInsights.map((insight, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
            <span className="text-[#44ACFF] mt-0.5 shrink-0">✦</span>
            {insight}
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default AiInsightsPanel;
 