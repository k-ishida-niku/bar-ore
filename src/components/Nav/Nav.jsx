import style from "./Nav.module.scss";
import { Link } from "react-router-dom";
import { useLenis } from "../../hooks/useLenis";
export function Nav(props) {
  const { isActive, handleClick } = props;
  const lenis = useLenis();

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    console.log("Nav clicked!");
    lenis.scrollTo(id);
  };

  return (
    <nav className={isActive ? `${style.globalNav} ${style.isActive}` : style.globalNav}>
      <ul className={style.navList}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              handleAnchorClick(e, "#about");
              handleClick();
            }}
          >
            About
          </a>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/">News</Link>
        </li>
        <li>
          <a
            href="#access"
            onClick={(e) => {
              handleAnchorClick(e, "#access");
              handleClick();
            }}
          >
            Access
          </a>
        </li>
        <li className={style.cta}>
          <Link to="/">Web予約</Link>
        </li>
      </ul>
    </nav>
  );
}
