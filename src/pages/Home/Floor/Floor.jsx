import style from "./Floor.module.scss";

import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import floorImg01 from "../../../assets/img/home/floor/floor01.webp";
import floorImg02 from "../../../assets/img/home/floor/floor02.webp";

import { useFadeIn } from "../../../hooks/useFadeIn";

const floorContents = [
  {
    img: floorImg01,
    title: "音楽と対話に浸る特等席",
    text1: "壁一面を埋め尽くすレコードコレクションと、厳選されたボトルを目の前にしたカウンター席。",
    text2: "ここは、店内の音楽を最も純粋に味わえる場所です。",
    text3: "お一人でゆっくりと音に没入したい夜はもちろん、バーテンダーとの会話を通じて、その日の気分に寄り添う一杯に出会いたい時にも最適。",
    text4: "琥珀色の照明に照らされたカウンターで、流れる音と心地よい距離感をお楽しみください。",
    bg: "COUNTER",
  },
  {
    img: floorImg02,
    title: "大切な誰かと過ごす、特別な時間",
    text1: "壁一面を埋め尽くすレコードコレクションと、厳選されたボトルを目の前にしたカウンター席。",
    text2: "ここは、店内の音楽を最も純粋に味わえる場所です。",
    text3: "お一人でゆっくりと音に没入したい夜はもちろん、バーテンダーとの会話を通じて、その日の気分に寄り添う一杯に出会いたい時にも最適。",
    text4: "琥珀色の照明に照らされたカウンターで、流れる音と心地よい距離感をお楽しみください。",
    bg: "TABLE",
  },
];

export function Floor() {
  const ref = useFadeIn();

  return (
    <section className={style.floor} ref={ref}>
      <div className="inner-m">
        <SectionTitle titleText="FLOOR" className="mb-40" />
      </div>
      {floorContents.map((content, index) => {
        return (
          <div key={index} className={style.floorItem} data-bg={content.bg}>
            <div className={`${style.floorImg} fade-o`}>
              <img src={content.img} alt="" />
            </div>
            <div className={style.floorText}>
              <h3 className="fade-y">{content.title}</h3>
              <div className="fade-o">
                <p>{content.text1}</p>
                <p>{content.text2}</p>
                <p>{content.text3}</p>
                <p>{content.text4}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
