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
    title: '応募フォーム - ' + data.title,
    description: '応募フォーム。' + data.job_description,
    openGraph: {
      title: data.title,
      description: data.job_description,
      images: [data?.thumbnail?.url || ''],
    },
  };
}

export default async function Page({ params }: Props) {
  const data = await getRecruitDetail(params.slug);
  return (
    <>
      <p className="mb-10 text-sm sm:text-base sm:text-center">{data.title}</p>
      <EntryForm job={data} />
    </>
  );
}
