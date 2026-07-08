import intro01 from "../../../assets/img/home/about/intro01.webp";
// import intro02 from "../../../assets/img/home/about/intro02.webp";
import floating01 from "../../../assets/img/home/about/intro-img-floating01.webp";
import floating02 from "../../../assets/img/home/about/intro-img-floating02.webp";
import floating03 from "../../../assets/img/home/about/intro-img-floating03.webp";
import featureIm01 from "../../../assets/img/home/about/feature01.webp";
import featureIm02 from "../../../assets/img/home/about/feature02.webp";
import featureIm03 from "../../../assets/img/home/about/feature03.webp";
import masterImg from "../../../assets/img/home/about/master.webp";

import style from "./About.module.scss";
import { Feature } from "../../../components/Feature/Feature";

import { useFadeIn } from "../../../hooks/useFadeIn";
import { useScale } from "../../../hooks/useScale";
import { useParallax } from "../../../hooks/useParallax";
// import { useLenis } from "../../../hooks/useLenis";
// gsap

const featureData = [
  {
    img: featureIm01,
    title: "一人、静かに、\n夜を過ごす",
    text1: "お一人様でも気兼ねなく、自分のペースで過ごせる空間。\nウィスキーと、アナログレコードの温かいサウンドが、一日の終わりを穏やかに彩ります。",
    text2: "「今日は一人で静かに飲みたい」という夜こそ、ぜひお立ち寄りください。どなた様もどうぞ、肩の力を抜いてお越しください。",
    alt: "テスト",
  },
  {
    img: featureIm02,
    title: "あなたの「最初の一杯」を、\nここから",
    text1: "「バーは少し敷居が高い」\nBar Amber Noteは、そんな風に感じている方にこそ、訪れてほしい場所です。 60種類揃えたウィスキーの中から、あなたの好みにぴったりの一杯を一緒に見つけましょう。",
    text2: "まずは難しいことは考えず、香りや色の違いを眺めるだけ。琥珀色のグラスを片手に、少しずつ自分の「好き」を見つける楽しさを分かち合いましょう。",
    alt: "テスト",
  },
  {
    img: featureIm03,
    title: "あなたの気分に\n合わせた一曲を",
    text1: "棚に並ぶレコードから、その時の気分に合わせた一枚を。\nアナログ特有の温かみのある音が、ウォールナットのカウンターに柔らかく響き渡ります。",
    text2: "お気に入りの名盤をリクエストするもよし、店主のセレクトに身を委ねるもよし。琥珀色のグラスを傾けながら、あなただけの「音」と「時間」をゆっくりとお愉しみください。",
    alt: "テスト",
  },
];

export function About() {
  const ref = useFadeIn();
  const { scaleRef, textRef } = useScale();
  const paraRef = useParallax();
  // useLenis();
  return (
    <section
      className={style.about}
      ref={(el) => {
        if (ref) ref.current = el;
        if (paraRef) paraRef.current = el;
      }}
    >
      <div className={style.intro}>
        <div className={style.introInner}>
          <div className={style.intro__text}>
            <h2 className={`${style.catchCopy} fade-y`}>
              ウィスキーと音楽。
              <br />
              余韻を愉しむ小さな隠れ家
            </h2>
            <p className="fade-o">扉を開けると、そこにあるのは針がレコードをなぞる柔らかなノイズと、芳醇なウィスキーの香り。 「Bar Amber Note」は、喧騒を離れ、ただ独り静かに夜を深めたい方のための場所です。</p>
          </div>
          <div className={style.intro__img}>
            <div className={`${style.intro01} fade-b`}>
              <img src={intro01} alt="" className="para" />
            </div>
          </div>
        </div>
        <div className={`inner-m ${style.floatingImg}`}>
          <div className={`${style.floating01} fade-b`}>
            <img src={floating01} alt="" className="para" />
          </div>
          <div className={`${style.floating02} fade-b`}>
            <img src={floating02} alt="" className="para" />
          </div>
          <div className={`${style.floating03} fade-b`}>
            <img src={floating03} alt="" className="para" />
          </div>
        </div>
      </div>
      <ul className={style.featureList}>
        {featureData.map((item, index) => {
          return (
            <li key={index} className={style.featureItem}>
              <div className={`${style.featureImg} fade-o`}>
                <img src={item.img} alt={item.alt} className="para" />
              </div>
              <div className={style.featureText}>
                <h3 className="fade-y">{item.title}</h3>
                <p className="fade-y">{item.text1}</p>
                <p className="fade-y">{item.text2}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={style.message}>
        <div className={style.messageContainer} ref={scaleRef}>
          <div className={`${style.messageContent} inner-s`} ref={textRef}>
            <div className={style.messageText}>
              <h3>Message</h3>
              <p>Bar Amber Noteは、忙しい日々の中でふっと立ち止まれるような、静かな時間を提供したいと思い開いた店です。</p>
              <p>
                私自身、仕事終わりに落ち着いて飲める場所がほしかったことがきっかけでした。
                <br />
                カウンター越しに話すのも良し、一人でレコードを聴きながら過ごすのも良し。 お客様それぞれの「ちょうどいい距離感」を大切にしています。
              </p>
              <p>初めての方も、どうぞ気軽にお立ち寄りください。</p>
              <p className={style.masterName}>店主：佐伯 悠介</p>
            </div>
            <div className={style.shopMaster}>
              <img src={masterImg} alt="佐伯悠介 近影" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
