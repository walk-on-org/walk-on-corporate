import Image from 'next/image';
import Heading from '../_components/Heading';

export const revalidate = 60;

export default async function Page() {
  const values = [
    {
      title: 'For the Company',
      description: '会社に向き合いともに成長する',
      image: '/image/about/value-company.png',
      isReverse: false,
    },
    {
      title: 'Co-creation',
      description: 'クライアントと共創し価値を創造し続ける',
      image: '/image/about/value-creation.png',
      isReverse: true,
    },
    {
      title: 'Respect & Thanks',
      description: '仲間に対して利他の心で常に敬い感謝する',
      image: '/image/about/value-respect.png',
      isReverse: false,
    },
    {
      title: 'Be professional',
      description: 'プロとしての自覚を持ち自己研鑽をし続ける',
      image: '/image/about/value-professional.png',
      isReverse: true,
    },
  ];

  return (
    <div>
      <section className="text-center mb-24">
        <Heading id="mission" title="私たちのミッション" subTitle="Mission" />
        <p className="text-2xl lg:text-4xl font-bold font-gothic text-center !leading-loose sm:!leading-relaxed">
          <span className="text-primary">美に関わる</span>
          <span className="bg-primary text-white mx-2 py-4">「ヒト」</span>の幸せ
          <br />
          に貢献する。
        </p>
        <div className="flex mt-4 flex-col gap-12 justify-between md:gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-bold font-gothic text-secondary">働く人</p>
            <Image
              className="w-4/5"
              src="/image/about/mission-1.png"
              alt=""
              width={531}
              height={532}
            />
            <p className="text-sm">
              サービスを提供する
              <br />
              理容師・美容師
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-bold font-gothic text-secondary">利用する人</p>
            <Image
              className="w-4/5"
              src="/image/about/mission-2.png"
              alt=""
              width={531}
              height={532}
            />
            <p className="text-sm">
              美容・理容サービスを受ける
              <br />
              エンドユーザ
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-bold font-gothic text-secondary">企業</p>
            <Image
              className="w-4/5"
              src="/image/about/mission-3.png"
              alt=""
              width={531}
              height={532}
            />
            <p className="text-sm">
              美容室・理容室などを
              <br />
              運営する事業者
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <Heading id="value" title="行動指針" subTitle="Value" />
        <p className="text-gray-500 text-sm">ミッション実現のために社員に期待する姿</p>
        <p className="my-2 text-2xl lg:text-4xl font-bold font-gothic text-center !leading-loose sm:!leading-relaxed">
          人や物事に向き合い、
          <br />
          <span className="bg-primary text-white mx-2 px-2 py-4">誠実で素直で</span>であれ！
        </p>
        {values.map((value) => (
          <div
            key={value.title}
            className={`flex flex-col items-center ${
              value.isReverse ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            <Image
              className={`${value.isReverse ? 'md:pl-12' : 'md:pr-12'}`}
              src={value.image}
              alt={value.title}
              width={300}
              height={200}
            />
            <div className="flex flex-col justify-center items-center md:items-start">
              <p className="text-xl font-ubuntu font-bold mb-2">{value.title}</p>
              <p className="pb-1 text-sm border-b border-gray-400">{value.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
