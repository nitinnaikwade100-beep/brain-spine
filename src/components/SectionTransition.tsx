import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionTransitionProps {
  children: ReactNode;
  delay?: number;
}

export default function SectionTransition({ children, delay = 0 }: SectionTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Custom cubic-bezier for smooth slide-up
      }}
    >
      {children}
    </motion.div>
  );
}
