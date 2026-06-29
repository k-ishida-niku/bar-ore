import style from "./MainVisual.module.scss";
import siteTitle from "../../../../img/home/mv/site-title.svg";

export function MainVisual() {
  return (
    <div className={style.Mv}>
      <h1>
        <img src={siteTitle} alt="" />
      </h1>
    </div>
  );
}
