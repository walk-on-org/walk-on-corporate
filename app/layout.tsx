import { Metadata } from 'next';
import Script from 'next/script';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import './globals.css';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
    title: '株式会社walk-on - 美容の・・・・',
    description: 'TODO:description',
    openGraph: {
      title: '株式会社walk-on - 美容の・・・・',
      description: 'TODO:description',
      images: [''],
    },
    alternates: {
      canonical: 'https://walk-on.co.jp/',
    },
  };
}

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src={`//js.hs-scripts.com/${process.env.HUBSPOT_PORTAL_ID}.js`}
      ></Script>
      <body className="bg-slate-50">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
