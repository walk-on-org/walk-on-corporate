import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import ButtonLink from '@/app/_components/ButtonLink';
import TopHero from './_components/TopHero';

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section>
        <Image className="w-full h-screen" src="/top-cover.jpeg" alt="" width={1024} height={500} />
      </section>
      <TopHero
        title="美に関わる「ヒト」の幸せに貢献する。"
        bgImage="bg-top-cover-1"
        isReverse={false}
      >
        <p>
          サロンとサロンで働く人々、美容サービスを利用する全ての方の幸せに貢献する会社を目指しております。
        </p>
        <ButtonLink href="/about">詳細を見る</ButtonLink>
      </TopHero>

      <TopHero title="お知らせ" bgImage="bg-top-cover-2" isReverse={true}>
        <NewsList articles={data.contents} />
        <ButtonLink href="/news">過去のニュースを見る</ButtonLink>
      </TopHero>
      <TopHero title="当社の事業" bgImage="bg-top-cover-1" isReverse={false}>
        <p>
          当社は、ミッション実現のため事業領域をビジョンに合わせて設定し、それぞれの領域に対してサービス展開をしています。
        </p>
        <ButtonLink href="/service">詳細を見る</ButtonLink>
      </TopHero>

      <section className="flex flex-col-reverse bg-top-cover-2 h-64 md:flex-row-reverse">
        <div className="w-full flex flex-col items-center py-4 text-white md:flex-row md:w-1/2">
          <h2 className="horizontal-tb text-3xl mb-6 mx-12 md:vertical-rl">会社概要</h2>
          <div className="flex flex-col justify-center items-center w-64">
            <p>当社の会社情報をご紹介いたします。</p>
            <ButtonLink href="/company">詳細を見る</ButtonLink>
          </div>
        </div>
        <div className="w-full flex justify-center md:w-1/2"></div>
      </section>
    </>
  );
}
