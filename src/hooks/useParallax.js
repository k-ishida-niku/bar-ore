import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function useParallax(options = {}) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (!ref) return;

    const ctx = gsap.context(() => {
      const paraEl = ref.current.querySelectorAll(".para");

      paraEl.forEach((item) => {
        gsap.to(item, {
          yPercent: -20,
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            scrub: 1,
          },
        });
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);
  return ref;
}
