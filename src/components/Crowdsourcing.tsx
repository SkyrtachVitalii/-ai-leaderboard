"use client";

import { motion, Variants } from "framer-motion";
import BorderedButton from "./Buttons/BorderedButton";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function Crowdsourcing() {
  return (
    <motion.div 
      className="relative w-full min-h-screen text-white flex items-center py-20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="container px-[16px] sm:px-[40px] lg:px-[80px] relative z-10">
        <div className="max-w-[1070px]">
          
          <motion.h2 
            variants={itemVariants}
            className="text-[40px] sm:text-[48px] lg:text-[64px] font-medium tracking-tight mb-8 leading-[1.1] font-display"
          >
            Crowdsourcing our collective <br /> intelligence to build the best AI
          </motion.h2>

          <div className="space-y-6 text-[16px] sm:text-[18px] lg:text-[24px] mb-10 leading-relaxed">
            <motion.p variants={itemVariants} className="text-white/80">
              Open source AI has been lagging behind the likes of Google and
              OpenAI by billions of dollars.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-white/80">
              Salt aims to solve that by rewarding open source developers who
              contribute to the democratization of AI. We run competitions
              between AI models to find and reward the best AI models. As a
              result, our users will be able to access the latest cutting edge
              AI models.
            </motion.p>
          </div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center sm:justify-start"
          >
            <BorderedButton text="Use The Cutting Edge AI"/>
          </motion.div>
          
        </div>
      </div>
    </motion.div>
  );
}