import style from "./Nav.module.scss";
import { Link } from "react-router-dom";
export function Nav(props) {
  const { isActive } = props;
  return (
    <nav className={isActive ? `${style.globalNav} ${style.isActive}` : style.globalNav}>
      <ul className={style.navList}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <a href="">News</a>
        </li>
        <li>
          <a href="">Access</a>
        </li>
        <li className={style.cta}>
          <a href="">Web予約</a>
        </li>
      </ul>
    </nav>
  );
}
