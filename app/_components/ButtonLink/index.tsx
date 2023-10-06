import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

type Props = {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
};

export default function ButtonLink({ href, children, isExternal = false }: Props) {
  if (isExternal) {
    return (
      <a
        href={href}
        className="flex px-8 py-4 w-64 rounded-lg bg-orange-400 text-white items-center hover:opacity-40"
        target="_blank"
        rel="noopener"
      >
        <ArrowLongRightIcon className="w-6 h-6 mr-4" />
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className="flex px-8 py-4 w-64 rounded-lg bg-orange-400 text-white items-center hover:opacity-80"
    >
      <ArrowLongRightIcon className="w-6 h-6 mr-4" />
      {children}
    </Link>
  );
}
