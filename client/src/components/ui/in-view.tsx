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
    amount: 0.1,
    ...viewOptions,
  });
  
  // Fallback visibility state that defaults to showing content after a delay
  // This ensures content eventually appears even if intersection observer fails
  const [forceVisible, setForceVisible] = useState(false);
  
  useEffect(() => {
    // Force visibility after 1 second as a fallback
    const timer = setTimeout(() => {
      setForceVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

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
