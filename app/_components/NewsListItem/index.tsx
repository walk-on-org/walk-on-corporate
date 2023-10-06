import Link from 'next/link';
import { Article } from '@/app/_libs/microcms';
import PublishedDate from '../Date';

type Props = {
  news: Article;
};

export default function NewsListItem({ news }: Props) {
  return (
    <li className="border border-black h-32 bg-white w-full md:w-[calc(50%_-_8px)]">
      <Link href={`/news/${news.id}`} className="">
        <div className="flex justify-between items-center">
          <span className="bg-black text-white text-xs px-2 py-1.5">{news.category}</span>
          <div className="text-xs mr-2">
            <PublishedDate date={news.publishedAt || news.createdAt} />
          </div>
        </div>
        <p className="px-3 py-4 text-sm underline decoration-solid text-gray-700 break-words">
          {news.title}
        </p>
      </Link>
    </li>
  );
}
