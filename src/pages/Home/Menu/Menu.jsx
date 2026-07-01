import style from "./Menu.module.scss";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";

import menuImg01 from "../../../assets/img/home/menu/menu01.webp";
import menuImg02 from "../../../assets/img/home/menu/menu02.webp";
import menuImg03 from "../../../assets/img/home/menu/menu03.webp";

// エンブラカルーセル
import useEmblaCarousel from "embla-carousel-react";

const menuContents = [
  {
    img: menuImg01,
    menuName: "ウイスキー各種",
    price: "￥800~",
  },
  {
    img: menuImg02,
    menuName: "ウイスキー三種のみ比べ",
    price: "￥2,160~",
  },
  {
    img: menuImg03,
    menuName: "フードメニュー",
    price: "￥480~",
  },
];

export function Menu() {
  const [emblaRef] = useEmblaCarousel({ loop: true, watchSlides: true });
  return (
    <section className={style.menu}>
      <div className="inner-s">
        <SectionTitle titleText="MENU" />
        <div ref={emblaRef} className={style.menuListContainer}>
          <ul className={style.menuList}>
            {menuContents.map((item, index) => {
              return (
                <li key={index} className={style.menuItem}>
                  <a href="">
                    <div className={style.menuImg}>
                      <img src={item.img} alt="" />
                    </div>
                    <div>
                      <p className={style.menuName}>{item.menuName}</p>
                      <p className={style.price}>{item.price}</p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.menuDesc}>
          <p>
            60種類のウイスキーを始めとする各種お酒・カクテルと、それらによく合う各種フード。
            <br />
            そして、初心者の方でも安心して楽しめるセットメニューなど
            <br />
            豊富なメニューをご用意しています。
          </p>
          <div className={style.note}>
            <p>※チャージ料金：500円(お通し付き)</p>
            <a href="">ボタン</a>
          </div>
        </div>
      </div>
    </section>
  );
}
