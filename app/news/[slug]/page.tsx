import { Metadata } from 'next';
import { getNewsDetail, getNewsList } from '@/app/_libs/microcms';
import Article from '@/app/_components/Article';
import ButtonLink from '@/app/_components/ButtonLink';

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const data = await getNewsList({});
  return data.contents.map((row) => ({
    slug: row.id,
  }));
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: `${data.title}｜株式会社walk-on`,
    description: data.description,
    openGraph: {
      title: `${data.title}｜株式会社walk-on`,
      description: data.description,
      images: [data?.thumbnail?.url || ''],
    },
    alternates: {
      canonical: `https://walk-on.co.jp/news/${data.id}`,
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  });
  return (
    <>
      <Article data={data} />
      <div className="flex justify-end border-t border-gray-400 mt-20 pt-10">
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
