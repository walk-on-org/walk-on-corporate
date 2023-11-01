import { getNewsList } from '@/app/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination';
import ArticleList from '@/app/_components/NewsList';

type Props = {
  params: {
    current: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  // 2ページ目以上ある場合、2ページ以降のページ数を追加する（[2, 3,・・・]）
  const data = await getNewsList({});
  const pageNum = Math.ceil(data.totalCount / NEWS_LIST_LIMIT);
  if (pageNum <= 1) {
    return [];
  }
  let pageMap = [];
  for (let i = 2; i <= pageNum; i++) {
    pageMap.push(i);
  }
  console.log(pageMap);
  return pageMap.map((page) => ({
    current: String(page),
  }));
}

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} current={current} basePath="/news" />
    </>
  );
}
