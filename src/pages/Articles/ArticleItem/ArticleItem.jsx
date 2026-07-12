import style from "./ArticleItem.module.scss";

export function ArticleItem(props) {
  const { title } = props;

  return (
    <article className={style.article}>
      <a href="">
        <div className={style.thumbnail}></div>
        <div className={style.articleDesc}>
          <h3>{title}</h3>
        </div>
      </a>
    </article>
  );
}
