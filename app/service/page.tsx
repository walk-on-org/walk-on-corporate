import Image from 'next/image';
import ButtonLink from '@/app/_components/ButtonLink';
import Heading from '../_components/Heading';

export const revalidate = 60;

export default async function Page() {
  const data = [
    {
      name: 'ヘアワークス／HairWorks',
      head: '美理容業界に特化した\n求人サイトヘアワークス。',
      body: '業界最大級の美容師・理容師専門の求人・転職・募集サイト。\n対応エリアは日本全国展開中、求人数18,000件以上（2025年1月時点）',
      link: 'https://hair-work.jp/',
      linktext: 'サービスサイトへ',
      image: '/image/service/hairworks-300x150.png',
    },
    {
      name: 'ヘアワークスエージェント／HairWorksAgent',
      head: '美容師・理容師の転職に特化した転職支援サービス\nヘアワークスエージェント。',
      body: '美容師・理容師を希望して転職活動をしている方向けのサービス\n対応エリアは関東（1都3県）、大阪府、愛知県を中心に展開中（2025年1月時点）',
      link: 'https://hairworksagent.jp/',
      linktext: 'サービスサイトへ',
      image: '/image/service/hair_works_AGENT_logo.png',
    },
    {
      name: 'ヘアワークスプラス／HairWorksPLUS',
      head: '「採用代行ならヘアワークスプラス」へお任せ!',
      body: '「採用に時間を避けない」「短期的に助けて欲しい」など、採用活動における課題を解消するために生まれたサービス\n理・美容師向け専門求人サイト【HAIRWORKS】を運営している弊社だからこそ出来る採用サポート',
      link: 'https://walk-on.co.jp/news/8cjsasdvfuud',
      linktext: 'プレスリリースへ',
      image: '/image/service/PLUS_logo.png',
    },
    {
      name: 'ヘアワークスフェスタ／HairWorksFesta',
      head: '理美容師向けの就職フェア',
      body: '理美容業界従事者のための合同就職説明会\n「求職者と直接話したい」「スピード感のある採用を実現したい」「採用の費用対効果を上げたい」をヘアワークスフェスタで解決',
      link: 'https://hair-work.jp/fair',
      linktext: 'サービスサイトへ',
      image: '/image/service/Festa_logo_2024_05_08.jpg',
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
                className="w-60 min-w-60 shrink-0 h-auto rounded object-contain mx-auto"
              />
              <div className="flex flex-col gap-2">
                <p className="text-sm font-bold border-b">{business.name}</p>
                <p className="font-bold whitespace-pre-line">{business.head}</p>
                <p className="text-sm text-gray-500 whitespace-pre-line">{business.body}</p>
                {business.link && (
                  <ButtonLink href={business.link} isExternal>
                    {business.linktext}
                  </ButtonLink>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
