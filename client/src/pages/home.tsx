"use client";
import { InView } from "@/components/ui/in-view";
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Track scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      if (container) {
        setScrollPosition(container.scrollTop);
      }
    };
    
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="h-[100vh] w-full overflow-auto"
    >
      {/* Scroll down text that fades out when scrolling */}
      <motion.div 
        className="py-12 text-center text-sm sticky top-0"
        style={{ 
          opacity: Math.max(0, 1 - scrollPosition / 50),
          pointerEvents: scrollPosition > 50 ? "none" : "auto" 
        }}
      >
        Scroll down
      </motion.div>
      
      {/* Content that appears when scrolling down */}
      <div className="flex min-h-[150vh] items-end justify-center px-4 pb-24">
        <div className="h-[50vh]"></div> {/* Spacer to push content down */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="max-w-96">
            <p>
              <strong className="font-medium">
                Craft beautiful animated components with Motion-Primitives.
              </strong>{" "}
              Designed for developers and designers. The library leverages the
              power of Framer Motion, with intuitive APIs that simplifies
              creating complex animations for any project. Start building more
              dynamic interfaces today.
            </p>
          </div>
        </InView>
      </div>
    </div>
  );
}
