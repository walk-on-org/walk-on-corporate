import Link from 'next/link';

export default function FooterMenu() {
  const menus = [
    {
      link: '/news',
      label: 'ニュース',
      sub_menus: [],
    },
    {
      link: '/about',
      label: '私たちについて',
      sub_menus: [
        {
          link: '/about#mission',
          label: 'ミッション',
        },
        {
          link: '/about#value',
          label: '行動指針',
        },
      ],
    },
    {
      link: '/service',
      label: '事業内容',
      sub_menus: [
        {
          link: '/service#career',
          label: 'キャリア事業',
        },
      ],
    },
    {
      link: '/company',
      label: '会社情報',
      sub_menus: [
        {
          link: '/company#overview',
          label: '会社概要',
        },
        {
          link: '/company#greeting',
          label: '代表からの挨拶',
        },
      ],
    },
    {
      link: '/recruit',
      label: '採用情報',
      sub_menus: [
        {
          link: '/recruit#statue',
          label: '求める人物像',
        },
        {
          link: '/recruit#jobs',
          label: '募集職種',
        },
      ],
    },
    {
      link: '/contact',
      label: 'お問い合わせ',
      sub_menus: [],
    },
  ];

  return (
    <ul className="flex flex-row flex-wrap items-start gap-y-6 mb-6 md:mb-0 md:gap-10">
      {menus.map((menu) => (
        <li key={menu.link} className="flex flex-col items-center w-1/2 md:w-auto md:items-start">
          <Link
            href={menu.link}
            className="font-bold border-b border-gray-800 hover:border-orange-300 hover:text-orange-300"
          >
            {menu.label}
          </Link>
          {menu.sub_menus.length > 0 && (
            <ul className="flex flex-col gap-2 items-center mt-2 md:items-start">
              {menu.sub_menus.map((sub_menu) => (
                <li key={sub_menu.link}>
                  <Link href={sub_menu.link} className="text-xs hover:text-orange-300">
                    {sub_menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
