'use client';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { achievements } from '@/data/achievements';

export function AchievementsSection() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
        <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]"
            >
              <h3 className="font-semibold mb-2">{a.title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
