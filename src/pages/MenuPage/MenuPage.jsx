import style from "./MenuPage.module.scss";
import { MenuFv } from "./Fv/MenuFv";
import { MenuMainContents } from "./MenuMainContents/MenuMainContents";
import fvImg from "../../assets/img/menu-page/fv/menu-fv-bg.webp";

export function MenuPage() {
  return (
    <main className={style.main}>
      <MenuFv fvImg={fvImg} />
      <MenuMainContents />
      <div className={style.note}>
        <p>※ 価格は全て税込みです。</p>
      </div>
    </main>
  );
}
