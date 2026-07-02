import style from "./Home.module.scss";
import heroBreak from "../../assets/img/home/h-break/h-break.webp";
import { MainVisual } from "./MainVIsual/MainVisual";
import { About } from "./About/About";
import { Floor } from "./Floor/Floor";
import { Menu } from "./Menu/Menu";
import { News } from "./News/News";
import { Access } from "./Access/Access";

export function Home() {
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
