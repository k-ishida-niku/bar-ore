import style from "./SectionTitle.module.scss";

export function SectionTitle(props) {
  const { titleText } = props;
  return <h2 className={style.sectionTitle}>{titleText}</h2>;
}
