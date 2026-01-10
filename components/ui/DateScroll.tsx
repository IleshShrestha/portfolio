import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function DateScrollSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.25], [-100, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.25], [100, 0]);
  return (
    <div ref={ref} className="flex items-center gap-2">
      <motion.div
        className="flex flex-col items-start font-extrabold"
        style={{ x: leftX }}
      >
        <h1 className="text-[98px] text-(--border-color) leading-none">
          SINCE
        </h1>
        <span className="text-(--border-color) text-[38px] leading-none">
          ////////////////////////////
        </span>
      </motion.div>
      <motion.div className="flex flex-col items-start " style={{ x: rightX }}>
        <span className="text-(--border-color) text-[38px] leading-none">
          {" "}
          /////////////////////{" "}
        </span>
        <h1 className="text-[98px] font-medium text-(--border-color) leading-none">
          {" "}
          2020{" "}
        </h1>
      </motion.div>
    </div>
  );
}
