import style from "./MenuMainContents.module.scss";
import { PageSectionTitle } from "../../../components/PageSectionTitle/PageSectionTitle";
import { MenuIntro } from "../../../components/MenuIntro/MenuIntro";
import { MenuPageList } from "../../../components/MenuPageList/MenuPageList";

import dringImg from "../../../assets/img/menu-page/drink/drink.webp";
import foodImg from "../../../assets/img/menu-page/drink/food.webp";
export function MenuMainContents() {
  const whiskyArr = [
    {
      name: "スコッチ、バーボン各種",
      price: "¥900~",
    },
    {
      name: "シングルモルト",
      price: "¥1,400~",
    },
    {
      name: "25年物、限定ボトル",
      price: "¥3,500~",
    },
  ];
  const othersArr = [
    {
      name: "ビール",
      price: "¥800~",
    },
    {
      name: "ワイン",
      price: "¥900~",
    },
    {
      name: "カクテル各種",
      price: "¥1,000~",
    },
    {
      name: "ソフトドリンクなど",
      price: "¥700~",
    },
  ];
  const foodArr = [
    {
      name: "ショコラ・アソート",
      price: "¥1,200",
    },
    {
      name: "フルーツ・ショコラ",
      price: "¥1,000",
    },
    {
      name: "スモーキー・生チョコ",
      price: "¥1,100",
    },
    {
      name: "チーズ盛り合わせ",
      price: "¥1,600",
    },
    {
      name: "ブルーチーズ＆ハニー",
      price: "¥1,400",
    },
    {
      name: "スモークナッツ",
      price: "¥800",
    },
    {
      name: "生ハムとオリーブ",
      price: "¥1,400",
    },
  ];

  return (
    <>
      <section className={style.drink}>
        <div className={`inner-s`}>
          <PageSectionTitle enTitle="DRINK" jpTitle="ドリンクメニュー" mbClass="mb-40" />
          <MenuIntro title01="60種のウィスキーが紡ぐ、" title02="あなただけの一杯" text="60種類のウィスキーが、あなたの来店をお待ちしています。銘柄選びに迷う必要はありません。その日の気分や好みを伝えていただければ、マスターがあなたに最適な一杯を丁寧にご提案します。初心者の方も、どうぞリラックスしてお楽しみください。" img={dringImg} />
          <MenuPageList title="WHISKY" menuArr={whiskyArr} />
          <MenuPageList title="OTHERS" menuArr={othersArr} />
        </div>
      </section>
      <section className={style.drink}>
        <div className={`inner-s`}>
          <PageSectionTitle enTitle="FOOD" jpTitle="フードメニュー" mbClass="mb-40" />
          <MenuIntro title01="フードペアリングで、" title02="より深いアロマを。" text="Bar Amber Noteでは、ウィスキーの特徴を最大限に引き出すフードを厳選しています。熟成香にはチョコレート、スモーキーフレーバーにはナッツやチーズを。あなたの好みの一杯に合わせた最適なペアリングを、どうぞお愉しみください。" img={foodImg} />
          <MenuPageList title="FOOD PAIRING" menuArr={foodArr} />
        </div>
      </section>
    </>
  );
}
