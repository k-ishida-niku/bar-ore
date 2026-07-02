import style from "./Footer.module.scss";
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
