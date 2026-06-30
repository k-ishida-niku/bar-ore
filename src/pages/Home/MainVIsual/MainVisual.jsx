import style from "./MainVisual.module.scss";
import siteTitle from "../../../assets/img/home/mv/site-title.svg";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function MainVisual() {
  const mvRef = useRef(null);
  const mainTitle = useRef(null);
  useLayoutEffect(() => {
    if (!mvRef.current) return;

    const animation = gsap.fromTo(
      mvRef.current,
      { filter: "blur(0) brightness(1) grayscale(0)" },
      {
        filter: "blur(10px) brightness(0.8) grayscale(1)",
        scrollTrigger: {
          trigger: mvRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
    );
    const titleAnime = gsap.fromTo(
      mainTitle.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          toggleActions: "play reverse play reverse",
          markers: true, // 開発中はこれが便利です（終了したら消してください）
          scrub: false,
          invalidateOnRefresh: true,
        },
      },
    );

    return () => {
      animation.kill();
      titleAnime.kill();
    };
  }, []);

  return (
    <div className={style.Mv} ref={mvRef}>
      <h1 ref={mainTitle} className={style.siteTitle}>
        <img src={siteTitle} alt="Bar Amber Note" />
      </h1>
    </div>
  );
}
