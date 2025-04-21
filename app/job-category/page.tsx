import Link from 'next/link';

export const revalidate = 60;

export default async function Page() {
  return (
    <div className="text-sm flex flex-col gap-8">
      <section>
        <p>
          職業安定法第32条の13、職業安定法施行規則第24条の5に則り、下記の項目を明示します。
          内容をご確認ください。また、事業についてご不明点がございましたら、職業紹介責任者までお問い合わせください。
        </p>
      </section>

      <section>
        <p className="text-center mt-12 mb-2">記</p>
        <h2 className="text-center font-bold underline mb-8">求職者の皆様へ</h2>
        <h3 className="font-bold mt-8">取り扱うべき職種の範囲その他業務の範囲</h3>
        <p>
          当社の全事業所で取り扱う職種の範囲：全職種（職業安定法上の規定により、港湾運送業務、建設業務を除く）
          <br />
          取扱い地域の範囲：国内
        </p>
        <h3 className="font-bold mt-8">手数料に関する事項</h3>
        <p>求職の皆さまから、手数料は一切申し受けません。</p>
        <h3 className="font-bold mt-8">求職者の情報に関する事項</h3>
        <p>
          求職者情報の取扱い者は、職業紹介責任者代表の小林理嗣です。
          <br />
          求職者の情報は、職業紹介事業に係るものに限ります。
        </p>
        <h3 className="font-bold mt-8">個人情報の取扱いに関する事項</h3>
        <p>
          個人情報の取扱者は、職業紹介責任者代表の小林理嗣です。
          <br />
          当社は、個人の情報に関して当該情報の本人から情報の開示の請求があった場合は、その
          請求に基づき本人が有する資格や職業経験等客観的事項に基づく情報の開示を遅滞なく行い
          ます。さらに、これに基づき訂正の請求があったときは、当該請求が客観的事実に合致する
          ときは、遅滞なく訂正を行います。
        </p>
        <h3 className="font-bold mt-8">苦情等お問合せ先に関して</h3>
        <p>
          苦情処理の責任者は、職業紹介責任者代表の小林理嗣です。
          苦情の申出があった場合は、誠意を持って対応いたします。
        </p>
      </section>

      <section>
        <p className="text-center mt-12 mb-2">記</p>
        <h2 className="text-center font-bold underline mb-8">求人者の皆様へ</h2>
        <h3 className="font-bold mt-8">取り扱うべき職種の範囲その他業務の範囲</h3>
        <p>
          当社の全事業所で取り扱う職種の範囲：全職種（職業安定法上の規定により、港湾運送業務、建設業務を除く）
          <br />
          取扱い地域の範囲：国内
        </p>
        <h3 className="font-bold mt-8">手数料に関する事項</h3>
        <table className="border border-gray-900 mt-2">
          <tr className="bg-gray-200">
            <th className="border border-gray-900 w-1/2 p-4">サービスの種類及び内容</th>
            <th className="border border-gray-900 w-1/2 p-4">手数料の上限額</th>
          </tr>
          <tr>
            <td className="border border-gray-900 p-4">
              特定の条件による特別の求職者の開拓やそのための調査・探索、求⼈の充⾜を容易にするための求⼈者に対する専門的な相談・助⾔、その他紹介のサービスに付随するサービス
            </td>
            <td className="border border-gray-900 p-4">
              <ul className="list-decimal ml-4">
                <li>
                  成功報酬
                  <br />
                  職業紹介が成功した場合における当該求職者の就職後1年間に支払われる賃金（内定書や労働条件通知書等に記載されている額）の35%
                </li>
              </ul>
            </td>
          </tr>
        </table>
        <h3 className="font-bold mt-8">返戻金制度に関する事項</h3>
        <p>
          採⽤決定者が内定承諾の撤回又は入社後に⾃⼰都合退職した場合、次の通りの金額を返還するものとします。
          <br />
          採⽤決定者が入社後1ヶ月以内に⾃⼰都合退職した時：紹介⼿数料の50％
        </p>
        <h3 className="font-bold mt-8">求人者の情報に関する事項</h3>
        <p>
          求人者情報の取扱い者は、職業紹介責任者代表の小林理嗣です。
          <br />
          求人者の情報は、職業紹介事業に係るものに限ります。
        </p>
        <h3 className="font-bold mt-8">個人情報の取扱いに関する事項</h3>
        <p>
          個人情報の取扱者は、職業紹介責任者代表の小林理嗣です。
          <br />
          当社は、個人の情報に関して当該情報の本人から情報の開示の請求があった場合は、その
          請求に基づき本人が有する資格や職業経験等客観的事項に基づく情報の開示を遅滞なく行い
          ます。さらに、これに基づき訂正の請求があったときは、当該請求が客観的事実に合致する
          ときは、遅滞なく訂正を行います。
        </p>
        <h3 className="font-bold mt-8">苦情等お問合せ先に関して</h3>
        <p>
          苦情処理の責任者は、職業紹介責任者代表の小林理嗣です。
          <br />
          苦情の申出があった場合は、誠意を持って対応いたします。なお、労働者の賃金については、労働基準法第
          24 条により、労働者に直接お支払いください。
        </p>
        <h3 className="font-bold mt-8">【お問い合わせ先】</h3>
        <p>
          〒060-0042
          <br />
          北海道札幌市中央区大通西9丁目1-1 キタコー大通公園ビル 8階
          <br />
          株式会社walk-on
          <br />
          <Link href={`/contact`} className="text-secondary underline">
            お問い合わせフォーム
          </Link>
          をご利用ください。
        </p>
      </section>
    </div>
  );
}
