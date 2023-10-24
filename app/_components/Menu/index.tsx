import Link from 'next/link';

type Props = {
  className: string;
  toggleState: () => void;
};

export default function Menu({ className, toggleState }: Props) {
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
  const handleClick = () => {
    toggleState();
  };

  return (
    <div className={className}>
      {menus.map((menu) => (
        <Link
          key={menu.link}
          onClick={handleClick}
          href={menu.link}
          className={`flex flex-col items-center pb-2 text-white relative hover:text-primary
            after:content-[''] after:absolute after:w-full after:border-b-2 after:border-gray-900 after:hover:border-primary after:bottom-0`}
        >
          <span className="text-sm font-ubuntu font-bold">{menu.label}</span>
          <span className="text-xs font-gothic">{menu.sublabel}</span>
        </Link>
      ))}
    </div>
  );
}
