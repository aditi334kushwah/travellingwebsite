'use client';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
  direction?: Direction;
  distance?: number;
  duration?: number;
};

export default function FadeUp({
  children,
  delay = 0,
  className = '',
  once = true,
  direction = 'up',
  distance = 50,
  duration = 0.7,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '0px 0px -60px 0px' });

  // Calculate initial offset based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -distance, y: 0 };
      case 'right':
        return { opacity: 0, x: distance, y: 0 };
      case 'down':
        return { opacity: 0, x: 0, y: -distance };
      case 'up':
      default:
        return { opacity: 0, x: 0, y: distance };
    }
  };

  const initial = getInitialPosition();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
