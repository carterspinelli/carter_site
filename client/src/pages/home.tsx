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
        className="py-12 text-center text-sm sticky top-0 lowercase"
        style={{ 
          opacity: Math.max(0, 1 - scrollPosition / 50),
          pointerEvents: scrollPosition > 50 ? "none" : "auto" 
        }}
      >
        scroll down
      </motion.div>
      
      {/* Content that appears when scrolling down */}
      <div className="flex min-h-[150vh] items-end justify-center px-4 pb-24 relative">
        <div className="h-[50vh]"></div> {/* Spacer to push content down */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="max-w-96 lowercase">
            <p>
              <strong className="font-medium">
                i seek digital solutions that reshape how we interact with money, work, learning, and life.
              </strong>{" "}
              my belief is that technology should vanish, leaving only possibility. nothing wasted -- every element serves a purpose. the best innovations feel invisible yet transform everything.
            </p>
            
            </div>
        </InView>
        
        {/* Navigation links that appear after scrolling */}
        <InView
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          className="fixed bottom-8 right-20 flex text-sm lowercase"
          threshold={0.1}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-end gap-4">
            <a href="/projects" className="hover:underline transition-all duration-300">projects</a>
            <a href="/miscellaneous" className="hover:underline transition-all duration-300">miscellaneous</a>
          </div>
        </InView>
      </div>
    </div>
  );
}
