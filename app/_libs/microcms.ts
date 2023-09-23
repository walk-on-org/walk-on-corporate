import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk';
import { notFound } from 'next/navigation';

// ニュースの型定義
export type News = {
  title: string;
  description: string;
  content: string;
  category: string;
  thumbnail?: MicroCMSImage;
};

// 事業内容の型定義
export type Service = {
  name: string;
  head: string;
  body: string;
  image?: MicroCMSImage;
  link: string;
};

// 採用情報の型定義
export type Recruite = {
  title: string;
  thumbnail?: MicroCMSImage;
  catch_copy: string;
  recommend_point: string;
  place: string;
  access: string;
  smoking: string;
  job_description: string;
  education: string;
  ideal_profile: string;
  work_time: string;
  holiday: string;
  salary: string;
  welfare: string;
  raise_payment: string;
  entry_process: string;
};

export type Article = News & MicroCMSContentId & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ニュース一覧を取得
export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<News>({
      endpoint: 'news',
      queries,
    })
    .catch(notFound);
  return listData;
};

// ニュースの詳細を取得
export const getNewsDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<News>({
      endpoint: 'news',
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};

// 事業内容一覧を取得
export const getServiceList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Service>({
      endpoint: 'services',
      queries,
    })
    .catch(notFound);
  return listData;
};

// 採用情報一覧を取得
export const getRecuriteList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Recruite>({
      endpoint: 'recruites',
      queries,
    })
    .catch(notFound);
  return listData;
};

// 採用情報の詳細を取得
export const getRecruiteDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<Recruite>({
      endpoint: 'recruites',
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};
