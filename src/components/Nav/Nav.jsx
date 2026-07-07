import style from "./Nav.module.scss";
import { Link } from "react-router-dom";
export function Nav(props) {
  const { isActive } = props;

  return (
    <nav className={isActive ? `${style.globalNav} ${style.isActive}` : style.globalNav}>
      <ul className={style.navList}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/">News</Link>
        </li>
        <li>
          <Link to="/">Access</Link>
        </li>
        <li className={style.cta}>
          <Link to="/">Web予約</Link>
        </li>
      </ul>
    </nav>
  );
}
