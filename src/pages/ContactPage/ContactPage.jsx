import style from "./ContactPage.module.scss";

import { PageFv } from "../../components/PageFv/PageFv";

export function ContactPage() {
  return (
    <main className={style.contactPage}>
      <PageFv title="CONTACT" />
      <div className={style.contactInner}>
        <form action="" method="post">
          <dl>
            <dt>お名前</dt>
            <dd>
              <input type="text" required name="your-name" placeholder="氏名" />
            </dd>
            <dt>お電話番号</dt>
            <dd>
              <input type="tel" required name="tel" placeholder="お電話番号" />
            </dd>
            <dt>メールアドレス</dt>
            <dd>
              <input type="email" required name="email" placeholder="メールアドレス" />
            </dd>
            <dt>ご来店日時</dt>
            <dd>
              <input type="date" required name="date" placeholder="氏名" />
              <div className={style.timeContainer}>
                <div>
                  <select name="time-o">
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                  </select>
                  <span>時</span>
                </div>
                <div>
                  <select name="time-m">
                    <option value="00">00</option>
                    <option value="30">30</option>
                  </select>
                  <span>分頃</span>
                </div>
              </div>
            </dd>
            <dt>ご来店人数</dt>
            <dd>
              <label>
                <input type="text" required name="how-many" placeholder="ご利用人数" />名
              </label>
            </dd>
          </dl>
          <button type="submit" className={style.submitBtn}>
            ご予約内容確認
          </button>
        </form>
      </div>
    </main>
  );
}
