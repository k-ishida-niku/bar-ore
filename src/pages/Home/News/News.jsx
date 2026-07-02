import style from "./News.module.scss";
import newsImg from "../../../assets/img/home/news/news-img.webp";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { MoreBtn } from "../../../components/MoreBtn/MoreBtn";

const newsContents = ["今月のおすすめウイスキー", "休業のお知らせ", "お知らせお知らせお知らせお知らせお知らせ", "お知らせお知らせお知らせお知らせお知らせ"];

export function News() {
  return (
    <section className={style.news}>
      <div className={`inner-s ${style.newsWrap}`}>
        <div className={style.newsContents}>
          <SectionTitle titleText="NEWS" className="mb-60" />
          <ul className={style.newsList}>
            {newsContents.map((item, index) => {
              return (
                <li key={index} className={style.newsItem}>
                  <a href="">{newsContents[index]}</a>
                </li>
              );
            })}
          </ul>
          <MoreBtn />
        </div>
        <div className={style.newsImg}>
          <img src={newsImg} alt="" />
        </div>
      </div>
    </section>
  );
}
