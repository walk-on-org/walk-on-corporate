import { MetadataRoute } from 'next';
import { getNewsList, getRecuritList } from './_libs/microcms';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsList = await getNewsList();
  const recruitList = await getRecuritList();

  return [
    {
      url: `${process.env.BASE_URL}/`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/news`,
      lastModified: new Date(),
    },
    ...newsList.contents.map((row) => ({
      url: `${process.env.BASE_URL}/news/${row.id}`,
      lastModified: new Date(),
    })),
    {
      url: `${process.env.BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/service`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/company`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/recruit`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/recruit/new-graduate`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/recruit/mid-career`,
      lastModified: new Date(),
    },
    ...recruitList.contents.map((row) => ({
      url: `${process.env.BASE_URL}/recruit/${row.id}`,
      lastModified: new Date(),
    })),
    {
      url: `${process.env.BASE_URL}/contact`,
      lastModified: new Date(),
    },
  ];
}
