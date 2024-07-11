import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '会社情報｜株式会社walk-on',
  alternates: {
    canonical: 'https://walk-on.co.jp/company',
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Company" sub="会社情報" />
      <Sheet>{children}</Sheet>
    </>
  );
}
