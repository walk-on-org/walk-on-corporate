import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '事業内容 - 株式会社walk-on',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Service" sub="事業内容" />
      <Sheet>{children}</Sheet>
    </>
  );
}
