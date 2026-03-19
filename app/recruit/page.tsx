import Link from 'next/link';
import Heading from '@/app/_components/Heading';
import Image from 'next/image';

export const revalidate = 60;

export default async function Page() {
  const jobType = [
    {
      title: '新卒採用',
      subTitle: 'Graduate Recruitment',
      href: '/recruit/new-graduate',
      image: '/image/recruit/new-graduate.jpg',
      color: 'primary',
    },
    {
      title: '中途採用',
      subTitle: 'Career Recruitment',
      href: '/recruit/mid-career',
      image: '/image/recruit/mid-career.jpg',
      color: 'secondary',
    },
  ];

  const benefit = [
    {
      title: 'リモートワーク・出社の<br/>ハイブリッド環境で働ける',
      description: `弊社は創業以来、<strong class="bg-marker-yellow">リモートワーク環境を中心</strong>に設計をしております。<br/>
一方でリモートワークだけでは、なかなか共有できないコミュニケーションなどもあるため、2025年にオフィス移転してから年4回の出社日をもうけて、<strong class="bg-marker-yellow">リモートワークと出社のハイブリッド型の組織</strong>にしております。<br/>
未経験や新卒などはまずは出社して頂いたり、出社の方が仕事能率があがる方には<strong class="bg-marker-yellow">出社頂ける環境なので安心して働ける環境</strong>です！`,
      image: '/image/recruit/benefit1.png',
    },
    {
      title: '美容業界特化型などの業界に<br/>貢献できる環境',
      description: `弊社は創業以来ずっと美容業界でのサービス提供をしております。<br/>
現在は<strong class="bg-marker-yellow">美容業界の採用課題を様々なサービスで解決に向けてサポート</strong>しております。<br/>
美容業界に興味がある方にはおすすめの環境です！<br/>
また<strong class="bg-marker-yellow">美容カット代補助など美容業界に携わる我々だからこその福利厚生</strong>も我々の会社で働く魅力の１つです！`,
      image: '/image/recruit/benefit2.png',
    },
    {
      title: 'ベンチャーで圧倒的なスピード感<br/>当事者意識で働ける',
      description: `少数精鋭企業であり、まだまだ発展途上の弊社はまだ<strong class="bg-marker-yellow">1人1人の役割が大きい</strong>です！<br/>
また毎年新規事業ができており、役割も日々変わっていくことも多く、<strong class="bg-marker-yellow">自分事として働ける環境</strong>です！`,
      image: '/image/recruit/benefit3.png',
    },
  ];

  return (
    <>
      <section className="mb-24 w-full">
        <div className="max-w-3xl mx-auto px-4">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSgFnSrkrWkc-NCY_vRqq3z7GVjSmVrCSClbzcG37oqtMgHHz7rnPpmXTtTSpHR97NDyixynh1nvaF7/embed?start=false&loop=false&delayms=3000"
            width="960"
            height="569"
            allowFullScreen={true}
            className="w-full aspect-video h-auto"
          ></iframe>
        </div>
      </section>
      <section className="mb-24 container mx-auto max-w-3xl px-4">
        <Heading id="movie" title="会社紹介動画" subTitle="movie" />
        <iframe
          src="https://www.youtube.com/embed/urBK_oWmC1U?si=J9n32Sb5JDOl9T7S"
          title="株式会社walk-on 会社紹介動画"
          allowFullScreen={true}
          className="w-full aspect-video border"
        ></iframe>
        <div className="flex flex-col items-center gap-2 mt-24">
          <span className="font-bold text-sm md:text-base">
            <span className="text-primary">社員インタビュー</span>など詳しく知りたい方はこちら！
          </span>
          <Link
            href="https://www.wantedly.com/companies/company_3569336"
            className="border rounded-md inline-block shadow-xl group px-2"
            target="_blank"
          >
            <Image
              src="/icon/wantedly/wantedlyLogoLightBG.png"
              alt="wantedly"
              width={480}
              height={100}
              className="group-hover:transform group-hover:duration-500 group-hover:scale-110"
            />
          </Link>
        </div>
      </section>
      <section className="mb-24 container mx-auto max-w-5xl px-4">
        <Heading id="benefit" title="walk-onで働くメリット" subTitle="benefit" />
        <div className="flex flex-col md:flex-row gap-4">
          <span className="marker-yellow hidden" />
          {benefit.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl shadow-xl p-4 flex-1 flex flex-col gap-2 items-center justify-start"
            >
              <Image
                src={benefit.image}
                alt={benefit.title}
                className="w-4/5 h-auto mx-auto"
                width={300}
                height={300}
                priority
              />
              <h3
                className="font-bold text-lg text-center"
                dangerouslySetInnerHTML={{ __html: benefit.title }}
              />
              <p
                className="text-sm leading-7"
                dangerouslySetInnerHTML={{ __html: benefit.description }}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="mb-24 container mx-auto max-w-5xl px-4">
        <Heading id="jobs" title="募集職種" subTitle="job opening type" />
        <Image
          src="/image/recruit/entry-celebration-banner-202512.png"
          alt="入社お祝いバナー"
          width={600}
          height={200}
          className="max-w-3xl w-full h-auto mx-auto mb-12"
        />
        <div className="flex gap-8 flex-col md:flex-row">
          {jobType.map((job) => (
            <Link
              href={job.href}
              className="w-full md:w-1/2 rounded-xl shadow-xl relative group overflow-hidden aspect-video"
              key={job.title}
            >
              <Image
                src={job.image}
                alt={job.title}
                className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-all duration-300 group-hover:filter group-hover:blur-sm"
                width={300}
                height={300}
                priority
              />
              <figcaption
                className={`absolute top-0 left-0 bg-${
                  job.color
                } text-white text-center text-sm p-4 rounded-br-xl rounded-tl-xl opacity-90 group-hover:bg-white ${
                  job.color === 'primary'
                    ? 'group-hover:text-primary'
                    : 'group-hover:text-secondary'
                }`}
              >
                {job.subTitle}
              </figcaption>
              <p
                className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-white ${
                  job.color === 'primary'
                    ? 'text-primary group-hover:bg-primary'
                    : 'text-secondary group-hover:bg-secondary'
                } font-bold w-60 text-center py-2 rounded-full shadow-xl group-hover:text-white`}
              >
                {job.title}はこちら
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
