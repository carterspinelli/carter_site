'use client';
import { ReactNode, useRef, useEffect, useState } from 'react';
import {
  motion,
  useInView,
  Variant,
  Transition,
  UseInViewOptions,
} from 'framer-motion';

interface InViewProps {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
}

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function InView({
  children,
  variants = defaultVariants,
  transition,
  viewOptions,
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2, // Increase threshold - element needs to be more visible
    ...viewOptions,
  });
  
  // Fallback visibility state for production environments
  const [forceVisible, setForceVisible] = useState(false);
  
  useEffect(() => {
    // Only enable the fallback in production, and delay it longer
    // to ensure the animation is more noticeable
    if (import.meta.env.PROD) {
      const timer = setTimeout(() => {
        if (!isInView) {
          console.log("Applying fallback visibility for production");
          setForceVisible(true);
        }
      }, 3000); // Longer delay to let natural animations happen first
      
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={(isInView || forceVisible) ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
