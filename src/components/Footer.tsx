"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function Footer() {
  return (
    <motion.footer 
      className="relative w-full h-screen text-white overflow-hidden flex flex-col px-[24px] sm:px-[48px] md:px-[60px] lg:px-[80px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="h-full flex flex-col justify-between">
        
        <motion.div 
          variants={itemVariants}
          className="flex-grow flex items-center justify-center pb-50"
        >
          <h2 className="text-[32px] leading-[32px] font-normal tracking-tight text-center max-w-4xl">
            Join our community and harvest $SALT
          </h2>
        </motion.div>

        <div className="w-full pb-8 md:pb-16">
          
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-8 md:gap-12 mb-6 text-sm md:text-base font-medium tracking-wide"
          >
            <Link href="#" className="hover:text-white/70 transition-colors">
              How It Works
            </Link>
            <Link href="#" className="hover:text-white/70 transition-colors">
              Buy Salt AI
            </Link>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 1, ease: "easeInOut" } }
            }}
            className="w-full h-px bg-white/20 mb-8 origin-center" 
          />

          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <div className="w-9 h-9 relative">
                  <Image src="/socials_1.png" alt="Telegram" fill />
                </div>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <div className="w-9 h-9 relative">
                  <Image src="/socials_2.png" alt="X" fill />
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-6 text-xs text-white/40">
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}