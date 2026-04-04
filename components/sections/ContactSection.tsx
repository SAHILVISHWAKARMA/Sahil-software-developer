'use client';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ContactForm } from '@/components/ui/ContactForm';

export function ContactSection() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
        <h2 className="text-3xl font-bold mb-4 text-center">Contact</h2>
        <p className="text-[var(--muted)] text-center mb-10">
          Let&apos;s connect — I&apos;m open to new opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:sahilvishwakarma6260@gmail.com"
            className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            sahilvishwakarma6260@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-vishwakarma-12042221b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
        </div>
        <ContactForm />
      </motion.div>
    </section>
  );
}
