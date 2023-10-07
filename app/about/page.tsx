import Image from 'next/image';

export const revalidate = 60;

export default async function Page() {
  const values = [
    {
      title: 'For the Company',
      description: '会社に向き合いともに成長する',
      image: '/value-for-the-company.png',
      isReverse: false,
    },
    {
      title: 'Co-creation',
      description: 'クライアントと共創し価値を創造し続ける',
      image: '/value-for-the-company.png',
      isReverse: true,
    },
    {
      title: 'Respect & Thanks',
      description: '仲間に対して利他の心で常に敬い感謝する',
      image: '/value-for-the-company.png',
      isReverse: false,
    },
    {
      title: 'Be professional',
      description: 'プロとしての自覚を持ち自己研鑽をし続ける',
      image: '/value-for-the-company.png',
      isReverse: true,
    },
  ];

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold inline-block border-b-2 border-orange-400 pb-2">
          私たちのミッション
        </h2>
        <span className="text-orange-400 block text-sm font-bold pt-2 pb-4">Mission</span>
      </div>
      <section className="text-center mb-12">
        <p className="text-2xl font-bold text-indigo-800">美に関わる「ヒト」の幸せに貢献する</p>
        <div className="flex mt-4 flex-col gap-4 justify-between md:flex-row">
          <div>
            <p className="text-lg font-bold">働く人</p>
            <p>
              サービスを提供する
              <br />
              理容師・美容師
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">利用する人</p>
            <p>
              美容・理容サービスを受ける
              <br />
              エンドユーザ
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">企業</p>
            <p>
              美容室・理容室などを
              <br />
              運営する事業者
            </p>
          </div>
        </div>
      </section>

      <div className="text-center mb-6">
        <h2 className="text-xl font-bold inline-block border-b-2 border-orange-400 pb-2">
          行動指針
        </h2>
        <span className="text-orange-400 block text-sm font-bold pt-2 pb-4">Value</span>
      </div>
      <section className="text-center">
        <p className="text-gray-500">ミッション実現のために社員に期待する姿</p>
        <p className="text-2xl font-bold text-indigo-800">人や物事に向き合い、誠実で素直であれ！</p>
        {values.map((value) => (
          <div
            key={value.title}
            className={`flex flex-col items-center my-4 ${
              value.isReverse ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            <Image
              className={`${value.isReverse ? 'md:pl-12' : 'md:pr-12'}`}
              src={value.image}
              alt="For the Company"
              width={300}
              height={200}
            />
            <div className="flex flex-col justify-center items-center md:items-start">
              <p className="text-xl font-bold mb-2">{value.title}</p>
              <p className="pb-1 text-sm border-b border-gray-400">{value.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
