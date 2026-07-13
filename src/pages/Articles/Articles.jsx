import style from "./Articles.module.scss";

import { PageFv } from "../../components/PageFv/PageFv";
import { ArticleItem } from "./ArticleItem/ArticleItem";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef } from "react";

// まとめてオブジェクトとして取得
const images = import.meta.glob("../../assets/img/thumbnail/thumbnail*.webp", {
  eager: true, // 同期的にインポート
  import: "default", // default exportを取得
});

// images の中身は { '../../assets/img/thumbnail/thumbnail01.webp': '/assets/img/thumbnail01.hash.webp', ... } となります

// 配列に変換して使いやすくする
const thumbList = Object.values(images);

// これで thumbList[0] が thumbnail01.webp のパスになります

const articleContents = [
  {
    title: "今月のおすすめウィスキー",
    dateTime: "2026-07-13",
    date: "2026.07.13",
    thumb: thumbList[0],
    alt: "ウィスキーの写真",
  },
  {
    title: "休業のお知らせ",
    dateTime: "2026-07-10",
    date: "2026.07.10",
    thumb: thumbList[1],
    alt: "玄関の写真",
  },
  {
    title: "新作オリジナルカクテルのご紹介",
    dateTime: "2026-07-05",
    date: "2026.07.05",
    thumb: thumbList[2],
    alt: "オリジナルカクテルの写真",
  },
  {
    title: "初夏のテイスティングナイト開催",
    dateTime: "2026-06-28",
    date: "2026.06.28",
    thumb: thumbList[3],
    alt: "楽しそうに乾杯する写真",
  },
  {
    title: "営業時間の変更に関するご案内",
    dateTime: "2026-06-20",
    date: "2026.06.20",
    thumb: thumbList[4],
    alt: "店内の俯瞰写真",
  },
  {
    title: "ウイスキーの奥深い世界：熟成樽の違い",
    dateTime: "2026-06-15",
    date: "2026.06.15",
    thumb: thumbList[5],
    alt: "熟成樽の写真",
  },
  {
    title: "公式オンラインショップを開設いたしました",
    dateTime: "2026-06-01",
    date: "2026.06.01",
    thumb: thumbList[6],
    alt: "並ぶウィスキーボトルの写真",
  },
  {
    title: "今週のおすすめおつまみペアリング",
    dateTime: "2026-05-24",
    date: "2026.05.24",
    thumb: thumbList[7],
    alt: "ウィスキーとおつまみの写真",
  },
  {
    title: "貸切営業に伴う通常営業時間の短縮について",
    dateTime: "2026-05-10",
    date: "2026.05.10",
    thumb: thumbList[8],
    alt: "マスターの近影写真",
  },
];

export function Articles() {
  const ref = useRef(null);
  useEffect(() => {
    const liEl = ref.current.children;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        liEl,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 60%",
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className={style.articlesPage}>
      <PageFv alt="Newsページのイメージ" title="NEWS" />
      <div className={style.aricleInner}>
        <ul className={`inner-s ${style.articleList}`} ref={ref}>
          {articleContents.map((item, index) => {
            return (
              <li key={index}>
                <ArticleItem title={item.title} dateTime={item.dateTime} date={item.date} thumb={item.thumb} alt={item.alt} />
              </li>
            );
          })}
        </ul>
        <div className={style.pageNation}>
          <button type="button" className={`${style.prevBtn} ${style.pageNationBtn} ${style.prevNextBtn}`} aria-label="前の記事"></button>
          <button type="button" className={`${style.pageNum} ${style.currentPage} ${style.pageNationBtn}`}>
            1
          </button>
          <button type="button" className={`${style.pageNum} ${style.pageNationBtn}`}>
            2
          </button>
          <button type="button" className={`${style.pageNum} ${style.pageNationBtn}`}>
            3
          </button>
          <button type="button" className={`${style.nextBtn} ${style.pageNationBtn} ${style.prevNextBtn}`} aria-label="次の記事"></button>
        </div>
      </div>
    </main>
  );
}
