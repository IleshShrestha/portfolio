"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

export default function SkillDataProvide({ src, width, height, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
  });
  const iamgeVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const animateDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      variants={iamgeVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: animateDelay * index }}
    >
      <Image src={src} width={width} height={height} alt="Skill Image" />
    </motion.div>
  );
}
