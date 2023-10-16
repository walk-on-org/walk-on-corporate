import Image from 'next/image';
import ButtonLink from '@/app/_components/ButtonLink';
import Heading from '../_components/Heading';

export const revalidate = 60;

export default async function Page() {
  const data = [
    {
      name: 'ヘアワークス／HairWorks',
      head: '美理容業界に特化した\n求人サイトヘアワークス。',
      body: '業界最大級の美容師・理容師専門の求人・転職・募集サイト。\n総会員数5,000件以上、求人数11,500件以上（2023年10月時点）',
      link: 'https://hair-work.jp/',
      image: '/image/service/hairworks-300x150.png',
    },
    {
      name: 'ヘアワークスエージェント／HairWorksAgent',
      head: '美容師・理容師の転職に特化した転職支援サービス\nヘアワークスエージェント。',
      body: '美容師・理容師を希望して転職活動をしている方向けのサービス\n月間登録数約XXXX名、紹介求人数XXX件以上（2023年10月時点）',
      link: 'https://hairworksagent.jp/',
      image: '/image/service/hairworks-300x150.png',
    },
  ];
  return (
    <div>
      <section className="mb-8">
        <Heading id="career" title="キャリア事業" subTitle="career business" />
        <ul>
          {data.map((business) => (
            <li key={business.name} className="flex flex-col my-24 gap-8 md:flex-row">
              <Image
                src={business.image}
                alt=""
                width={300}
                height={150}
                className="w-60 h-auto rounded"
              />
              <div className="flex flex-col gap-2">
                <p className="text-sm font-bold border-b">{business.name}</p>
                <p className="font-bold whitespace-pre-line">{business.head}</p>
                <p className="text-sm text-gray-500 whitespace-pre-line">{business.body}</p>
                <ButtonLink href={business.link} isExternal>
                  サービスサイトへ
                </ButtonLink>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <div className="flex flex-col items-center border-t pt-10 text-center gap-6">
        <h2 className="text-2xl font-bold">We are hiring</h2>
        <p>私たちは共にチャレンジする仲間を募集しています。</p>
        <ButtonLink href="/recruit">採用情報へ</ButtonLink>
      </div>
    </div>
  );
}
