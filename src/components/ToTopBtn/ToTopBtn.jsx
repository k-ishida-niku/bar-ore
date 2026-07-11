import style from "./ToTopBtn.module.scss";

import { useEffect, useRef } from "react";

import { useLenis } from "../../hooks/useLenis";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function ToTopBtn() {
  const ref = useRef(null);
  const lenis = useLenis();
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          visibility: "hidden",
        },
        {
          opacity: 1,
          visibility: "visible",
          scrollTrigger: {
            start: () => window.innerHeight * 0.5,
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    lenis?.scrollTo(0);
  };

  return <a href="#" className={style.toTopBtn} ref={ref} onClick={handleClick} aria-label="ページ最上部へ戻る"></a>;
}
