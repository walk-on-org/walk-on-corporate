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
        className="flex px-6 py-4 w-fit rounded text-sm bg-primary text-white items-center hover:opacity-40"
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
      className="flex px-6 py-3 w-fit rounded text-sm bg-primary text-white items-center hover:opacity-80"
    >
      <ArrowLongRightIcon className="w-6 h-6 mr-4" />
      {children}
    </Link>
  );
}
