import style from "./PageFv.module.scss";

export function PageFv(props) {
  const { fvImg, alt, title } = props;
  return (
    <div className={style.fv}>
      <div className={`${style.menuFvInner} inner-m`}>
        <h1 className={style.pageTitle}>{title}</h1>
      </div>
      <div className={style.fvImg}>
        <img src={fvImg} alt={alt} />
      </div>
    </div>
  );
}
