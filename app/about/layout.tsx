import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '私たちについて｜株式会社walk-on',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="About" sub="私たちについて" />
      <Sheet>{children}</Sheet>
    </>
  );
}
