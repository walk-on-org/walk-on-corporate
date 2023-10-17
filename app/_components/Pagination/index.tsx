import Link from 'next/link';
import styles from './index.module.css';
import { NEWS_LIST_LIMIT } from '@/app/_constants';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

export default function Pagination({ totalCount, current = 1, basePath = '', q }: Props) {
  const pages = Array.from({ length: Math.ceil(totalCount / NEWS_LIST_LIMIT) }).map(
    (_, i) => i + 1,
  );
  return (
    <ul className="flex justify-center items-center p-6 mt-6">
      {pages.map((p) => (
        <li className="mx-1" key={p}>
          {current !== p ? (
            <Link
              href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')}
              className="flex justify-center items-center w-9 h-9 rounded"
            >
              {p}
            </Link>
          ) : (
            <span className="flex justify-center items-center w-9 h-9 rounded text-white bg-gray-800">
              {p}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
