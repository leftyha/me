import { useEffect } from 'react';

export function useScrollController() {
  useEffect(() => {
    const sections = document.querySelectorAll('[data-scene]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-active', 'true');
          }
        });
      },
      { threshold: 0.35 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
}
