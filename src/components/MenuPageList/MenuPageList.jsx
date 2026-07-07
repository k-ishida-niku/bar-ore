import style from "./MenuPageList.module.scss";
import { useFadeIn } from "../../hooks/useFadeIn";

export function MenuPageList(props) {
  const { title, menuArr } = props;
  const ref = useFadeIn();
  return (
    <div className={style.menuListContainer} ref={ref}>
      <h3 className="fade-o">{title}</h3>
      <ul className={`${style.menuList} fade-y`}>
        {menuArr.map((item, index) => {
          return (
            <li className={style.menuListItem} key={index}>
              <span className={style.menuListItemKey}>{item.name}</span>
              <span className={style.menuListItemValue}>{item.price}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
