"use client";

import { motion, useMotionValue, useAnimationFrame, Variants } from "framer-motion";
import { useRef } from "react";
import useMeasure from "react-use-measure";
import ProjectsCard from "./ProjectsCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function Projects() {
  const projects = [
    "/project_1.png",
    "/project_2.png",
    "/project_3.png",
    "/project_4.png",
    "/project_5.png",
  ];

  const SPEED_FAST = 200;
  const SPEED_SLOW = 100;
  const speed = useRef(SPEED_FAST);

  const [ref, { width: trackWidth }] = useMeasure();
  const x = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    if (!trackWidth) return;
    const move = (speed.current * delta) / 1000;
    const current = x.get();
    let next = current - move;
    if (next <= -trackWidth) {
      next += trackWidth;
    }
    x.set(next);
  });

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full h-screen flex flex-col justify-center overflow-hidden relative z-20"
    >
      <motion.div variants={itemVariants} className="mb-16 text-center px-4">
        <h3 className="text-3xl md:text-[64px] font-medium text-white">
          Projects integrated into the Arrakis AI Ecosystem
        </h3>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="relative w-full overflow-hidden h-[102px]"
      >
        <motion.div
          ref={ref}
          className="absolute left-0 top-0 flex min-w-max"
          style={{ x }}
          onHoverStart={() => (speed.current = SPEED_SLOW)}
          onHoverEnd={() => (speed.current = SPEED_FAST)}
        >
          {projects.map((img, i) => (
            <ProjectsCard image={img} key={`a-${i}`} />
          ))}
        </motion.div>

        <motion.div
          className="absolute left-0 top-0 flex min-w-max"
          style={{ x, translateX: trackWidth }}
        >
          {projects.map((img, i) => (
            <ProjectsCard image={img} key={`b-${i}`} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}