import style from "./Footer.module.scss";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={`${style.footerInner} inner-s`}>
        <div className={style.footerConetnts}>
          <p className={style.footerLogo}>Bar Amber Note</p>
          <address className={style.footerInfo}>
            <span>
              〒160-0006
              <br />
              東京都新宿区舟町33-12 舟町ビル1F
            </span>
            <a href="tel:0312345678" className={style.tel}>
              03-1234-5678
            </a>
          </address>
        </div>
        <div className={style.footerCta}>
          <nav className={style.footerNav}>
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
            </ul>
          </nav>
          <a href="" className={style.footerCtaBtn}>
            Web予約
          </a>
        </div>
      </div>
      <p className={style.copy}>
        <small>&copy; Bar Amber Note</small>
      </p>
    </footer>
  );
}
