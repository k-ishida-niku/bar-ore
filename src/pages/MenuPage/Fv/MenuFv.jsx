import style from "./MenuFv.module.scss";
export function MenuFv() {
  return (
    <div className={style.fv}>
      <div className={`${style.menuFvInner} inner-m`}>
        <h1 className={style.pageTitle}>MENU</h1>
      </div>
    </div>
  );
}
