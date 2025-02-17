import Image from 'next/image';
import ButtonLink from '../ButtonLink';
import Link from 'next/link';
import { Recruit } from '@/app/_libs/microcms';

type Props = {
  data: Recruit;
};

export default function Recruit({ data }: Props) {
  const jobInfo = [
    {
      title: '勤務先',
      content: data.place,
    },
    {
      title: '最寄り駅',
      content: data.access,
    },
    {
      title: '受動喫煙防止措置',
      content: data.smoking,
    },
    {
      title: '仕事内容',
      content: data.job_description,
    },
    {
      title: '教育・研修',
      content: data.education,
    },
    {
      title: '求める人物像',
      content: data.ideal_profile,
    },
    {
      title: '勤務時間',
      content: data.work_time,
    },
    {
      title: '休日・休暇',
      content: data.holiday,
    },
    {
      title: '給与',
      content: data.salary,
    },
    {
      title: '福利厚生',
      content: data.welfare,
    },
    {
      title: '賞与・昇給',
      content: data.raise_payment,
    },
    {
      title: '応募方法',
      content: data.entry_process,
    },
  ];
  return (
    <main>
      <div className="flex flex-col-reverse mb-4 md:mb-0 md:flex-col">
        <div className="flex flex-col gap-y-2 md:flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="walk-on"
              className="h-16 w-auto"
              width={348}
              height={133}
              priority
            />
            <h1 className="md:text-xl font-bold font-gothic">
              {data.recruiting == false ? '【募集なし】' : ''}
              {data.title}
            </h1>
          </div>
          <div className="w-full md:w-auto">
            {data.recruiting ? (
              <Link
                href={`/recruit/${data.id}/entry`}
                className="px-8 py-4 block w-full rounded text-sm bg-secondary text-white border border-secondary text-center cursor-pointer duration-500 hover:bg-white hover:text-secondary md:w-36"
              >
                応募する
              </Link>
            ) : (
              <button className="px-8 py-4 block w-full rounded text-sm bg-gray-400 text-white border border-gray-400 text-center md:w-36">
                募集なし
              </button>
            )}
          </div>
        </div>
        {data.thumbnail && (
          <Image
            src={data.thumbnail?.url}
            alt=""
            className="w-full h-auto mb-8"
            width={data.thumbnail?.width}
            height={data.thumbnail?.height}
          />
        )}
      </div>
      <p className="font-bold font-gothic text-primary whitespace-pre-line mb-8">
        {data.catch_copy}
      </p>
      <p className="whitespace-pre-line mb-8">{data.recommend_point}</p>
      <h2 className="font-bold font-gothic border-l-4 border-gray-400 pl-2 mb-2">応募概要</h2>
      <ul className="text-sm">
        {jobInfo.map((row, index) => (
          <li
            key={row.title}
            className={`flex flex-col md:flex-row border ${
              index < jobInfo.length - 1 && 'border-b-0'
            }`}
          >
            <p className="font-bold font-gothic w-full border-b md:border-b-0 md:border-r md:w-48 bg-gray-50 p-4">
              {row.title}
            </p>
            <p className="flex-1 whitespace-pre-line p-4">{row.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
