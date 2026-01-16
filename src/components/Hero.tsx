"use client";

import { motion, MotionStyle, Variants } from "framer-motion";
import BorderedButton from "./Buttons/BorderedButton";
import UnBorderedButton from "./Buttons/UnBorderedButton";

interface HeroProps {
  titleStyle?: MotionStyle;
  isStartScrolled?: boolean;
  isMobile?: boolean;
}

export default function Hero({
  isStartScrolled,
  titleStyle,
  isMobile,
}: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: isMobile ? -50 : 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };
  return (
    <section className="relative pt-[clamp(190px,15vw,240px)] overflow-hidden w-dvw">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-padding-inline w-full pb-[clamp(64px,6vw,80px)] md:pb-[clamp(75px,7vw,96px)] pt-[clamp(64px,6vw,80px)] md:pt-[clamp(75px,7vw,96px)]"
      >
        <motion.h1
          variants={itemVariants}
          className="font-display font-medium leading-[1.1] tracking-tight
                     text-[clamp(32px,10vw,40px)]
                     sm:text-[clamp(46px,9vw,58px)]
                     md:text-[clamp(50px,8vw,64px)]
                     lg:text-[clamp(58px,7vw,72px)]
                     xl:text-[clamp(72px,6vw,92px)]
                     2xl:text-[clamp(100px,7vw,128px)]"
        >
          <motion.span
            className={`bg-clip-text text-transparent inline-block ${
              isStartScrolled ? "bg-white" : "bg-primary-gradient"
            }`}
            style={titleStyle}
          >
            A new economic primitive <br />
            for funding decentralized AI
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-white/60 text-[16px] md:text-[clamp(16px,1.5vw,20px)] max-w-[700px] mt-2 sm:mt-6"
        >
          We track, rank and pay for the best open source decentralized LLMs to
          compete against OpenAI
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-0 sm:gap-8 mt-2 sm:mt-10"
        >
          <BorderedButton
            text="Buy Spice AI"
            onClick={() => console.log("Buy Clicked")}
          />

          <UnBorderedButton
            text="Try Now"
            onClick={() => console.log("Try Clicked")}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
