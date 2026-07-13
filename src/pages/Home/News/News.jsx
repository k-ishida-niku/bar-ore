import style from "./News.module.scss";
import newsImg from "../../../assets/img/home/news/news-img.webp";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { MoreBtn } from "../../../components/MoreBtn/MoreBtn";

import { useFadeIn } from "../../../hooks/useFadeIn";

const newsContents = [
  {
    title: "今月のおすすめウィスキー",
    dateTime: "2026-07-13",
    date: "2026.07.13",
  },
  {
    title: "休業のお知らせ",
    dateTime: "2026-07-10",
    date: "2026.07.10",
  },
  {
    title: "新作オリジナルカクテルのご紹介",
    dateTime: "2026-07-05",
    date: "2026.07.05",
  },
  {
    title: "初夏のテイスティングナイト開催",
    dateTime: "2026-06-28",
    date: "2026.06.28",
  },
];

export function News() {
  const ref = useFadeIn();
  return (
    <section className={style.news} ref={ref}>
      <div className={`inner-s ${style.newsWrap}`}>
        <div className={style.newsContents}>
          <SectionTitle titleText="NEWS" className="mb-60" />
          <ul className={style.newsList}>
            {newsContents.map((item, index) => {
              return (
                <li key={index} className={`${style.newsItem} fade-y`}>
                  <a href="">
                    <span>
                      <time dateTime={item.dateTime}>{item.date}</time>
                      {item.title}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <MoreBtn to="/news" />
        </div>
        <div className={`${style.newsImg} fade-b`}>
          <img src={newsImg} alt="" />
        </div>
      </div>
    </section>
  );
}
