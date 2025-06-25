import React, { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  className?: string;
  duration?: number; // Optional duration in seconds
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, className, duration = 0.5 }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    console.log('AnimatedCounter loaded or value changed.');
    const node = nodeRef.current;
    if (!node) return;

    const from = parseFloat(node.textContent || '0');

    // Only animate if the value has actually changed
    if (from !== value) {
      const controls = animate(from, value, {
        duration: duration,
        onUpdate(latest) {
          // Using toFixed(0) for whole numbers, suitable for a general counter.
          // For currency, you might change this to toFixed(2).
          node.textContent = latest.toFixed(0);
        },
      });

      // Cleanup function to stop animation if component unmounts
      return () => controls.stop();
    }
  }, [value, duration]);

  return (
    <span ref={nodeRef} className={className}>
      {value.toFixed(0)}
    </span>
  );
};

export default AnimatedCounter;