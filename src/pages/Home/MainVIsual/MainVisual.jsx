import style from "./MainVisual.module.scss";
import titleLogo from "../../../assets/img/global/title-logo.svg";
import cCopy from "../../../assets/img/global/mv-catch-copy.svg";

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
      { filter: "blur(0) brightness(1) saturate(1)" },
      {
        filter: "blur(5px) brightness(0.3) saturate(0.3)",
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
          // markers: true, // 開発中はこれが便利です（終了したら消してください）
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
      <div className={style.mvInner}>
        <h1 ref={mainTitle} className={style.siteTitle}>
          <span className={style.catchCopy}>
            <img src={cCopy} alt="" />
          </span>

          <span className={style.shopName}>
            <span>Bar</span>
            <span>Amber</span>
            <span>Note</span>
          </span>
          <span className={style.shopNameJp}>バー・アンバー・ノート</span>
        </h1>
      </div>
    </div>
  );
}
