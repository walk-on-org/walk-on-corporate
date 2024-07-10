import { Metadata } from 'next';
import ButtonLink from '@/app/_components/ButtonLink';
import Recruit from '@/app/_components/Recruit';
import { getRecruitDetail, getRecuritList } from '@/app/_libs/microcms';

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
  const data = await getRecuritList({});
  return data.contents.map((row) => ({
    slug: row.id,
  }));
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const data = await getRecruitDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: `${data.title}｜株式会社walk-on`,
    description: data.job_description,
    openGraph: {
      title: `${data.title}｜株式会社walk-on`,
      description: data.job_description,
      images: [data?.thumbnail?.url || ''],
    },
    alternates: {
      canonical: `https://walk-on.co.jp/recruit/${data.id}`,
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getRecruitDetail(params.slug, {
    draftKey: searchParams.dk,
  });
  return (
    <>
      <Recruit data={data} />
      <div className="flex justify-end border-t border-gray-400 mt-20 pt-10">
        <ButtonLink href="/recruit">募集職種一覧へ</ButtonLink>
      </div>
    </>
  );
}
