import intro01 from "../../../../img/home/about/intro01.webp";
import intro02 from "../../../../img/home/about/intro02.webp";
import floating01 from "../../../../img/home/about/intro-img-floating01.webp";
import floating02 from "../../../../img/home/about/intro-img-floating02.webp";
import floating03 from "../../../../img/home/about/intro-img-floating03.webp";
import featureIm01 from "../../../../img/home/about/feature01.webp";
import featureIm02 from "../../../../img/home/about/feature02.webp";
import featureIm03 from "../../../../img/global/record-player.webp";

import style from "./About.module.scss";
import { Feature } from "../../../../../components/Feature/Feature";
export function About() {
  return (
    <section className={style.about}>
      <div className={style.intro}>
        <div className={`inner-m ${style.introInner} `}>
          <div className={style.intro__text}>
            <h2>Bar Amber Note</h2>
            <p className={style.catchCopy}>
              琥珀色の時間が、<br></br>音と共に溶けていく。
            </p>
            <p>扉を開けると、そこにあるのは針がレコードをなぞる柔らかなノイズと、芳醇なウィスキーの香り。 「Bar Amber Note」は、喧騒を離れ、ただ独り静かに夜を深めたい方のための場所です。</p>
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
      <ul>
        <Feature img={featureIm01} alt={"テスト"} title={["一人、静かに、", <br key="1" />, "夜を過ごす"]} text01={"お一人様でも気兼ねなく、自分のペースで過ごせる空間。 ウィスキーと、アナログレコードの温かいサウンドが、一日の終わりを穏やかに彩ります。"} text02={"「今日は一人で静かに飲みたい」という夜こそ、ぜひお立ち寄りください。必要なときには程よい距離感で、寛ぎのひとときをサポートいたします。どなた様もどうぞ、肩の力を抜いてお越しください。"} />
        <Feature
          img={featureIm02}
          alt={"テスト"}
          title={["あなたの「最初の一杯」を、", <br key="1" />, "ここから"]}
          text01={["「バーは少し敷居が高い」", <br key="1" />, " Bar Amber Noteは、そんな風に感じている方にこそ、訪れてほしい場所です。 60種類揃えたウィスキーの中から、あなたの好みにぴったりの一杯を一緒に見つけましょう。"]}
          text02={"ウィスキーの世界は広くて奥深いもの。まずは難しいことは考えず、香りや色の違いを眺めるだけでも十分です。分からないことは何でも聞いてください。琥珀色のグラスを片手に、少しずつ自分の「好き」を見つける楽しさを分かち合いましょう。"}
        />
        <Feature img={featureIm03} alt={"テスト"} title={["あなたの気分に", <br key="1" />, "合わせた一曲を"]} text01={["棚に並ぶレコードから、その時の気分に合わせた一枚を。", <br key="1" />, "アナログ特有の温かみのある音が、ウォールナットのカウンターに柔らかく響き渡ります"]} text02={"お気に入りの名盤をリクエストするもよし、店主のセレクトに身を委ねるもよし。**琥珀色のグラスを傾けながら、あなただけの「音」と「時間」をゆっくりとお愉しみください。"} />
      </ul>
    </section>
  );
}
