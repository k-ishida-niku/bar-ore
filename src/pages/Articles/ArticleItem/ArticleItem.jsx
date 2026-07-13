import style from "./ArticleItem.module.scss";

export function ArticleItem(props) {
  const { title, dateTime, date, thumb, alt } = props;

  return (
    <article className={style.article}>
      <a href="">
        <div className={style.thumbnail}>
          <img src={thumb} alt={alt} />
        </div>
        <div className={style.articleDesc}>
          <h3>{title}</h3>
          <time datetime={dateTime}>{date}</time>
        </div>
      </a>
    </article>
  );
}
