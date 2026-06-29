import logo from "../../assets/img/global/logo.svg";
import style from "./Header.module.scss";
import { Nav } from "../Nav/Nav";

export function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <a href="">
            <img src={logo} alt="" />
          </a>
        </div>
        <Nav />
      </header>
    </>
  );
}
