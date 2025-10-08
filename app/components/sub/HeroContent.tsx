import { motion, useInView } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center px-20 mt-40 w-full z-20 "
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop(1.5)}
          className="Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[.9]"
        >
          <SparklesIcon className="w-5 h-5 text-[#b49bff] mr-[10px]" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1.5)}
          className="flex flex-col gap-6 my-4 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          Providing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Innovative Solutions
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(1.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I'm a Full Stack Developer with experience in building scalable and
          efficient web applications using modern technologies.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(2.1)}
          className="py-2 button-primary text-center cursor-pointer  rounded-lg text-white max-w-[200px]"
        >
          Learn More
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="workicons"
          width={650}
          height={650}
        />
      </motion.div>
    </motion.div>
  );
}
