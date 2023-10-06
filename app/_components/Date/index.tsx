import { formatDate } from '@/app/_libs/utils';

type Props = {
  date: string;
};

export default function PublishedDate({ date }: Props) {
  return <span className="flex items-center gap-2 text-gray-500">{formatDate(date)}</span>;
}
