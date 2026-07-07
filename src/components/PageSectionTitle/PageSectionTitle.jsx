import style from "./PageSectionTitle.module.scss";
import { useFadeIn } from "../../hooks/useFadeIn";

export function PageSectionTitle(props) {
  const { enTitle, jpTitle, mbClass } = props;
  const ref = useFadeIn();
  return (
    <h2 className={`${style.pageSectionTitle} ${mbClass}`} ref={ref}>
      <span className={`${style.enTitle} fade-b`}>{enTitle}</span>
      <span className={`${style.jpTitle} fade-b`}>{jpTitle}</span>
    </h2>
  );
}
