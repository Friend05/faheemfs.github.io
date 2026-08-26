import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HudLoaderProps {
  onComplete?: () => void;
}

export function HudLoader({ onComplete }: HudLoaderProps) {
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 250);
          return 100;
        }
        const step = Math.floor(Math.random() * 8 + 5);
        const next = prev + step;
        return next > 100 ? 100 : next;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="fixed inset-0 z-[10000] bg-[#f8fafc] flex flex-col items-center justify-center select-none"
      >
        {/* Minimalist Numerical Counter & Thin Line */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight font-mono mb-4">
            {percent}
            <span className="text-2xl sm:text-3xl text-indigo-600 font-bold ml-1">%</span>
          </div>

          <div className="w-48 sm:w-60 h-1 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-75 rounded-full"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
