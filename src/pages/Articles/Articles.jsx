import style from "./Articles.module.scss";

import { PageFv } from "../../components/PageFv/PageFv";
import { ArticleItem } from "./ArticleItem/ArticleItem";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef } from "react";

const articleContents = [
  {
    title: "今月のおすすめウィスキー",
  },
  {
    title: "休業のお知らせ",
  },
  {
    title: "お知らせお知らせ",
  },
  {
    title: "お知らせお知らせ",
  },
  {
    title: "お知らせお知らせ",
  },
  {
    title: "お知らせお知らせ",
  },
  {
    title: "お知らせお知らせ",
  },
  {
    title: "お知らせお知らせ",
  },
  {
    title: "お知らせお知らせ",
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
                <ArticleItem title={item.title} />
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
