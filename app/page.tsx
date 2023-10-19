import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import ButtonLink from '@/app/_components/ButtonLink';
import TopHero from './_components/TopHero';
import Link from 'next/link';

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  const companyLinks = [
    {
      title: 'Company',
      subTitle: '会社概要',
      link: '/company',
    },
    {
      title: 'Recruit',
      subTitle: '採用情報',
      link: '/recruit',
    },
  ];
  return (
    <>
      <section>
        <Image
          className="w-full h-screen object-cover"
          src="/image/top/top-cover.jpeg"
          alt=""
          width={2560}
          height={1707}
        />
      </section>

      <TopHero
        title="ミッション"
        titleImage="/image/top/mission.png"
        titleImageWidth={816}
        titleImageHeight={98}
        isReverse={false}
      >
        <p className="text-2xl sm:text-4xl lg:text-6xl font-bold font-gothic text-center !leading-loose sm:!leading-relaxed">
          <span className="text-orange-400">美に関わる</span>
          <span className="bg-orange-400 text-white mx-2 py-4">「ヒト」</span>の幸せ
          <br />
          に貢献する。
        </p>
        <p className="text-sm">
          サロンとサロンで働く人々、美容サービスを利用する全ての方の幸せに貢献する会社を目指しております。
        </p>
        <ButtonLink href="/about">詳細を見る</ButtonLink>
      </TopHero>

      <TopHero
        title="お知らせ"
        titleImage="/image/top/news.png"
        titleImageWidth={490}
        titleImageHeight={98}
        isReverse={true}
      >
        <NewsList articles={data.contents} />
        <ButtonLink href="/news">過去のニュースを見る</ButtonLink>
      </TopHero>

      <TopHero
        title="当社の事業"
        titleImage="/image/top/service.png"
        titleImageWidth={797}
        titleImageHeight={98}
        isReverse={false}
      >
        <p className="text-sm">
          当社は、ミッション実現のため事業領域をビジョンに合わせて設定し、それぞれの領域に対してサービス展開をしています。
        </p>
        <ButtonLink href="/service">詳細を見る</ButtonLink>
      </TopHero>

      <TopHero
        title="企業情報"
        titleImage="/image/top/company.png"
        titleImageWidth={869}
        titleImageHeight={98}
        isReverse={true}
      >
        <ul className="flex flex-col sm:flex-row gap-10 w-full p-10 bg-top-cover-1">
          {companyLinks.map((row) => (
            <li
              key={row.title}
              className="rounded shadow-xl w-full sm:w-[calc(50%_-_20px)] h-48 bg-white"
            >
              <Link
                href={row.link}
                className="flex flex-col h-full justify-center gap-4 pl-4 relative hover:opacity-80
                  before:content-[''] before:absolute before:w-4 before:h-4 before:border-t before:border-gray-800 before:bottom-4 before:right-5 before:rotate-45
                  after:content-[''] after:absolute after:w-12 after:h-[1px] after:bg-gray-800 after:bottom-6 after:right-4"
              >
                <span className="font-ubuntu text-3xl">{row.title}</span>
                <span className="text-sm">{row.subTitle}</span>
              </Link>
            </li>
          ))}
        </ul>
      </TopHero>
    </>
  );
}
