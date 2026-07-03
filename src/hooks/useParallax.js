import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function useParallax(options = {}) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (!ref) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: -100,
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          scrub: 1,
        },
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);
  return ref;
}
