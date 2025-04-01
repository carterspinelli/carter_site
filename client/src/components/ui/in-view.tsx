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
  
  // For this specific use case, we're disabling the fallback visibility
  // to ensure content only appears when scrolled into view
  const [forceVisible, setForceVisible] = useState(false);
  
  // No automatic fallback behavior - content will only appear when scrolled into view

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
