// /src/components/LeaderboardTable.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LEADERBOARD_DATA } from "@/data/leaderboardData";
import Image from "next/image";

const TrendIcon = ({ type }: { type: "up" | "down" | "stable" }) => {
  if (type === "up")
    return <Image src="/rankingTop.svg" alt="Up" width={24} height={24} />;
  if (type === "down")
    return <Image src="/rankingBottom.svg" alt="Down" width={24} height={24} />;
  return (
    <Image src="/rankingNeutral.svg" alt="Stable" width={24} height={24} />
  );
};

const ArrowUpIcon = () => (
  <Image
    src="/buttonUp.svg"
    alt="Show Less"
    width={56}
    height={56}
    className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] xl:w-[56px] xl:h-[56px]"
  />
);

const ArrowDownIcon = () => (
  <Image
    src="/buttonDown.svg"
    alt="Show More"
    width={56}
    height={56}
    className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] xl:w-[56px] xl:h-[56px]"
  />
);

export default function LeaderboardTable() {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const outerContainerRef = useRef<HTMLDivElement>(null);

  const INITIAL_ROWS = 8;
  const displayedData = isExpanded
    ? LEADERBOARD_DATA
    : LEADERBOARD_DATA.slice(0, INITIAL_ROWS);

  const GRID_TEMPLATE = "24px 32px 324px repeat(8, 1fr)";

  const handleScrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleExpand = () => {
    if (isExpanded) {
      handleScrollToTop();
    }
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const verticalContainer = scrollContainerRef.current;
    const outerContainer = outerContainerRef.current;

    if (!verticalContainer || !outerContainer) return;

    const handleWheel = (e: WheelEvent) => {
      const isHorizontalScroll =
        e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY);

      if (isHorizontalScroll) {
        e.preventDefault();
        outerContainer.scrollLeft += e.deltaX || e.deltaY;
      }
    };

    let touchStartX = 0;
    let touchStartY = 0;

    const SCROLL_SPEED_MULTIPLIER = 1.8;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchCurrentX = e.touches[0].clientX;
      const touchCurrentY = e.touches[0].clientY;

      const deltaX = touchStartX - touchCurrentX;
      const deltaY = touchStartY - touchCurrentY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (e.cancelable) e.preventDefault();

        outerContainer.scrollLeft += deltaX * SCROLL_SPEED_MULTIPLIER;

        touchStartX = touchCurrentX;
        touchStartY = touchCurrentY;
      }
    };

    verticalContainer.addEventListener("wheel", handleWheel, {
      passive: false,
    });
    verticalContainer.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    verticalContainer.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      verticalContainer.removeEventListener("wheel", handleWheel);
      verticalContainer.removeEventListener("touchstart", handleTouchStart);
      verticalContainer.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="w-full h-full border border-none overflow-hidden flex flex-col">
      <div
        ref={outerContainerRef}
        className="w-full h-full overflow-x-auto overscroll-contain custom-scrollbar flex flex-col"
      >
        <div className="min-w-[1760px] flex flex-col h-full">
          <div
            className="grid gap-3 px-6 py-5 text-[16px] tracking-wider text-[#8F99B0] font-semibold items-center shrink-0"
            style={{ gridTemplateColumns: GRID_TEMPLATE }}
          >
            <div></div>
            <div>#</div>
            <div>Model Name</div>
            <div className="text-right">Average</div>
            <div className="text-right">ARC</div>
            <div className="text-right">HellaSwag</div>
            <div className="text-right">MMLU</div>
            <div className="text-right">TruthfulQA</div>
            <div className="text-right">Winogrande</div>
            <div className="text-right">GSM8K</div>
            <div className="text-right">Usage</div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto overscroll-contain custom-scrollbar flex flex-col transition-all duration-500 ease-in-out"
          >
            <div className="flex flex-col text-white pb-4">
              <AnimatePresence mode="wait">
                {displayedData.map((row, index) => (
                  <motion.div
                    key={row.modelName}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`grid gap-3 px-6 py-6.5 items-center text-base transition-colors duration-200
                      ${index % 2 !== 0 ? "bg-transparent" : "bg-[#C9D9FF14]"}
                      hover:bg-[#1F1F1F]
                    `}
                    style={{ gridTemplateColumns: GRID_TEMPLATE }}
                  >
                    <div className="flex justify-center">
                      <TrendIcon type={row.trend} />
                    </div>
                    <div className="">{index + 1}</div>

                    <div className="truncate" title={row.modelName}>
                      {row.modelName}
                    </div>

                    <div className="text-right font-medium">
                      {row.average.toFixed(2)}
                    </div>

                    <div className="text-right">{row.arc.toFixed(2)}</div>
                    <div className="text-right">{row.hellaSwag.toFixed(2)}</div>
                    <div className="text-right">{row.mmlu.toFixed(2)}</div>
                    <div className="text-right">
                      {row.truthfulQa.toFixed(2)}
                    </div>
                    <div className="text-right">
                      {row.winogrande.toFixed(2)}
                    </div>
                    <div className="text-right">{row.gsm8k.toFixed(2)}</div>
                    <div className="text-right">{row.usage}</div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end relative z-20 shrink-0">
        <button
          onClick={toggleExpand}
          className="flex items-center gap-2 text-sm font-medium text-[14px] md:text-[16px] xl:text-[18px] hover:text-white/80 transition-colors px-4 cursor-pointer"
        >
          {isExpanded ? "" : "View full leaderboard"}
          <span className="ml-8">
            {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </span>
        </button>
      </div>
    </div>
  );
}
