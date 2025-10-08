"use client";
import { useState, useEffect } from "react";
import HeroContent from "../sub/HeroContent";
export default function Hero() {
  const [videoOpacity, setVideoOpacity] = useState("opacity-100");
  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    // Start the transition to 50% opacity after a short delay
    const timer = setTimeout(() => {
      setVideoOpacity("opacity-[0.3]");
    }, 1000); // 500ms delay before starting the fade

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className={`w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${videoOpacity}`}
      >
        <source src="/heroBackground.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full">
        <HeroContent />
      </div>
    </div>
  );
}
