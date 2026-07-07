import logo from "../../assets/img/global/logo.svg";
import style from "./Header.module.scss";
import { Nav } from "../Nav/Nav";
import { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <Nav isActive={click} />
      <div className={click ? ` ${style.bBtn} ${style.isActive}` : style.bBtn} onClick={handleClick}>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
