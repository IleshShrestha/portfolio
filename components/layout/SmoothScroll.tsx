"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode, useEffect } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Smooth scroll implementation with momentum
    let scrollVelocity = 0;
    let isScrolling = false;
    let animationFrame: number;

    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY;
      scrollVelocity += delta * 0.01;
      if (!isScrolling) {
        isScrolling = true;
        applyMomentum();
      }
    };

    const applyMomentum = () => {
      if (Math.abs(scrollVelocity) > 0.1) {
        window.scrollBy(0, scrollVelocity * 0.1);
        scrollVelocity *= 0.1;
        animationFrame = requestAnimationFrame(applyMomentum);
      } else {
        // Stop animation when velocity is too low
        scrollVelocity = 0;
        isScrolling = false;
      }
    };

    // Add passive event listener for better performance
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.8,
      }}
    >
      {children}
    </MotionConfig>
  );
}
