import { MainVisual } from "./MainVIsual/MainVisual";
import style from "./Home.module.scss";
import { About } from "./About/About";
import { Floor } from "./Floor/Floor";
import { Menu } from "./Menu/Menu";

export function Home() {
  return (
    <>
      <main className={style.main}>
        <MainVisual />
        <About />
        <Floor />
        <Menu />
      </main>
    </>
  );
}
