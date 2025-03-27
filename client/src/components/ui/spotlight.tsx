
'use client';

import React, { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  SpringOptions,
} from 'framer-motion';

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
};

export function Spotlight({
  className = '',
  size = 250,
  springOptions,
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const xSpring = useSpring(mouseX, springOptions);
  const ySpring = useSpring(mouseY, springOptions);

  const spotlightStyle = useMotionTemplate`radial-gradient(${size}px circle at ${xSpring}px ${ySpring}px, ${className})`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{
        background: spotlightStyle,
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}
      className="rounded-lg"
    />
  );
}
