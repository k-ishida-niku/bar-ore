import style from "./MoreBtn.module.scss";
import { Link } from "react-router-dom";

export function MoreBtn(props) {
  const { to } = props;
  return (
    <Link to={to} className={style.moreBtn}>
      more
    </Link>
  );
}
