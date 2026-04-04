'use client';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { skillCategories } from '@/data/skills';
import { SkillBar } from '@/components/ui/SkillBar';

export function SkillsSection() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-lg font-semibold mb-4 text-[var(--accent)]">{cat.category}</h3>
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
