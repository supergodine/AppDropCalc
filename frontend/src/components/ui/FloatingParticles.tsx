import React from 'react';
import { motion } from 'framer-motion';

interface FloatingParticleProps {
  delay?: number;
  duration?: number;
  className?: string;
}

const FloatingParticle: React.FC<FloatingParticleProps> = ({ 
  delay = 0, 
  duration = 20,
  className = "w-2 h-2 bg-white/20 rounded-full"
}) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ 
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 10,
        opacity: 0 
      }}
      animate={{ 
        y: -10,
        opacity: [0, 1, 0],
        x: Math.random() * window.innerWidth
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear'
      }}
    />
  );
};

const FloatingParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 15 }).map((_, i) => (
        <FloatingParticle
          key={i}
          delay={i * 2}
          duration={15 + Math.random() * 10}
          className={`w-1 h-1 bg-purple-400/30 rounded-full`}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;