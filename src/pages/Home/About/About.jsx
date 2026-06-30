import intro01 from "../../../assets/img/home/about/intro01.webp";
import intro02 from "../../../assets/img/home/about/intro02.webp";
import floating01 from "../../../assets/img/home/about/intro-img-floating01.webp";
import floating02 from "../../../assets/img/home/about/intro-img-floating02.webp";
import floating03 from "../../../assets/img/home/about/intro-img-floating03.webp";
import featureIm01 from "../../../assets/img/home/about/feature01.webp";
import featureIm02 from "../../../assets/img/home/about/feature02.webp";
import featureIm03 from "../../../assets/img/global/record-player.webp";

import style from "./About.module.scss";
import { Feature } from "../../../components/Feature/Feature";

import { useFadeIn } from "../../../hooks/useFadeIn";

const featureData = [
  {
    img: featureIm01,
    title: "一人、静かに、\n夜を過ごす",
    text1: "お一人様でも気兼ねなく、自分のペースで過ごせる空間。 ウィスキーと、アナログレコードの温かいサウンドが、一日の終わりを穏やかに彩ります。",
    text2: "「今日は一人で静かに飲みたい」という夜こそ、ぜひお立ち寄りください。必要なときには程よい距離感で、寛ぎのひとときをサポートいたします。どなた様もどうぞ、肩の力を抜いてお越しください。",
    alt: "テスト",
  },
  {
    img: featureIm02,
    title: "あなたの「最初の一杯」を、\nここから",
    text1: "「バーは少し敷居が高い」\nBar Amber Noteは、そんな風に感じている方にこそ、訪れてほしい場所です。 60種類揃えたウィスキーの中から、あなたの好みにぴったりの一杯を一緒に見つけましょう。",
    text2: "ウィスキーの世界は広くて奥深いもの。まずは難しいことは考えず、香りや色の違いを眺めるだけでも十分です。分からないことは何でも聞いてください。琥珀色のグラスを片手に、少しずつ自分の「好き」を見つける楽しさを分かち合いましょう。",
    alt: "テスト",
  },
  {
    img: featureIm03,
    title: "あなたの気分に\n合わせた一曲を",
    text1: "棚に並ぶレコードから、その時の気分に合わせた一枚を。\nアナログ特有の温かみのある音が、ウォールナットのカウンターに柔らかく響き渡ります",
    text2: "お気に入りの名盤をリクエストするもよし、店主のセレクトに身を委ねるもよし。**琥珀色のグラスを傾けながら、あなただけの「音」と「時間」をゆっくりとお愉しみください。",
    alt: "テスト",
  },
];

export function About() {
  const ref = useFadeIn();
  return (
    <section className={style.about} ref={ref}>
      <div className={style.intro}>
        <div className={`inner-m ${style.introInner} `}>
          <div className={style.intro__text}>
            <h2 className="fade-y">Bar Amber Note</h2>
            <p className={`${style.catchCopy} fade-o`}>
              琥珀色の時間が、<br></br>音と共に溶けていく。
            </p>
            <p className="fade-o">扉を開けると、そこにあるのは針がレコードをなぞる柔らかなノイズと、芳醇なウィスキーの香り。 「Bar Amber Note」は、喧騒を離れ、ただ独り静かに夜を深めたい方のための場所です。</p>
          </div>
          <div className={style.intro__img}>
            <div className={style.intro01}>
              <img src={intro01} alt="" />
            </div>
            <div className={style.intro02}>
              <img src={intro02} alt="" />
            </div>
          </div>
        </div>
        <div className={`inner-m ${style.floatingImg}`}>
          <div className={style.floating01}>
            <img src={floating01} alt="" />
          </div>
          <div className={style.floating02}>
            <img src={floating02} alt="" />
          </div>
          <div className={style.floating03}>
            <img src={floating03} alt="" />
          </div>
        </div>
      </div>
      <ul className={style.featureList}>
        {featureData.map((item, index) => {
          return (
            <li key={index} className={style.featureItem}>
              <div className={style.featureImg}>
                <img src={item.img} alt={item.alt} />
              </div>
              <div className={style.featureText}>
                <h3>{item.title}</h3>
                <p>{item.text1}</p>
                <p>{item.text2}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
