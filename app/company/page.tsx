import Image from 'next/image';
import Heading from '../_components/Heading';
import Link from 'next/link';

export const revalidate = 60;

export default async function Page() {
  const overview = [
    {
      title: '会社名',
      description: '株式会社walk-on',
    },
    {
      title: '所在地',
      description: '北海道札幌市中央区大通西9丁目1-1 キタコー大通公園ビル 8階',
    },
    {
      title: '設立年',
      description: '2021年1月1日',
    },
    {
      title: '代表取締役社長',
      description: '小林理嗣',
    },
    {
      title: '従業員数',
      description: '19人 ※2025年03月01日時点（非正規含む）',
    },
    {
      title: '資本金',
      description: '650万円',
    },
    {
      title: '各種資格',
      description: '有料職業紹介 許可番号 01-ユ-300635',
    },
  ];

  return (
    <div>
      <section className="mb-12">
        <Heading id="overview" title="会社概要" />
        <ul className="text-sm">
          {overview.map((row, index) => (
            <li
              key={row.title}
              className={`flex flex-col md:flex-row border ${
                index < overview.length - 1 && 'border-b-0'
              }`}
            >
              <p className="font-bold font-gothic w-full border-b md:border-b-0 md:border-r md:w-48 bg-gray-50 p-4">
                {row.title}
              </p>
              <p className="flex-1 p-4">{row.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Heading id="greeting" title="ご挨拶" />
        <Image
          src="/logo.png"
          alt="walk-on"
          className="h-40 w-auto mx-auto"
          width={348}
          height={133}
          priority
        />
        <p className="text-sm my-4 leading-6">
          当社は「美に関わるヒトの幸せに貢献する」をミッションに創業しました。
        </p>
        <p className="text-sm my-4 leading-6">
          美に関わるサロンとサロンで働く人々、美容サービスを利用する全ての方の幸せに貢献する会社を目指しております。
        </p>
        <p className="text-sm my-4 leading-6">
          美容業界では理美容室の店舗数は約37万軒。
          <br />
          これはコンビニエンスストア（約5.5万）や歯科医院（約7万）の数よりも多いと言われています。
        </p>
        <p className="text-sm my-4 leading-6">
          業界では店舗の数に比べて働く従事者の数は増えていません。
          <br />
          昨今、人出不足は多くのサロンでの課題となっております。
        </p>
        <p className="text-sm my-4 leading-6">
          まずは採用課題を解決していくことが我々の命題だと思っております。
          <br />
          長時間労働、社会保険未加入など就労環境にはまだまだ課題がある業界と言われています。
          <br />
          その結果、美容業界から他業界への転職をする方や、最近では専門学校に入学し、
          <br />
          国家試験を取得しても美容業界に就職しない方も多いとのことです。
        </p>
        <p className="text-sm my-4 leading-6">
          まずは美容業界から他業界への離反を防ぐために、1人でも多くの方に業界での転職や就職をサポートを中心にサービス提供しています。
          <br />
          「働くを近くに」美容業界で良いサロンに就職転職することで人手不足解消することが我々の介在価値だと考えます。
        </p>
        <p className="text-sm my-4 leading-6">
          その後、集客課題や経営課題、美容サービスを利用する方々の幸せに貢献できるようにサービス展開を目指してきます。
        </p>
        <p className="text-sm my-4 leading-6">
          ミッション実現のため、我々のサービスや思想を拡げていけるように努力してまいります。
        </p>
        <div className="flex flex-col items-end">
          <p className="text-sm my-2">代表取締役　小林理嗣</p>
          <Link
            href="https://x.com/MJmallet"
            className="w-10 h-10 flex items-center justify-center group border rounded-full shadow-xl"
            target="_blank"
          >
            <Image
              src="/icon/x/logo-black.png"
              alt="x"
              width={18}
              height={18}
              className="group-hover:transform group-hover:duration-500 group-hover:scale-125"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
