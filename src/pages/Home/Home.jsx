import { MainVisual } from "./MainVIsual/MainVisual";
import style from "./Home.module.scss";
import { About } from "./About/About";
import { Floor } from "./Floor/Floor";

export function Home() {
  return (
    <>
      <main className={style.main}>
        <MainVisual />
        <About />
        <Floor />
      </main>
    </>
  );
}
