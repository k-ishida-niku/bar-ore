import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useLenis = () => {
  const [lenis, setLenis] = useState(null);
  useEffect(() => {
    // 1. 初期化
    const instance = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
    });

    setLenis(instance);

    // 2. GSAPとの同期
    instance.on("scroll", ScrollTrigger.update);

    // 3. ループ処理
    function raf(time) {
      instance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 4. クリーンアップ
    return () => {
      instance.destroy();
    };
  }, []);
  return lenis;
};
