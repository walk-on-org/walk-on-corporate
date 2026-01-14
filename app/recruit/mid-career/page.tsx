import Link from 'next/link';
import { getRecuritList } from '@/app/_libs/microcms';
import Image from 'next/image';
import Sheet from '@/app/_components/Sheet';
import ButtonLink from '@/app/_components/ButtonLink';

export const revalidate = 60;

export const metadata = {
  title: '中途採用情報｜株式会社walk-on',
  alternates: {
    canonical: 'https://walk-on.co.jp/recruit/mid-career',
  },
};

export default async function Page() {
  const data = await getRecuritList({
    orders: '-recruiting',
    filters: 'category[contains]中途採用',
  });

  return (
    <Sheet>
      <ul className="flex flex-col gap-4">
        {data.contents.map((job) => (
          <li key={job.title} className="border rounded-md shadow-xl">
            <Link
              href={`/recruit/${job.id}`}
              className="flex flex-col gap-0 md:gap-4 md:flex-row md:h-32"
            >
              <Image
                src={job.thumbnail?.url || ''}
                alt=""
                className="w-auto h-full bg-cover md:w-48 object-cover"
                width={job.thumbnail?.width}
                height={job.thumbnail?.height}
              />
              <div className="flex-1 p-4">
                <h3 className="text-sm font-bold font-gothic border-l-4 border-blue-500 pl-2 mb-2">
                  {job.recruiting == false ? '【募集なし】' : ''}
                  {job.title}
                </h3>
                <p className="text-sm line-clamp-3">{job.job_description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-end border-t border-gray-400 mt-20 pt-10">
        <ButtonLink href="/recruit">採用TOPへ</ButtonLink>
      </div>
    </Sheet>
  );
}
