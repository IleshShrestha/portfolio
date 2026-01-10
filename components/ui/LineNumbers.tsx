"use client";

import { useEffect, useMemo, useRef, useState, startTransition } from "react";

interface LineNumbersProps {
  lineHeight?: number;
  startNumber?: number;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number | string;
  letterSpacing?: string;
  containerRef?: React.RefObject<HTMLElement | null>;
  className?: string;
  trackScroll?: boolean;
}

export default function LineNumbers({
  lineHeight = 20,
  startNumber = 1,
  color = "#6A6A6A",
  fontSize = 12,
  fontFamily = "monospace",
  fontWeight = "normal",
  letterSpacing = "normal",
  containerRef,
  className = "",
  trackScroll = false,
}: LineNumbersProps) {
  const [lineCount, setLineCount] = useState(0);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const resizeObserverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate total number of lines based on container's full scrollHeight
  const calculateLineCount = () => {
    let height = 0;

    if (containerRef?.current) {
      // Always use scrollHeight to get total content height
      height =
        containerRef.current.scrollHeight || containerRef.current.clientHeight;
    } else if (lineNumbersRef.current?.parentElement) {
      height =
        lineNumbersRef.current.parentElement.scrollHeight ||
        lineNumbersRef.current.parentElement.clientHeight;
    } else if (typeof window !== "undefined") {
      height = document.documentElement.scrollHeight;
    }

    const calculatedCount = Math.ceil(height / lineHeight);
    return Math.max(calculatedCount, 1);
  };

  // Generate array of all line numbers (render once, no scroll updates)
  const lineNumbers = useMemo(() => {
    return Array.from({ length: lineCount }, (_, i) => startNumber + i);
  }, [lineCount, startNumber]);

  // Update line count when dimensions change (no scroll tracking)
  useEffect(() => {
    const updateLineCount = () => {
      startTransition(() => {
        setLineCount(calculateLineCount());
      });
    };

    // Initial calculation
    updateLineCount();

    // Set up ResizeObserver for container (debounced to prevent excessive updates)
    const throttledUpdate = () => {
      if (resizeObserverTimeoutRef.current) {
        clearTimeout(resizeObserverTimeoutRef.current);
      }
      resizeObserverTimeoutRef.current = setTimeout(() => {
        updateLineCount();
      }, 150);
    };

    if (containerRef?.current) {
      resizeObserverRef.current = new ResizeObserver(throttledUpdate);
      resizeObserverRef.current.observe(containerRef.current);
    } else if (lineNumbersRef.current?.parentElement) {
      resizeObserverRef.current = new ResizeObserver(throttledUpdate);
      resizeObserverRef.current.observe(lineNumbersRef.current.parentElement);
    }

    // Set up window resize events (debounced)
    if (typeof window !== "undefined") {
      let resizeTimeout: NodeJS.Timeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          updateLineCount();
        }, 200);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        resizeObserverRef.current?.disconnect();
        window.removeEventListener("resize", handleResize);
        clearTimeout(resizeTimeout);
        if (resizeObserverTimeoutRef.current) {
          clearTimeout(resizeObserverTimeoutRef.current);
        }
      };
    }

    return () => {
      resizeObserverRef.current?.disconnect();
      if (resizeObserverTimeoutRef.current) {
        clearTimeout(resizeObserverTimeoutRef.current);
      }
    };
  }, [lineHeight, containerRef, startNumber]);

  return (
    <div
      ref={lineNumbersRef}
      className={`flex flex-col items-end ${className} border-l border-(--border-color) bg-(--secondary-bg)`}
      style={{
        fontFamily,
        fontSize: `${fontSize}px`,
        fontWeight,
        letterSpacing,
        color,
        userSelect: "none",
        whiteSpace: "pre",
        paddingRight: 8,
        backgroundColor: "transparent",
        minWidth: "fit-content",
        width: "36px",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      {lineNumbers.map((number) => (
        <div
          key={number}
          style={{
            height: `${lineHeight}px`,
            lineHeight: `${lineHeight}px`,
            textAlign: "right",
            width: "100%",
          }}
        >
          {number}
        </div>
      ))}
    </div>
  );
}
