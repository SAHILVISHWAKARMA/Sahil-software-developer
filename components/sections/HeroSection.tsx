'use client';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16"
    >
      <motion.div
        className="text-center max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
        >
          Sahil Vishwakarma
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-[var(--muted)] mb-3"
        >
          Full Stack Software Developer
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-[var(--muted)] mb-8"
        >
          Building scalable, high-performance web applications
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] font-medium transition-colors duration-200"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
