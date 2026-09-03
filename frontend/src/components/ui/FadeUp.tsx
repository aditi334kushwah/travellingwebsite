'use client';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
};

export default function FadeUp({ children, delay = 0, className = '', once = true }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '0px 0px -60px 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
