import Link from 'next/link';
import Heading from '../_components/Heading';
import { getRecuritList } from '../_libs/microcms';
import Image from 'next/image';

export const revalidate = 60;

export default async function Page() {
  const data = await getRecuritList({});

  return (
    <div>
      <section className="mb-24 relative w-full h-0 pt-[75%]">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vSgFnSrkrWkc-NCY_vRqq3z7GVjSmVrCSClbzcG37oqtMgHHz7rnPpmXTtTSpHR97NDyixynh1nvaF7/embed?start=false&loop=false&delayms=3000"
          width="960"
          height="569"
          allowFullScreen={true}
          className="w-full h-full absolute top-0 left-0"
        ></iframe>
      </section>
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
                  <h3 className="font-bold font-gothic border-l-4 border-gray-800 pl-2 mb-2">
                    {job.title}
                  </h3>
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
