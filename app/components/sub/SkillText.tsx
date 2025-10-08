"use client";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";

export default function SkillText() {
  return (
    <div className="w-full hauto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop(1.5)}
        className="Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[.9]"
      />

      <motion.div
        variants={slideInFromLeft(1.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies
      </motion.div>
    </div>
  );
}
