import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  className: string;
};

export default function Menu({ className }: Props) {
  const pathname = usePathname();
  console.log(pathname);
  const menus = [
    {
      link: '/',
      label: 'Top',
      sublabel: 'トップ',
    },
    {
      link: '/news',
      label: 'News',
      sublabel: 'ニュース',
    },
    {
      link: '/about',
      label: 'About',
      sublabel: '私たちについて',
    },
    {
      link: '/service',
      label: 'Service',
      sublabel: '事業内容',
    },
    {
      link: '/company',
      label: 'Company',
      sublabel: '会社情報',
    },
    {
      link: '/recruit',
      label: 'Recruit',
      sublabel: '採用情報',
    },
    {
      link: '/contact',
      label: 'Contact',
      sublabel: 'お問い合わせ',
    },
  ];

  return (
    <div className={className}>
      {menus.map((menu) => (
        <Link
          key={menu.link}
          href={menu.link}
          className={`flex flex-col items-center pb-2 text-white relative hover:text-orange-300
            after:content-[''] after:absolute after:w-full after:border-b-2 after:border-gray-600 after:hover:border-orange-300 after:bottom-0 ${
              pathname.startsWith(menu.link) && 'text-orange-300'
            }`}
        >
          <span className="text-sm font-bold">{menu.label}</span>
          <span className="text-xs">{menu.sublabel}</span>
        </Link>
      ))}
    </div>
  );
}
