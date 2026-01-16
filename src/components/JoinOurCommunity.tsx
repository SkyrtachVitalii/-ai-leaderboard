"use client";

import { motion, Variants } from "framer-motion";
import Socials from "./Socials";

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

export default function JoinOurCommunity() {
  return (
    <motion.div
      className="relative w-full min-h-screen text-white flex items-center py-20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container px-[16px] sm:px-[80px] lg:px-[160px] relative z-10">
        <div className="max-w-[940px]">
          <motion.h2
            variants={itemVariants}
            className="text-[40px] sm:text-[48px] lg:text-[64px] font-medium tracking-tight mb-8 leading-[1.1] font-display"
          >
            Join our community
          </motion.h2>

          <div className="space-y-6 text-[16px] sm:text-[18px] lg:text-[24px] mb-10 leading-relaxed">
            <motion.p variants={itemVariants} className="text-white/80">
              Join us on our mission to to the moon & revolutionize open source
              AI development so that we can build a permissionless,
              democratized, and decentralized AI.
            </motion.p>
            <motion.p variants={itemVariants} className="text-white/80">
              Join us on our mission to to the moon & revolutionize open source
              AI development so that we can build a permissionless,
              democratized, and decentralized AI. Let the fate of AI be in our
              hands and not that of big tech companies.
            </motion.p>
          </div>
          <motion.div
            variants={itemVariants}
            className="flex justify-center sm:justify-start"
          >
            <Socials />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
