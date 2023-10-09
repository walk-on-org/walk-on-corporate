import Link from 'next/link';
import Heading from '../_components/Heading';
import { getRecuritList } from '../_libs/microcms';
import Image from 'next/image';

export const revalidate = 60;

export default async function Page() {
  const data = await getRecuritList({});

  return (
    <div>
      <section>TODO：プレゼン埋め込み</section>
      <section>
        <Heading id="jobs" title="募集職種" subTitle="job opening type" />
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
                  className="w-auto h-full bg-cover"
                  width={job.thumbnail?.width}
                  height={job.thumbnail?.height}
                />
                <div className="flex-1 p-4">
                  <h3 className="font-bold border-l-4 border-gray-800 pl-2 mb-2">{job.title}</h3>
                  <p className="text-sm line-clamp-3">{job.job_description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
