import style from "./News.module.scss";
import newsImg from "../../../assets/img/home/news/news-img.webp";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { MoreBtn } from "../../../components/MoreBtn/MoreBtn";

import { useFadeIn } from "../../../hooks/useFadeIn";

const newsContents = ["今月のおすすめウイスキー", "休業のお知らせ", "お知らせお知らせお知らせお知らせお知らせ", "お知らせお知らせお知らせお知らせお知らせ"];

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
                  <a href="">{newsContents[index]}</a>
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
