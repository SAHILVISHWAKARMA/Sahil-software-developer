'use client';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { experiences } from '@/data/experience';

export function ExperienceSection() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        <div className="relative border-l-2 border-[var(--border)] pl-6 flex flex-col gap-10">
          {experiences.map((exp) => (
            <div key={exp.company} className="relative">
              <span className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--background)]" />
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-[var(--accent)] text-sm font-medium mt-0.5">{exp.role}</p>
              <p className="text-[var(--muted)] text-sm mb-4">{exp.tenure}</p>
              <ul className="flex flex-col gap-2">
                {exp.achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-[var(--muted)] text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--muted)] flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
