import {
  motion,
  Variants,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

const stats = [
  { value: 1873, label: "LLM models", prefix: "" },
  { value: 326734, label: "Paid to data scientists", prefix: "$" },
  { value: 6557, label: "Developers", prefix: "" },
];

function Counter({
  value,
  prefix,
  delay,
  trigger,
}: {
  value: number;
  prefix: string;
  delay: number;
  trigger: boolean;
}) {
  const count = useMotionValue(0);
  const springValue = useSpring(count, {
    stiffness: 40,
    damping: 20,
  });

  const displayValue = useTransform(
    springValue,
    (latest) => `${prefix}${Math.round(latest).toLocaleString()}`
  );

  useEffect(() => {
    if (trigger) {
      const timer = setTimeout(() => {
        count.set(value);
      }, delay * 1000);

      return () => clearTimeout(timer);
    } else {
      count.set(0);
    }
  }, [trigger, value, count, delay]);

  return <motion.span>{displayValue}</motion.span>;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function HeroStats({
  isStarted,
}: {
  isStarted: boolean;
  isMobile: boolean;
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isStarted ? "visible" : "hidden"}
      className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full font-sans text-white"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{
            scale: 1.03,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            transition: { duration: 0.2 },
          }}
          className="flex flex-col items-center justify-center py-[clamp(10px,4.2vmin,40px)] rounded-[91px] bg-white-10/5 backdrop-blur-sm w-full cursor-default"
          style={{
            background:
              "linear-gradient(105.65deg, rgba(150, 52, 136, 0.2) 0%, rgba(252, 111, 50, 0.2) 54%, rgba(255, 74, 89, 0.2) 100%)",
          }}
        >
          <span className="text-[clamp(24px,5.6vmin,64px)] font-medium mb-1 sm:mb-2 leading-none">
            <Counter
              value={stat.value}
              prefix={stat.prefix}
              delay={index * 0.2}
              trigger={isStarted}
            />
          </span>

          <motion.span className="text-[clamp(14px,2.2vmin,24px)] text-white/80 text-center px-2">
            {stat.label}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
}
