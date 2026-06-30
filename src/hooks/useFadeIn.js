import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useFadeIn = (options = {}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    const ctx = gsap.context(() => {
      const fadeY = ref.current.querySelectorAll(".fade-y");
      const fadeO = ref.current.querySelectorAll(".fade-o");

      gsap.fromTo(
        fadeY,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: fadeY,
            start: "top 80%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
            ...options,
          },
        },
      );
      gsap.fromTo(
        fadeO,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 10,
          scrollTrigger: {
            trigger: fadeO,
            start: "top 80%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
            ...options,
          },
        },
      );
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return ref;
};
