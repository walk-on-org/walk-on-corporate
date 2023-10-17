import EntryForm from '@/app/_components/EntryForm';
import { getRecruitDetail } from '@/app/_libs/microcms';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getRecruitDetail(params.slug);

  return {
    title: '応募フォーム｜' + data.title + ' - 株式会社walk-on',
    description: '応募フォーム。' + data.job_description,
    openGraph: {
      title: '応募フォーム｜' + data.title + ' - 株式会社walk-on',
      description: data.job_description,
      images: [data?.thumbnail?.url || ''],
    },
  };
}

export default async function Page({ params }: Props) {
  const data = await getRecruitDetail(params.slug);
  return (
    <>
      <div className="mb-10 sm:text-center">
        <h2 className="font-bold">{data.title}</h2>
        <p className="text-sm">株式会社walk-on</p>
      </div>
      <EntryForm job={data} />
    </>
  );
}
