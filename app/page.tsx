"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import CenterContent from "@/components/layout/CenterContent";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import LineNumbers from "@/components/ui/LineNumbers";

export default function Home() {
  const centerContentRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      className="grid grid-cols-1 min-[1200px]:grid-cols-[300px_1fr_1fr]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="hidden min-[1200px]:block">
        <LeftSidebar />
      </div>
      <div className="relative">
        <div
          className="absolute left-0 top-0 h-full z-10"
          style={{ transform: "translateZ(0)" }}
        >
          <LineNumbers
            containerRef={centerContentRef}
            lineHeight={20}
            color="#6A6A6A"
            fontSize={12}
            className=""
            trackScroll={true}
          />
        </div>
        <div className="pl-12">
          <CenterContent ref={centerContentRef} />
        </div>
      </div>
      <div className="hidden min-[1200px]:block">
        <RightSidebar />
      </div>
    </motion.div>
  );
}
