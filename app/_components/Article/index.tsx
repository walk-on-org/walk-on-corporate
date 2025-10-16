import Image from 'next/image';
import { formatRichText } from '@/app/_libs/utils';
import { type Article } from '@/app/_libs/microcms';
import PublishedDate from '../Date';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <div className="flex justify-start items-center gap-6 mb-6">
        <p className="bg-black text-white text-xs px-2 py-1.5">{data.category}</p>
        <div className="text-xs">
          <PublishedDate date={data.publishedAt || data.createdAt} />
        </div>
      </div>
      <h1 className="text-2xl mb-6 font-bold">{data.title}</h1>
      {data.thumbnail && (
        <Image
          src={data.thumbnail?.url}
          alt=""
          className="w-full h-auto mb-8"
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
        />
      )}
      {data.content && (
        <div
          className="prose break-words prose-a:text-secondary prose-th:min-w-[80px] prose-img:mx-auto"
          dangerouslySetInnerHTML={{
            __html: `${formatRichText(data.content)}`,
          }}
        />
      )}
    </main>
  );
}
