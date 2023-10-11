import Image from 'next/image';
import { getServiceList } from '@/app/_libs/microcms';
import ButtonLink from '@/app/_components/ButtonLink';
import Heading from '../_components/Heading';

type Props = {
  searchParams: {
    dk: string;
  };
};

export const revalidate = 60;

export default async function Page({ searchParams }: Props) {
  const data = await getServiceList({
    draftKey: searchParams.dk,
    orders: 'publishedAt',
  });
  return (
    <div>
      {data.contents.length === 0 ? (
        <p className="mb-8">事業内容が登録されていません。</p>
      ) : (
        <section className="mb-8">
          <Heading id="career" title="キャリア事業" subTitle="career business" />
          <ul>
            {data.contents.map((business) => (
              <li key={business.id} className="flex flex-col my-24 gap-8 md:flex-row">
                <Image
                  src={business.image?.url as string}
                  alt=""
                  width={business.image?.width}
                  height={business.image?.height}
                  className="w-60 h-auto rounded"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-bold border-b">{business.name}</p>
                  <p className="font-bold whitespace-pre-line">{business.head}</p>
                  <p className="text-sm text-gray-500 whitespace-pre-line">{business.body}</p>
                  <ButtonLink href={business.link} isExternal>
                    サービスサイトへ
                  </ButtonLink>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
      <div className="flex flex-col items-center border-t pt-10 text-center gap-6">
        <h2 className="text-2xl font-bold">We are hiring</h2>
        <p>私たちは共にチャレンジする仲間を募集しています。</p>
        <ButtonLink href="/recruit">採用情報へ</ButtonLink>
      </div>
    </div>
  );
}
