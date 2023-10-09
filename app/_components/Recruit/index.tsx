import { Recruit } from '@/app/_libs/microcms';
import Image from 'next/image';

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
      <div className="flex items-center gap-4">
        <Image
          src="/logo.png"
          alt="walk-on"
          className="h-24 w-auto"
          width={348}
          height={133}
          priority
        />
        <h1 className="text-2xl font-bold">{data.title}</h1>
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
      <p className="text-xl font-bold text-indigo-800 whitespace-pre-line mb-8">
        {data.catch_copy}
      </p>
      <p className="whitespace-pre-line mb-8">{data.recommend_point}</p>
      <ul>
        {jobInfo.map((row) => (
          <li key={row.title} className="flex flex-col md:flex-row border-b py-4">
            <p className="font-bold w-48">{row.title}</p>
            <p className="flex-1 whitespace-pre-line">{row.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
