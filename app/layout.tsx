import { Metadata } from 'next';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import './globals.css';
import Script from 'next/script';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
    title: '株式会社walk-on｜美に関わる「ヒト」の幸せに貢献する  ',
    description:
      '美理容に専門特化した求人サイトHAIR WORKSを運営する株式会社walk-onのコーポレートサイトです。',
    openGraph: {
      title: '株式会社walk-on｜美に関わる「ヒト」の幸せに貢献する',
      description:
        '美理容に専門特化した求人サイトHAIR WORKSを運営する株式会社walk-onのコーポレートサイトです。',
      images: ['/ogp.jpeg'],
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
      {process.env.GTM_ID && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.GTM_ID || ''}');
        `}
        </Script>
      )}

      <body className="bg-slate-50 text-gray-800 flex flex-col min-h-screen">
        {process.env.GTM_ID && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${
                process.env.GTM_ID || ''
              }" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
