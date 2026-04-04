export function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 text-sm font-medium rounded-lg border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-colors duration-200"
    >
      Resume
    </a>
  );
}
