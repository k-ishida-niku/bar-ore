import style from "./Feature.module.scss";

export function Feature(props) {
  const { img, alt, title, text01, text02 } = props;
  return (
    <li className={style.featureItem}>
      <div className={style.featureImg}>
        <img src={img} alt={alt} />
      </div>
      <div className={style.featureText}>
        <h3>{title}</h3>
        <p>{text01}</p>
        <p>{text02}</p>
      </div>
    </li>
  );
}
