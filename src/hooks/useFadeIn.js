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
      const fadeB = ref.current.querySelectorAll(".fade-b");

      fadeY.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none none",
              invalidateOnRefresh: true,
              ...options,
            },
          },
        );
      });

      fadeO.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 60%",
              toggleActions: "play none none none",
              once: true,
              ...options,
            },
          },
        );
      });
      fadeB.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            filter: "blur(5px)",
          },
          {
            opacity: 1,
            filter: "blur(0)",
            scrollTrigger: {
              trigger: item,
              start: "top 60%",
              toggleActions: "play none none none",
              once: true,
              ...options,
            },
          },
        );
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return ref;
};
