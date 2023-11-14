import Image from 'next/image';
import ButtonLink from '@/app/_components/ButtonLink';
import Heading from '../_components/Heading';

export const revalidate = 60;

export default async function Page() {
  const data = [
    {
      name: 'ヘアワークス／HairWorks',
      head: '美理容業界に特化した\n求人サイトヘアワークス。',
      body: '業界最大級の美容師・理容師専門の求人・転職・募集サイト。\n対応エリアは日本全国展開中、求人数11,500件以上（2023年10月時点）',
      link: 'https://hair-work.jp/',
      image: '/image/service/hairworks-300x150.png',
    },
    {
      name: 'ヘアワークスエージェント／HairWorksAgent',
      head: '美容師・理容師の転職に特化した転職支援サービス\nヘアワークスエージェント。',
      body: '美容師・理容師を希望して転職活動をしている方向けのサービス\n対応エリアは関東（1都3県）を中心に展開中（2023年10月時点）',
      link: 'https://hairworksagent.jp/',
      image: '/image/service/hair_works_AGENT_logo.png',
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
                className="w-60 h-auto rounded object-contain mx-auto"
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
    </div>
  );
}
