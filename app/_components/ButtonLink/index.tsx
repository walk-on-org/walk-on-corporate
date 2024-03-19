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
        className="flex px-6 py-4 w-fit font-bold rounded text-sm bg-primary text-white items-center duration-500 border border-primary hover:bg-white hover:text-primary"
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
      className="flex px-6 py-3 w-fit font-bold rounded text-sm bg-primary text-white items-center duration-500 border border-primary hover:bg-white hover:text-primary"
    >
      <ArrowLongRightIcon className="w-6 h-6 mr-4" />
      {children}
    </Link>
  );
}
