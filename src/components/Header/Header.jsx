import logo from "../../assets/img/global/logo.svg";
import style from "./Header.module.scss";
import { Nav } from "../Nav/Nav";
import { useState } from "react";

export function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick((prev) => {
      return !prev;
    });
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <a href="">
          <img src={logo} alt="" />
        </a>
      </div>
      <Nav isActive={click} />
      <div className={click ? ` ${style.bBtn} ${style.isActive}` : style.bBtn} onClick={handleClick}>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
