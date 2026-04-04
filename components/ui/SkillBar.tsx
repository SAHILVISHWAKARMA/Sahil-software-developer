'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillBarProps {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export function SkillBar({ name, level, icon }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium flex items-center gap-1.5">
          {icon && <img src={icon} alt={`${name} icon`} width={16} height={16} loading="lazy" className="w-4 h-4" />}
          {name}
        </span>
        <span className="text-xs text-[var(--muted)]">{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-[var(--border)] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-[var(--accent)]"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        />
      </div>
    </div>
  );
}
