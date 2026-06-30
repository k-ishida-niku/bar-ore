import { MainVisual } from "./MainVIsual/MainVisual";
import style from "./Home.module.scss";
import { About } from "./About/About";

export function Home() {
  return (
    <>
      <main className={style.main}>
        <MainVisual />
        <About />
      </main>
    </>
  );
}
