import style from "./MenuPage.module.scss";
import { MenuFv } from "./Fv/MenuFv";
import { MenuMainContents } from "./MenuMainContents/MenuMainContents";

export function MenuPage() {
  return (
    <main className={style.main}>
      <MenuFv />
      <MenuMainContents />
      <div className={style.note}>
        <p>※ 価格は全て税込みです。</p>
      </div>
    </main>
  );
}
