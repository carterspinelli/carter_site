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
        const scrollTop = container.scrollTop;
        setScrollPosition(scrollTop);
        
        // In production, log the scroll position at key points to help with debugging
        if (import.meta.env.PROD) {
          if (scrollTop > 100 && scrollTop < 150) {
            console.log(`Scrolling: ${scrollTop}px, Container height: ${container.clientHeight}px`);
          }
          
          if (scrollTop > 500 && scrollTop < 550) {
            console.log(`Deep scroll: ${scrollTop}px, Content should be visible`);
          }
        }
      }
    };

    // Initial check to ensure the container is scrollable
    if (container.scrollHeight <= container.clientHeight) {
      console.log("Warning: Content not tall enough to scroll", {
        scrollHeight: container.scrollHeight,
        clientHeight: container.clientHeight,
        innerHeight: window.innerHeight
      });
    } else {
      console.log("Container is scrollable", {
        scrollHeight: container.scrollHeight,
        clientHeight: container.clientHeight
      });
    }

    container.addEventListener("scroll", handleScroll);
    
    // Force an initial scroll event to update state
    handleScroll();
    
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
        className="py-12 text-center text-sm sticky top-0 lowercase z-10 font-mono"
        style={{ 
          opacity: Math.max(0, 1 - scrollPosition / 50),
          pointerEvents: scrollPosition > 50 ? "none" : "auto" 
        }}
      >
        scroll down
      </motion.div>

      {/* Content that appears when scrolling down */}
      <div className="min-h-[200vh] flex flex-col items-center">
        {/* Force very large spacer to ensure content is well below the fold */}
        <div className="h-[130vh]"></div>

        {/* Content positioned at the very bottom of the page, only visible after scrolling */}
        <div 
          className="w-full flex flex-col items-start fixed bottom-4 left-0 right-0"
          style={{ 
            opacity: Math.min(1, (scrollPosition - 20) / 30),
            pointerEvents: scrollPosition < 30 ? "none" : "auto",
            transform: `translateY(${Math.max(0, 50 - scrollPosition)}px)`
          }}
        >
          {/* Paragraph and links section - positioned at the very bottom */}
          <div className="flex flex-col md:flex-row justify-between w-full px-8 md:px-12 mb-1">
            {/* Left side - paragraph */}
            <InView
              variants={{
                hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              viewOptions={{ 
                margin: "0px 0px -50px 0px", 
                amount: 0.1,
                once: true 
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="max-w-md lowercase font-mono text-sm mb-10 md:mb-0">
                <p>
                  my name is carter spinelli. i build digital solutions that reshape how we interact with money, work, learning, and life. my belief is that technology should vanish, leaving only possibility. the best innovations feel invisible yet transform everything.
                </p>
              </div>
            </InView>

            {/* Right side - links */}
            <InView
              variants={{
                hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              viewOptions={{ 
                margin: "0px 0px -50px 0px", 
                amount: 0.1,
                once: true 
              }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              <div className="flex flex-col lowercase font-mono text-sm">
                <span className="text-foreground hover:underline py-1">
                  <Link href="/projects">projects</Link>
                </span>
                <span className="text-foreground hover:underline py-1">
                  <Link href="/miscellaneous">miscellaneous</Link>
                </span>
              </div>
            </InView>
          </div>

          {/* Orange rectangle position - now at the very bottom of the page */}
          <div className="w-full mt-0 px-8 md:px-12">
            <div className="w-full h-[75px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}