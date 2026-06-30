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
            duration: 1,
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
        gsap.set(item, { opacity: 0 });
        ScrollTrigger.create({
          trigger: item,
          start: "top 80%",
          once: true,
          ...options,
          onEnter: () => {
            gsap.to(item, {
              opacity: 1,
              duration: 1,
              delay: 0.5,
            });
          },
        });
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return ref;
};
