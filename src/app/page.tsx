// /src/app/page.tsx

"use client";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useMotionValueEvent,
} from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import DecorImg from "@/components/Decor/DecorImg";
import Projects from "@/components/Projects";
import Crowdsourcing from "@/components/Crowdsourcing";
import JoinOurCommunity from "@/components/JoinOurCommunity";
import Footer from "@/components/Footer";
import Leaderboard from "@/components/LLMLeaderboard";

function useKeyframes(
  scrollY: MotionValue<number>,
  windowHeight: number,
  keyframes: { point: number; val: string | number }[]
) {
  const inputs = keyframes.map((k) => k.point * windowHeight);
  const outputs = keyframes.map((k) => k.val);
  return useTransform(scrollY, inputs, outputs);
}

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [isStartScrolled, setIsStartScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollY } = useScroll({
    container: containerRef,
  });

  const heroY = useTransform(scrollY, [0, windowHeight], ["-10vh", "-22vh"]);
  const statsY = useTransform(scrollY, [0, windowHeight], ["100vh", "24vh"]);
  const statsOpacity = useTransform(scrollY, [0, windowHeight * 0.5], [0, 1]);

  const planetY = useKeyframes(scrollY, windowHeight, [
    { point: 0, val: isMobile ? "-40vh" : "9vh" },
    { point: 1, val: isMobile ? "-45vh" : "3vh" },
    { point: 2, val: isMobile ? "-60vh" : "-10vh" },
    { point: 3, val: isMobile ? "-70vh" : "-22vh" },
    { point: 4, val: "-80vh" },
    { point: 5, val: "-120vh" },
  ]);

  const planetRotate = useKeyframes(scrollY, windowHeight, [
    { point: 0, val: "-10deg" },
    { point: 1, val: "-9deg" },
    { point: 2, val: "0deg" },
    { point: 3, val: "0deg" },
    { point: 4, val: "0deg" },
    { point: 5, val: "0deg" },
  ]);

  const shadowRedX = useKeyframes(
    scrollY,
    windowHeight,
    isMobile
      ? [
          { point: 0, val: "-10%" },
          { point: 1, val: "10%" },
          { point: 2, val: "20%" },
          { point: 3, val: "20%" },
          { point: 4, val: "30%" },
          { point: 5, val: "30%" },
        ]
      : [
          { point: 0, val: "0%" },
          { point: 1, val: "35%" },
          { point: 2, val: "50%" },
          { point: 3, val: "50%" },
          { point: 4, val: "62%" },
          { point: 5, val: "62%" },
        ]
  );

  const shadowRedY = useKeyframes(
    scrollY,
    windowHeight,
    isMobile
      ? [
          { point: 0, val: "5%" }, // Mobile start
          { point: 1, val: "15%" },
          { point: 2, val: "-40%" },
          { point: 3, val: "-40%" },
          { point: 4, val: "-90%" },
          { point: 5, val: "-140%" },
        ]
      : [
          { point: 0, val: "12%" },
          { point: 1, val: "24%" },
          { point: 2, val: "-40%" },
          { point: 3, val: "-40%" },
          { point: 4, val: "-90%" },
          { point: 5, val: "-140%" },
        ]
  );

  const shadowRedRotate = useKeyframes(scrollY, windowHeight, [
    { point: 0, val: "-4deg" },
    { point: 1, val: "55deg" },
    { point: 2, val: "62deg" },
    { point: 3, val: "62deg" },
    { point: 4, val: "62deg" },
    { point: 5, val: "0deg" },
  ]);

  const shadowRedOpacity = useKeyframes(scrollY, windowHeight, [
    { point: 0, val: "1" },
    { point: 1, val: "1" },
    { point: 2, val: "0.6" },
    { point: 3, val: "0.6" },
    { point: 4, val: "0.6" },
    { point: 5, val: "0.6" },
  ]);

  const shadowBlueX = useKeyframes(
    scrollY,
    windowHeight,
    isMobile
      ? [
          { point: 0, val: "20%" },
          { point: 1, val: "30%" },
          { point: 2, val: "30%" },
          { point: 3, val: "30%" },
          { point: 4, val: "10%" },
        ]
      : [
          { point: 0, val: "50%" },
          { point: 1, val: "60%" },
          { point: 2, val: "60%" },
          { point: 3, val: "60%" },
          { point: 4, val: "20%" },
        ]
  );

  const shadowBlueY = useKeyframes(
    scrollY,
    windowHeight,
    isMobile
      ? [
          { point: 0, val: "10%" }, // Mobile start
          { point: 1, val: "0%" },
          { point: 2, val: "-10%" },
          { point: 3, val: "-10%" },
          { point: 4, val: "-130%" },
        ]
      : [
          { point: 0, val: "15%" }, // Desktop start
          { point: 1, val: "0%" },
          { point: 2, val: "-10%" },
          { point: 3, val: "-10%" },
          { point: 4, val: "-130%" },
        ]
  );

  const shadowBlueRotate = useKeyframes(scrollY, windowHeight, [
    { point: 0, val: "0deg" },
    { point: 1, val: "50deg" },
    { point: 2, val: "60deg" },
    { point: 3, val: "60deg" },
    { point: 4, val: "0deg" },
    { point: 5, val: "0deg" },
  ]);

  const shadowBlueOpacity = useKeyframes(scrollY, windowHeight, [
    { point: 0, val: "1" },
    { point: 1, val: "1" },
    { point: 2, val: "0.6" },
    { point: 3, val: "0.6" },
    { point: 4, val: "0.6" },
    { point: 5, val: "0.6" },
  ]);

  const nasaPlanetY = useKeyframes(
    scrollY,
    windowHeight,
    isMobile
      ? [
          { point: 0, val: "100vh" },
          { point: 1, val: "100vh" },
          { point: 2, val: "100vh" },
          { point: 3, val: "100vh" },
          { point: 4, val: "100vh" },
          { point: 5, val: "6vh" },
          { point: 6, val: "0vh" },
        ]
      : [
          { point: 0, val: "100vh" },
          { point: 1, val: "100vh" },
          { point: 2, val: "100vh" },
          { point: 3, val: "100vh" },
          { point: 4, val: "100vh" },
          { point: 5, val: "32vh" },
          { point: 6, val: "0vh" },
        ]
  );

  const moonY = useKeyframes(scrollY, windowHeight, [
    { point: 0, val: "0" },
    { point: 1, val: "0" },
    { point: 2, val: "0" },
    { point: 3, val: "0" },
    { point: 4, val: "0" },
    { point: 5, val: "-87vh" },
    { point: 6, val: "-200vh" },
  ]);

  const moonX = useKeyframes(
    scrollY,
    windowHeight,
    isMobile
      ? [
          { point: 4, val: "0%" },
          { point: 5, val: "20%" },
          { point: 6, val: "20%" },
        ]
      : [
          { point: 0, val: "0%" },
          { point: 6, val: "0%" },
        ]
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > windowHeight * 0.5) {
      setShowStats(true);
      setIsStartScrolled(true);
    } else {
      setShowStats(false);
      setIsStartScrolled(false);
    }
  });

  return (
    <main
      ref={containerRef}
      className="h-screen w-full bg-black text-white overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth"
    >
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute bottom-0 right-0 translate-x-[20%] md:translate-x-0"
          style={{
            width: isMobile ? "85vmin" : "46vw",
            y: planetY,
            rotate: planetRotate,
          }}
        >
          <DecorImg imageSrc="/planet.png" className="w-full h-auto" />
        </motion.div>

        <motion.div
          className="absolute bottom-[-14%] left-[-14%]"
          style={{
            width: isMobile ? "120vmax" : "900px",
            maxWidth: "none",
            height: "auto",
            x: shadowRedX,
            y: shadowRedY,
            rotate: shadowRedRotate,
            opacity: shadowRedOpacity,
          }}
        >
          <DecorImg
            imageSrc="/red_shadow.png"
            className="opacity-80 w-full h-auto"
          />
        </motion.div>

        <motion.div
          className="absolute -top-[300px] left-[-100px]"
          style={{
            width: isMobile ? "120vmax" : "900px",
            maxWidth: "none",
            height: "auto",
            x: shadowBlueX,
            y: shadowBlueY,
            rotate: shadowBlueRotate,
            opacity: shadowBlueOpacity,
          }}
        >
          <DecorImg
            imageSrc="/blue_shadow.png"
            className="opacity-80 w-full h-auto"
          />
        </motion.div>

        <motion.div
          className="absolute -bottom-[500px] right-0 md:right-[10vw]"
          style={{
            width: "clamp(200px, 30vmin, 484px)",
            height: "auto",
            y: moonY,
            x: moonX,
          }}
        >
          <DecorImg
            imageSrc="/moon.png"
            className="opacity-30 sm:opacity-45 md:opacity-80 2xl:opacity-100 w-full h-auto"
          />
        </motion.div>

        <motion.div
          className="absolute -bottom-[0px] object-cover"
          style={{
            width: "100vw",
            height: "auto",
            y: nasaPlanetY,
          }}
        >
          <DecorImg
            imageSrc="/nasa-planet.png"
            className="opacity-80 2xl:opacity-100 w-full h-auto"
          />
        </motion.div>
      </div>

      <section className="relative h-[200vh] w-full">
        <div className="absolute top-0 left-0 w-full h-screen snap-start pointer-events-none" />
        <div className="absolute top-[100vh] left-0 w-full h-screen snap-start pointer-events-none" />

        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center">
          <div className="absolute top-0 left-0 right-0 z-50 w-full">
            <Header />
          </div>

          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <motion.div
              style={{ y: heroY }}
              className="absolute inset-0 flex items-center justify-center w-full h-full pointer-events-none"
            >
              <div className="pointer-events-auto">
                <Hero isStartScrolled={isStartScrolled} isMobile={isMobile} />
              </div>
            </motion.div>

            <motion.div
              style={{ y: statsY, opacity: statsOpacity }}
              className="absolute inset-0 flex items-center justify-center w-full h-full pt-0 2xl:pt-[clamp(64px,4.5vw,80px)] pointer-events-none"
            >
              <div className="w-full px-[clamp(12px,2vw,16px)] pointer-events-auto">
                <HeroStats isStarted={showStats} isMobile={isMobile} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-20 w-full min-h-screen snap-start flex flex-col items-center justify-center overflow-hidden">
        <Projects />
      </section>

      <section className="relative z-20 w-full min-h-screen snap-start flex flex-col items-center justify-center">
        <Crowdsourcing />
      </section>
      <section className="relative z-20 w-full min-h-screen snap-start flex flex-col items-center">
        <Leaderboard />
      </section>
      <section className="relative z-20 w-full min-h-screen snap-start flex flex-col items-center justify-center">
        <JoinOurCommunity />
      </section>
      <section className="relative z-20 w-full min-h-screen snap-start flex flex-col items-center justify-center">
        <Footer />
      </section>
    </main>
  );
}
