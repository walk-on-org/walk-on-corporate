import EntryForm from '@/app/_components/EntryForm';
import { getRecruitDetail, getRecuritList } from '@/app/_libs/microcms';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const data = await getRecuritList({});
  return data.contents
    .filter((row) => {
      return row.recruiting;
    })
    .map((row) => ({
      slug: row.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getRecruitDetail(params.slug);

  return {
    title: `応募フォーム - ${data.title}｜株式会社walk-on`,
    description: '応募フォーム。' + data.job_description,
    openGraph: {
      title: `応募フォーム - ${data.title}｜株式会社walk-on`,
      description: data.job_description,
      images: [data?.thumbnail?.url || ''],
    },
    alternates: {
      canonical: `https://walk-on.co.jp/recruit/${data.id}/entry`,
    },
  };
}

export default async function Page({ params }: Props) {
  const data = await getRecruitDetail(params.slug);
  if (data.recruiting == false) {
    redirect(`/recruit/${data.id}`);
  }
  return (
    <>
      <div className="mb-10 sm:text-center">
        <h2 className="font-bold font-gothic">{data.title}</h2>
        <p className="text-sm">株式会社walk-on</p>
      </div>
      <EntryForm job={data} />
    </>
  );
}
