import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useLenis = () => {
  useEffect(() => {
    // 1. 初期化
    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
    });

    // 2. GSAPとの同期
    lenis.on("scroll", ScrollTrigger.update);

    // 3. ループ処理
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 4. クリーンアップ
    return () => {
      lenis.destroy();
    };
  }, []);
};
