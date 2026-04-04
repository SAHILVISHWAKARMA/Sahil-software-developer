'use client';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const strengths = ['Problem-solving', 'Debugging complex systems', 'Working with legacy code', 'Writing maintainable code'];

export function AboutSection() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-[var(--muted)] leading-relaxed mb-6">
          I&apos;m a Full Stack Developer with 3.5+ years of professional experience building scalable web applications.
          I specialize in the React and .NET ecosystem, with a strong focus on scalable systems and clean architecture.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-8">
          My expertise spans React, TypeScript, ASP.NET Core, and SQL Server — delivering end-to-end solutions
          from responsive frontends to optimized backend APIs.
        </p>
        <h3 className="text-lg font-semibold mb-4">Strengths</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {strengths.map((s) => (
            <li key={s} className="flex items-center gap-2 text-[var(--muted)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
