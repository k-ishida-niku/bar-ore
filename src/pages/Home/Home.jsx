import style from "./Home.module.scss";
import heroBreak from "../../assets/img/home/h-break/h-break.webp";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { MainVisual } from "./MainVIsual/MainVisual";
import { About } from "./About/About";
import { Floor } from "./Floor/Floor";
import { Menu } from "./Menu/Menu";
import { News } from "./News/News";
import { Access } from "./Access/Access";

export function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!location.state?.scrollToId) return;

    const targetId = location.state.scrollToId;
    let attempts = 0;

    const scrollAttempt = () => {
      const el = document.querySelector(targetId);

      if (el) {
        // Lenisを使わず、ブラウザのネイティブ機能でその要素までジャンプさせる
        el.scrollIntoView({ behavior: "auto" }); // "auto" は一瞬で移動、"smooth" はぬるっと移動

        navigate(location.pathname, { replace: true, state: {} });
      } else if (attempts < 100) {
        attempts++;
        requestAnimationFrame(scrollAttempt);
      }
    };

    requestAnimationFrame(scrollAttempt);
  }, [location, navigate]);
  return (
    <>
      <main className={style.main}>
        <MainVisual />
        <About />
        <Floor />
        <Menu />
        <div className={style.heroBreak}>
          <div className={style.heroBreakImg}>
            <img src={heroBreak} alt="" />
          </div>
        </div>
        <News />
        <Access />
      </main>
    </>
  );
}
