import { use, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useScale = (options = {}) => {
  const scaleRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (!scaleRef.current || !textRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        scaleRef.current,
        { scale: 0.7 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: scaleRef.current,
            start: "top top",
            end: "+=500",
            scrub: 1,
          },
        },
      );

      // テキストのアニメーション
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scaleRef.current,
          start: "top+=500 top",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    });
    return () => {
      ctx.revert();
    };
  }, []);
  return { scaleRef, textRef };
};
