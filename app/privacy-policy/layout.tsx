import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '個人情報保護方針｜株式会社walk-on',
  alternates: {
    canonical: 'https://walk-on.co.jp/privacy-policy',
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Privacy Policy" sub="個人情報保護方針" />
      <Sheet>{children}</Sheet>
    </>
  );
}
