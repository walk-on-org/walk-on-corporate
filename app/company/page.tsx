import Image from 'next/image';
import Heading from '../_components/Heading';

export const revalidate = 60;

export default async function Page() {
  const overview = [
    {
      title: '会社名',
      description: '株式会社walk-on',
    },
    {
      title: '所在地',
      description: '北海道札幌市中央区南2条西8丁目3-1 大光ビル2階',
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
      description: '10人 ※2023年10月01日時点（非正規含む）',
    },
    {
      title: '資本金',
      description: '500万円',
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
        <ul>
          {overview.map((row) => (
            <li key={row.title} className="flex flex-col md:flex-row border-b py-4">
              <p className="font-bold w-1/3">{row.title}</p>
              <p>{row.description}</p>
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
        <p className="text-center font-bold my-4">「意思を持った人を増やしたい」</p>
        <p>
          当社は「意思を持った人を増やしたい」をミッションに掲げています。人生100年時代と呼ばれる昨今。選択肢は増え、多くの人は正解や先が見えない時代になっております。人生でのターニングポイントで就職、転職、結婚、子育て、起業など多くのターニングポイントがあります。
        </p>
        <p>
          その”選択”は誰のものではなく、自分の人生の選択で何が正解か不正解という話ではありません。自分の人生において、１つ１つの選択において“意思を持った人を増やす”ことで自身の幸せを知り、居場所をしっかり認識し、生き生きと生きていける人が1人でも多く増やしたいと思い、創業いたしました。
        </p>
        <p className="text-right my-2">代表取締役　小林理嗣</p>
      </section>
    </div>
  );
}
