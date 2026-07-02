import style from "./SectionTitle.module.scss";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function SectionTitle(props) {
  const { titleText, className } = props;

  // アニメーション関連
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          filter: "blur(5px)",
          opacity: 0,
          scale: 1.05,
        },
        {
          filter: "blur(0)",
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <h2 className={`${style.sectionTitle} ${className}`} ref={ref}>
      {titleText}
    </h2>
  );
}
