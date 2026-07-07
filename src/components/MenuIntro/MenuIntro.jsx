import style from "./MenuIntro.module.scss";
import { useFadeIn } from "../../hooks/useFadeIn";

export function MenuIntro(props) {
  const { title01, title02, text, img } = props;
  const ref = useFadeIn();
  return (
    <div className={style.menuIntro} ref={ref}>
      <div className={`${style.menuImg} fade-o`}>
        <img src={img} alt="" />
      </div>
      <div className={style.menuText}>
        <h3 className="fade-y">
          {title01}
          <br />
          {title02}
        </h3>
        <p className="fade-y">{text}</p>
      </div>
    </div>
  );
}
