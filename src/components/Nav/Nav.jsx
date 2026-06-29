import style from "./Nav.module.scss";
export function Nav() {
  return (
    <nav className={style.globalNav}>
      <ul className={style.navList}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">News</a>
        </li>
        <li>
          <a href="">Access</a>
        </li>
        <li>
          <a href="">Web予約</a>
        </li>
      </ul>
    </nav>
  );
}
