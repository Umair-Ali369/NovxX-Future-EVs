import React, { useEffect, useRef } from "react";

const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const abserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal the section itself
            entry.target.classList.add("visible");

            // Reveal any staggered children inside it
            const children = entry.target.querySelectorAll(".reveal-child");
            children.forEach((child) => {
              child.classList.add("visible");
            });

            // Stop observing after first reveal — no repeat animations
            abserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.12,
        rootMargin: options.rootMargin || "0px 0px -40px 0px",
      },
    );
    abserver.observe(el);

    return () => abserver.disconnect();
  }, []);
  return ref;
};
export default useScrollReveal;
