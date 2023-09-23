import Image from 'next/image';
import { getServiceList } from '@/app/_libs/microcms';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

type Props = {
  searchParams: {
    dk: string;
  };
};

export const revalidate = 60;

export default async function Page({ searchParams }: Props) {
  const data = await getServiceList({
    draftKey: searchParams.dk,
  });
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>事業内容が登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((business) => (
            <li key={business.id} className={styles.list}>
              <dl className={styles.flex}>
                <dt className={styles.name}>
                  <Image
                    src={business.image?.url as string}
                    alt=""
                    width={business.image?.width}
                    height={business.image?.height}
                    className={styles.image}
                  />
                </dt>
                <dd className={styles.description}>{business.body}</dd>
                <dd className={styles.action}>
                  <ButtonLink href={business.link} isExternal>
                    サービスサイトへ
                  </ButtonLink>
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
      <div className={styles.footer}>
        <h2 className={styles.message}>We are hiring</h2>
        <p>私たちは共にチャレンジする仲間を募集しています。</p>
        <ButtonLink href="">採用情報へ</ButtonLink>
      </div>
    </div>
  );
}
