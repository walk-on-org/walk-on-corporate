import Image from 'next/image';
import Link from 'next/link';
import { getRecuritList } from '../../_libs/microcms';
import GenderPieChart from '@/app/_components/GenderPieChart';
import AgeBarChart from '@/app/_components/AgeBarChart';
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export const revalidate = 60;

export const metadata = {
  title: '新卒採用情報｜株式会社walk-on',
  alternates: {
    canonical: 'https://walk-on.co.jp/recruit/new-graduate',
  },
};

export default async function Page() {
  const serviceList = [
    {
      title: '美理容業界に特化した求人サイト',
      image: '/image/service/hairworks.png',
      href: 'https://hair-work.jp/',
    },
    {
      title: '美容師・理容師の転職支援サービス',
      image: '/image/service/hairworksagent.png',
      href: 'https://hairworksagent.jp/',
    },
    {
      title: '採用代行',
      image: '/image/service/hairworksplus.png',
      href: 'https://walk-on.co.jp/news/8cjsasdvfuud',
    },
    {
      title: '理美容師向けの就職フェア',
      image: '/image/service/Festa_logo_2024_05_08.jpg',
      href: 'https://hair-work.jp/fair',
    },
    {
      title: '理美容学生向けの就職情報誌',
      image: '/image/service/hairworksmagazine.png',
      href: 'https://hair-work.jp/magazine',
    },
  ];

  const values = [
    {
      title: 'For the Company',
      description: '会社に向き合いともに成長する',
      image: '/image/about/value-company.png',
      shadow: 'shadow-indigo-900',
    },
    {
      title: 'Co-creation',
      description: 'クライアントと共創し価値を創造し続ける',
      image: '/image/about/value-creation.png',
      shadow: 'shadow-orange-300',
    },
    {
      title: 'Respect & Thanks',
      description: '仲間に対して利他の心で常に敬い感謝する',
      image: '/image/about/value-respect.png',
      shadow: 'shadow-indigo-900',
    },
    {
      title: 'Be professional',
      description: 'プロとしての自覚を持ち自己研鑽をし続ける',
      image: '/image/about/value-professional.png',
      shadow: 'shadow-orange-300',
    },
    {
      title: 'Sincere & Honest',
      description: '誠実で素直であれ',
      image: '/image/about/value-sincere.png',
      shadow: 'shadow-indigo-900',
    },
  ];

  const personList = [
    {
      name: '2023年入社',
      count: 6,
    },
    {
      name: '2024年入社',
      count: 5,
    },
  ];

  const interviews = [
    {
      title: '就職フェア事業部 伊藤ひな野さん',
      image: '/image/recruit/interview7.webp',
      href: 'https://www.wantedly.com/companies/company_3569336/post_articles/983092',
    },
    {
      title: '法人営業本部 執行役員 立崎真広さん',
      image: '/image/recruit/interview6.webp',
      href: 'https://www.wantedly.com/companies/company_3569336/post_articles/954421',
    },
    {
      title: '人材紹介事業部　久保田舞さん',
      image: '/image/recruit/interview5.webp',
      href: 'https://www.wantedly.com/companies/company_3569336/post_articles/951212',
    },
  ];

  const wantedlyList = [
    {
      title: 'ヘアワークスフェスタ2025年上期スタートしました！！',
      image: '/image/recruit/wantedly1.webp',
      href: 'https://www.wantedly.com/companies/company_3569336/post_articles/975429',
    },
    {
      title: '《ヘアワークスマガジン》創刊しました！',
      image: '/image/recruit/wantedly2.webp',
      href: 'https://www.wantedly.com/companies/company_3569336/post_articles/971952',
    },
    {
      title: '2024年下半期表彰者の懇親会がおこなわれました！',
      image: '/image/recruit/wantedly3.webp',
      href: 'https://www.wantedly.com/companies/company_3569336/post_articles/968776',
    },
  ];

  const recruitList = await getRecuritList({
    limit: 1,
    filters: 'category[contains]新卒採用',
  });
  const recruitData = recruitList.contents[0];

  return (
    <>
      <section className="pb-8 md:pb-16 relative">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <h2 className="font-bold font-gothic text-center text-indigo-900 text-2xl sm:text-3xl md:text-5xl my-4 sm:my-8 md:my-16 ">
            美に関わる「ヒト」の幸せに
            <br className="block sm:hidden" />
            貢献する。
          </h2>
          <p className="my-4 text-left md:text-center text-sm md:text-base">
            美容業界では長時間労働や社会保険未加入、低賃金などの問題が根強い業界です。
            <br />
            業界から離れる方も多く、折角取得した国家資格も生かしきれていない状況がございます。
          </p>
          <p className="my-4 text-left md:text-center text-sm md:text-base">
            求職者、サロンオーナー、ユーザーなど
            <span className="bg-yellow-200 font-bold">
              理美容業界に携わる方が1人でも多くの人が幸せになれるように貢献
            </span>
            していきます。
          </p>
        </div>
        <Image
          src="/image/recruit/Mission.png"
          alt=""
          width={920}
          height={100}
          className="absolute w-auto h-16 md:h-40 md:w-auto top-0 left-0 opacity-60 px-4"
        />
      </section>
      <section className="pb-8 md:pb-16 relative bg-white">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <h2 className="font-bold font-gothic text-center text-indigo-900 text-2xl sm:text-3xl md:text-5xl my-4 sm:my-8 md:my-16 ">
            ミッション実現のために
          </h2>
          <p className="text-left md:text-center text-sm md:text-base">
            美容院のオーナー、ユーザー、求職者、サロンのスタッフ、そして理美容業界に携わる方が
            <br />
            1人でも多くの人が幸せになれるように貢献するために、
            <span className="bg-yellow-200 font-bold">全5サービスを提供しています。</span>
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 my-8">
            {serviceList.map((service) => (
              <Link
                href={service.href}
                key={service.title}
                target="_blank"
                className="border border-gray-300 rounded-md shadow-md p-4"
              >
                <Image
                  src={service.image}
                  alt=""
                  width={500}
                  height={500}
                  className="w-60 min-w-60 h-auto object-contain mx-auto"
                />
                <p className="text-center text-sm font-bold -mt-4">{service.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <Image
          src="/image/recruit/Service.png"
          alt=""
          width={920}
          height={100}
          className="absolute w-auto h-16 md:h-40 md:w-auto top-0 right-0 opacity-60 px-4"
        />
      </section>
      <section className="pb-8 md:pb-16 relative">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <h2 className="font-bold font-gothic text-center text-indigo-900 text-2xl sm:text-3xl md:text-5xl my-4 sm:my-8 md:my-16 ">
            walk-onが掲げるバリュー
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className={`flex flex-col items-center justify-center w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full p-4 ${value.shadow} shadow-[12px_12px_0_0] relative`}
              >
                <Image
                  src={value.image}
                  alt=""
                  width={500}
                  height={500}
                  className="absolute bottom-0 left-0 w-full h-auto object-cover rounded-full"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white/90 rounded-full flex flex-col items-center justify-center">
                  <p className="text-sm sm:text-base md:text-xl font-bold font-gothic text-indigo-900 pb-2">
                    {value.title}
                  </p>
                  <p className="text-xs md:text-sm border-t border-indigo-900 pt-2 mx-8 text-center">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          src="/image/recruit/Value.png"
          alt=""
          width={920}
          height={100}
          className="absolute h-16 w-auto md:h-40 md:w-auto top-0 left-0 opacity-60 px-4"
        />
      </section>
      <section className="pb-8 md:pb-16 relative bg-white">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <h2 className="font-bold font-gothic text-center text-indigo-900 text-2xl sm:text-3xl md:text-5xl my-4 sm:my-8 md:my-16 ">
            社員へインタビュー
          </h2>
          <p className="text-center font-bold text-lg">
            walk-onで今活躍している社員に話を聞きました！！
          </p>
          <div className="flex gap-8 my-8 flex-col md:flex-row">
            {interviews.map((interview) => (
              <Link
                key={interview.title}
                className="w-full md:w-1/3 border border-gray-300 rounded-md group overflow-hidden flex flex-col"
                href={interview.href}
                target="_blank"
              >
                <Image
                  src={interview.image}
                  alt=""
                  width={500}
                  height={500}
                  className="w-full group-hover:scale-110 transition-all duration-300"
                />
                <div className="p-4 bg-white flex-1">
                  <p className="font-bold">{interview.title}</p>
                  <button className="bg-indigo-900 text-white mt-2 block px-3 py-1.5 rounded-full text-center ml-auto mr-0 text-xs hover:bg-white hover:text-indigo-900 border border-indigo-900 transition-all duration-300">
                    インタビューを読む
                  </button>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="https://www.wantedly.com/companies/company_3569336/stories/tags/%E7%A4%BE%E5%93%A1%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%93%E3%83%A5%E3%83%BC"
            target="_blank"
            className="bg-orange-500 text-white w-80 py-4 rounded-md font-bold text-center mx-auto block hover:bg-white hover:text-orange-500 border border-orange-500 transition-all duration-300"
          >
            インタビュー一覧はこちら
          </Link>
        </div>
        <Image
          src="/image/recruit/Interview.png"
          alt=""
          width={920}
          height={100}
          className="absolute h-16 w-auto md:h-40 md:w-auto top-0 right-0 opacity-60 px-4"
        />
      </section>
      <section className="pb-8 md:pb-16 relative">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <h2 className="font-bold font-gothic text-center text-indigo-900 text-2xl sm:text-3xl md:text-5xl my-4 sm:my-8 md:my-16 ">
            数字で見るwalk-on
          </h2>
          <div className="flex gap-8 justify-center flex-col lg:flex-row">
            <div className="w-full h-96 p-4 bg-white rounded-xl shadow">
              <h3 className="mb-2 flex flex-col items-center gap-1">
                <span className="text-lg font-semibold">従業員数</span>
                <span className="text-xs text-gray-500 inline-block">
                  ※2025年6月1日時点
                  <br />
                  &nbsp;&nbsp;非正規含む
                </span>
              </h3>
              <div className="text-center my-4">
                <span className="text-4xl font-bold">18</span>
                <span className="ml-2">名</span>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                {personList.map((person) => (
                  <div key={person.name} className="flex gap-2">
                    <p className="text-sm flex flex-col items-center">
                      {person.name}
                      <span className="text-3xl font-bold">
                        {person.count}
                        <span className="text-sm ml-1">名</span>
                      </span>
                    </p>
                    <div className="flex">
                      {Array.from({ length: person.count }).map((_, index) => (
                        <Image
                          key={`${person.name}-${index}`}
                          src="/image/recruit/person-icon.png"
                          alt=""
                          width={500}
                          height={500}
                          className="w-12 h-12 -mr-4"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <GenderPieChart />
            <AgeBarChart />
          </div>
        </div>
        <Image
          src="/image/recruit/Data.png"
          alt=""
          width={920}
          height={100}
          className="absolute h-16 w-auto md:h-40 md:w-auto top-0 left-0 opacity-60 px-4"
        />
      </section>
      <section className="pb-8 md:pb-16 relative bg-white">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <h2 className="font-bold font-gothic text-center text-indigo-900 text-2xl sm:text-3xl md:text-5xl my-4 sm:my-8 md:my-16 ">
            walk-onの働き方
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
            <div className="bg-slate-50 border-8 border-indigo-900 p-6 rounded-md row-span-1 md:row-span-2">
              <h3 className="text-lg font-bold mb-4 text-indigo-900">基本情報</h3>
              <ul className="list-disc list-inside">
                <li>年間休日125日以上</li>
                <li>完全週休2日制（土・日）</li>
                <li>祝日、GW休暇、夏季休暇（9連休）、年末年始休暇（11連休）</li>
                <li>有給指定取得日に5日の有給付与</li>
                <li>
                  ギネス更新インセンティブ制度
                  <span className="text-xs leading-snug block ml-4">
                    各部署単月で過去ギネス金額を上回った方を対象にインセンティブが翌月支給されます
                  </span>
                </li>
                <li>
                  社会保険完備
                  <span className="text-xs leading-snug block ml-4">
                    労災、雇用、健康、厚生年金保険
                  </span>
                </li>
                <li>
                  美容・理容室補助代支給
                  <span className="text-xs leading-snug block ml-4">月1回・1万円まで</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 border border-indigo-900 p-6 rounded-md">
              <h3 className="text-lg font-bold mb-4 text-indigo-900">朝会</h3>
              <p className="leading-snug">
                週3日、朝10時半より朝会を実施しています。
                <br />
                全体連絡、司会者トークを実施し、全社員が社内の日々の動きを把握・認識できるようにしています。
              </p>
            </div>
            <div className="bg-slate-50 border border-indigo-900 p-6 rounded-md">
              <h3 className="text-lg font-bold mb-4 text-indigo-900">全体会（全社総会、表彰式）</h3>
              <p className="leading-snug">
                年4回ほど総会や全社出社日を決めており、その日は札幌のオフィスへ出社していただきます。
                <br />
                総会は会社の方針や業績を発表したり、活躍された方の表彰を行います。
              </p>
            </div>
            <div className="bg-slate-50 border border-indigo-900 p-6 rounded-md">
              <h3 className="text-lg font-bold mb-4 text-indigo-900">リモートワーク</h3>
              <p className="leading-snug">
                基本的にはリモートワークを推奨しており、札幌だけではなく、全国津々浦々で活躍ししております。
              </p>
            </div>
            <div className="bg-slate-50 border border-indigo-900 p-6 rounded-md">
              <h3 className="text-lg font-bold mb-4 text-indigo-900">コミュニケーションツール</h3>
              <p className="leading-snug">
                基本的にはチャットワークを使用します。 質問などは随時チャットで確認できます。
                <br />
                その他リモートワーク環境整備でのツールは多数整備しております
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/image/recruit/Work.png"
          alt=""
          width={920}
          height={100}
          className="absolute h-16 w-auto md:h-40 md:w-auto top-0 right-0 opacity-60 px-4"
        />
      </section>
      <section className="pb-8 md:pb-16 relative">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <h2 className="font-bold font-gothic text-center text-indigo-900 text-2xl sm:text-3xl md:text-5xl my-4 sm:my-8 md:my-16 ">
            27年新卒・募集要項
          </h2>
          <div className="flex mt-16 flex-col md:flex-row">
            <div className="bg-indigo-900 w-full md:w-1/2 mx-auto">
              <Image
                src="/image/recruit/new-graduate-2.jpg"
                alt=""
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-md"
              />
              <div className="flex justify-between items-center p-4">
                <p className="text-white text-2xl font-bold font-gothic">総合職</p>
                <Link
                  href={`/recruit/${recruitData.id}`}
                  className="bg-indigo-900 text-white px-3 py-1 rounded-md font-bold text-center hover:bg-white hover:text-indigo-900 border-2 border-white transition-all duration-300 flex items-center gap-1"
                >
                  詳細を見る
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/image/recruit/Recruit.png"
          alt=""
          width={920}
          height={100}
          className="absolute h-16 w-auto md:h-40 md:w-auto top-0 left-0 opacity-60 px-4"
        />
      </section>
      <section className="pb-8 md:pb-16 relative bg-white">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <h2 className="font-bold font-gothic text-center text-indigo-900 text-2xl sm:text-3xl md:text-5xl my-4 sm:my-8 md:my-16 ">
            Wantedly 記事紹介
          </h2>
          <div className="flex gap-8 my-8 flex-col md:flex-row">
            {wantedlyList.map((wantedly) => (
              <Link
                key={wantedly.title}
                className="w-full md:w-1/3 border border-gray-300 rounded-md group overflow-hidden flex flex-col"
                href={wantedly.href}
                target="_blank"
              >
                <Image
                  src={wantedly.image}
                  alt=""
                  width={500}
                  height={500}
                  className="w-full group-hover:scale-110 transition-all duration-300"
                />
                <div className="p-4 bg-white flex-1">
                  <p className="font-bold">{wantedly.title}</p>
                  <button className="bg-indigo-900 text-white mt-2 block px-3 py-1.5 rounded-full text-center ml-auto mr-0 text-xs hover:bg-white hover:text-indigo-900 border border-indigo-900 transition-all duration-300">
                    記事を読む
                  </button>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="https://www.wantedly.com/companies/company_3569336/stories"
            target="_blank"
            className="bg-orange-500 text-white w-80 py-4 rounded-md font-bold text-center mx-auto block hover:bg-white hover:text-orange-500 border border-orange-500 transition-all duration-300"
          >
            記事一覧はこちら
          </Link>
        </div>
        <Image
          src="/image/recruit/Wantedly.png"
          alt=""
          width={920}
          height={100}
          className="absolute h-16 w-auto md:h-40 md:w-auto top-0 right-0 opacity-60 px-4"
        />
      </section>
      <div className="fixed bottom-2 left-0 right-0 sm:left-auto sm:bottom-8 sm:right-10 w-[calc(100%-8px)] sm:mx-0 sm:w-[480px] z-50 flex flex-col gap-4 border-4 bg-white border-red-500 p-2 sm:px-4 rounded-full mx-auto">
        <div className="flex items-center justify-evenly gap-3">
          <p className="font-bold text-base sm:text-lg">27年新卒</p>
          <div className="flex items-center gap-2">
            <Link
              href={`/recruit/${recruitData.id}`}
              target="_blank"
              className="text-white bg-red-500 font-bold flex items-center text-base sm:text-lg gap-1 py-2 px-3 sm:px-4 justify-center rounded-full hover:bg-white hover:text-red-500 border border-red-500 transition-all duration-300"
            >
              募集要項
              <ChevronRightIcon className="w-5 h-5 font-bold" />
            </Link>
            <Link
              href={`/recruit/${recruitData.id}/entry`}
              target="_blank"
              className="text-white bg-red-500 font-bold flex items-center text-base sm:text-lg gap-1 py-2 px-3 sm:px-4 justify-center rounded-full hover:bg-white hover:text-red-500 border border-red-500 transition-all duration-300"
            >
              エントリー
              <ChevronRightIcon className="w-5 h-5 font-bold" />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="fixed bottom-0 right-0 sm:bottom-8 sm:right-10 w-full sm:w-72 z-50">
        <div className="flex items-center justify-center">
          <Link
            href={`/recruit/${recruitData.id}`}
            target="_blank"
            className="text-white bg-red-500 font-bold flex items-center gap-2 py-4 w-full justify-center rounded-none sm:rounded-full hover:bg-white hover:text-red-500 border border-red-500 transition-all duration-300"
          >
            募集要項はこちら
            <ChevronRightIcon className="w-5 h-5 font-bold" />
          </Link>
        </div>
      </div> */}
    </>
  );
}
