import Hero from '@/app/_components/Hero';

export default function NotFound() {
  return (
    <>
      <Hero title="404" sub="Not Found" />
      <div className="w-[calc(100%_-_32px)] sm:w-[calc(100%_-_80px)] lg:w-[840px] mx-auto -mt-8 bg-white px-4 py-10 sm:px-20 sm:py-40">
        <dl>
          <dt className="text-2xl font-bold mb-6 sm:text-center">ページが見つかりませんでした</dt>
          <dd className="sm:text-center">
            あなたがアクセスしようとしたページは存在しません。
            <br />
            URLを再度ご確認ください。
          </dd>
        </dl>
      </div>
    </>
  );
}
