export const revalidate = 60;

export default async function Page() {
  return (
    <div className="text-sm flex flex-col gap-8">
      <section>
        <p>
          株式会社walk-on（以下「当社」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、
          個人情報の保護を推進致します。
        </p>
      </section>

      <section>
        <h2 className="font-bold text-xl font-gothic mb-2">▼個人情報の管理</h2>
        <p className="my-2">
          当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、
          セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
        </p>
        <p className="my-2">
          また、取得した個人情報は、お客様ご本人に通知するか、もしくは弊社インターネットホームページに公表した利用目的の範囲内において利用します。
        </p>
      </section>

      <section>
        <h2 className="font-bold text-xl font-gothic mb-2">▼個人情報の利用目的</h2>
        <p className="my-2">
          お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
        </p>
      </section>

      <section>
        <h2 className="font-bold text-xl font-gothic mb-2">
          ▼個人情報の第三者への開示・提供の禁止
        </h2>
        <p className="my-2">
          当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
        </p>
        <ul className="list-decimal ml-6 flex flex-col gap-1">
          <li>あらかじめ本人の同意を得た場合</li>
          <li>個人情報保護法の定める例外に当たる場合</li>
          <li>
            求人者に対する次の情報提供
            <dl className="my-2">
              <dt>①提供先</dt>
              <dd className="mb-1">弊社と契約関係にある求人者</dd>
              <dt>②提供する情報</dt>
              <dd className="mb-1">
                氏名・メールアドレス・希望転職条件・生まれ年・電話番号・住所など本サービス利用にあたり登録した情報
              </dd>
              <dt>③提供方法</dt>
              <dd className="mb-1">電子メールその他の電磁気方法</dd>
              <dt>④提供先における情報利用目的</dt>
              <dd className="mb-1">求人にかかる人材採用の検討と実施</dd>
            </dl>
          </li>
          <li>
            広告配信事業者に対する次の情報提供
            <dl className="my-2">
              <dt>①提供先</dt>
              <dd className="mb-1">広告配信事業者</dd>
              <dt>②提供する情報</dt>
              <dd className="mb-1">電子メールアドレス、およびクッキー情報</dd>
              <dt>③提供方法</dt>
              <dd className="mb-1">電子メールその他の電磁気方法</dd>
              <dt>④提供先における情報利用目的</dt>
              <dd className="mb-1">本サービスに関する広告配信</dd>
            </dl>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-bold text-xl font-gothic mb-2">▼クッキーの取扱い</h2>
        <p className="my-2">
          本ウェブサイト（弊社のウェブサイトを指します。以下同じ。）では、クッキーを利用しています。
          クッキーとは、利用者の本ウェブサイト閲覧情報・利用履歴等（本方針上「クッキー情報」といいます）を、ウェブブラウザを通じ利用者のコンピューターに送信し、保存しておく仕組みです。
        </p>
        <p className="my-2">
          クッキーの利用は、各利用者のパソコンにより拒否設定することができます。
          ただし、クッキーの利用を拒否した場合、
          本ウェブサイトの一部が適切に機能しなくなる場合がありますので、予めご了承ください。
        </p>
      </section>

      <section>
        <h2 className="font-bold text-xl font-gothic mb-2">▼お客さまの同意がある場合</h2>
        <p className="my-2">
          お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合
          <br />
          法令に基づき開示することが必要である場合
          <br />
          個人情報の安全対策
          <br />
          当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
        </p>
      </section>

      <section>
        <h2 className="font-bold text-xl font-gothic mb-2">▼ご本人の照会</h2>
        <p className="my-2">
          お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
        </p>
      </section>

      <section>
        <h2 className="font-bold text-xl font-gothic mb-2">▼法令、規範の遵守と見直し</h2>
        <p className="my-2">
          当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
        </p>
      </section>
    </div>
  );
}
