// /src/components/Leaderboard.tsx
"use client";

import BorderedButton from "./Buttons/BorderedButton";
import LeaderboardTable from "./LeaderboardTable";

export default function Leaderboard() {
  return (
    <div className="w-full h-[100dvh] max-h-[100dvh] flex flex-col px-[clamp(16px,3.5vw,80px)] py-[clamp(24px,3vh,40px)] relative overflow-hidden">
      
      <div className="shrink-0 flex flex-col sm:flex-row justify-between items-start md:items-end gap-6 mb-4 md:mb-6">
        <h2
          className="font-display font-medium leading-[1.1] tracking-tight
                     text-[clamp(32px,5vw,64px)] text-white"
        >
          LLM Leaderboard
        </h2>

        <div className="shrink-0">
          <BorderedButton
            text="Submit your model"
            onClick={() => console.log("Submit model clicked")}
          />
        </div>
      </div>

      <div className="shrink-0 mb-4 md:mb-6">
        <p
          className="text-white/60 font-light leading-relaxed
                     text-[clamp(14px,1.2vw,18px)]"
        >
          We evaluate LLMs on key benchmarks using the Eleuther AI, a
          framework to test LLMs on a large number of different evaluation
          tasks. <br className="hidden md:block" /> The higher the score, the better the LLM.
        </p>
      </div>

      <div className="w-full flex-1 min-h-0">
        <LeaderboardTable />
      </div>
    </div>
  );
}