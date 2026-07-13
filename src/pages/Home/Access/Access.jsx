import style from "./Access.module.scss";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import infoLogo from "../../../assets/img/global/logo.svg";
import tel from "../../../assets/img/global/tel.svg";
import sns01 from "../../../assets/img/global/sns01.svg";
import sns02 from "../../../assets/img/global/sns02.svg";
import sns03 from "../../../assets/img/global/sns03.svg";

import { useFadeIn } from "../../../hooks/useFadeIn";

import { Link } from "react-router-dom";

export function Access() {
  const ref = useFadeIn();
  return (
    <section className={style.access} ref={ref} id="access">
      <div className="inner-s">
        <SectionTitle titleText="ACCESS" className="mb-40" />
      </div>
      <div className={style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.6178729124945!2d141.35311647614506!3d43.04947092113717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2987e6f692bd%3A0xb51ee6a088eeabb4!2z44CSMDY0LTA4MDkg5YyX5rW36YGT5pyt5bmM5biC5Lit5aSu5Yy65Y2X77yZ5p2h6KW_77yT5LiB55uu!5e0!3m2!1sja!2sjp!4v1782959837188!5m2!1sja!2sjp" allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
      </div>
      <div className={`${style.info} fade-y`}>
        <div className="inner-s">
          <div className={style.infoCta}>
            <div className={style.infoLogo}>
              <img src={infoLogo} alt="" />
            </div>
            <div className={style.infoCtaItems}>
              <a href="tel:0312345678" className={style.infoTel}>
                <span>
                  <img src={tel} alt="" />
                </span>
                03-1234-5678
              </a>
              <Link to="/contact" className={style.infoCtaBtn}>
                メールで予約する
              </Link>
            </div>

            <div className={style.snsContainer}>
              <a href="" className={style.snsIcon}>
                <img src={sns01} alt="" />
              </a>
              <a href="" className={style.snsIcon}>
                <img src={sns02} alt="" />
              </a>
              <a href="" className={style.snsIcon}>
                <img src={sns03} alt="" />
              </a>
            </div>
          </div>
          <div className={style.infoContents}>
            <div className={`${style.infoItem} ${style.shopImg}`}></div>
            <ul className={`${style.infoItem} ${style.infoList}`}>
              <li className={style.infoListItem}>
                <span className={style.infoKey}>店名</span>
                <span className={style.infoValue}>Bar Amber Note</span>
              </li>
              <li className={style.infoListItem}>
                <span className={style.infoKey}>住所</span>
                <span className={style.infoValue}>
                  〒160-0006
                  <br />
                  東京都新宿区舟町33-12 舟町ビル1F
                  <br />
                  東京メトロ丸ノ内線「四谷三丁目駅」4番出口より徒歩4分
                  <br />
                  都営新宿線「曙橋駅」A4出口より徒歩5分
                </span>
              </li>
              <li className={style.infoListItem}>
                <span className={style.infoKey}>店主</span>
                <span className={style.infoValue}>佐伯 悠介</span>
              </li>
              <li className={style.infoListItem}>
                <span className={style.infoKey}>営業時間</span>
                <span className={style.infoValue}>18:00 ~ 2:00</span>
              </li>
              <li className={style.infoListItem}>
                <span className={style.infoKey}>定休日</span>
                <span className={style.infoValue}>日曜日 </span>
              </li>
              <li className={style.infoListItem}>
                <span className={style.infoKey}>チャージ</span>
                <span className={style.infoValue}>500円(お通し付き)</span>
              </li>
              <li className={style.infoListItem}>
                <span className={style.infoKey}>席数</span>
                <span className={style.infoValue}>カウンター８席・テーブル２卓(4席)</span>
              </li>
              <li className={style.infoListItem}>
                <span className={style.infoKey}>支払い</span>
                <span className={style.infoValue}>現金 / クレジット / QR決済対応</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
