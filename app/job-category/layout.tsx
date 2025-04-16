import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '取扱職種の範囲等の明示｜株式会社walk-on',
  alternates: {
    canonical: 'https://walk-on.co.jp/job-category',
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <section className="relative flex items-center justify-center overflow-hidden pt-28 pb-12">
        <div>
          <h1 className="text-3xl font-bold text-center mb-4">取扱職種の範囲等の明示</h1>
        </div>
      </section>
      <Sheet>{children}</Sheet>
    </>
  );
}
