import Hero from '@/app/_components/Hero';

export const metadata = {
  title: '採用情報｜株式会社walk-on',
  alternates: {
    canonical: 'https://walk-on.co.jp/recruit',
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Recruit" sub="採用情報" />
      {children}
    </>
  );
}
