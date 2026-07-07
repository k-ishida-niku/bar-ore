import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapRefresh() {
  const currentLocation = useLocation();

  useEffect(() => {
    // ページ遷移時のリフレッシュ
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    // リサイズ時のリフレッシュ
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    // クリーンアップ処理(コンポーネントが消えるときにevent解除)
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentLocation]);
}
