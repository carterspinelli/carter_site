"use client";
import { InView } from "@/components/ui/in-view";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";

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
        className="py-12 text-center text-sm sticky top-0 lowercase z-10"
        style={{ 
          opacity: Math.max(0, 1 - scrollPosition / 50),
          pointerEvents: scrollPosition > 50 ? "none" : "auto" 
        }}
      >
        scroll down
      </motion.div>

      {/* Content that appears when scrolling down */}
      <div className="min-h-[150vh] flex flex-col justify-end pb-24">
        {/* This spacer keeps content at the bottom of the page */}
        <div className="h-[50vh]"></div>
        
        {/* Main content wrapper */}
        <div className="flex justify-between w-full px-8 md:px-12">
          {/* Left side - paragraph */}
          <InView
            variants={{
              hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -150px 0px", once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="max-w-md lowercase">
              <p>
                i seek digital solutions that reshape how we interact with money, work, learning, and life. my belief is that technology should vanish, leaving only possibility. nothing wasted -- every element serves a purpose. the best innovations feel invisible yet transform everything.
              </p>
            </div>
          </InView>
          
          {/* Right side - links */}
          <InView
            variants={{
              hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -150px 0px", once: true }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          >
            <div className="flex flex-col lowercase ml-6 md:ml-12">
              <Link href="/projects" className="mb-4 hover:underline cursor-pointer text-lg">
                projects
              </Link>
              <Link href="/miscellaneous" className="hover:underline cursor-pointer text-lg">
                miscellaneous
              </Link>
            </div>
          </InView>
        </div>
      </div>
    </div>
  );
}