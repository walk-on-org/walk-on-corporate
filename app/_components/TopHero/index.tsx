import Image from 'next/image';

type Props = {
  title: string;
  titleImage: string;
  titleImageWidth: number;
  titleImageHeight: number;
  children: React.ReactNode;
  isReverse: Boolean;
};

export default function TopHero({
  title,
  titleImage,
  titleImageWidth,
  titleImageHeight,
  children,
  isReverse,
}: Props) {
  return (
    <section
      className="w-[calc(100%_-_32px)] sm:w-[calc(100%_-_80px)] lg:w-[840px]
        mx-auto my-24 flex flex-col gap-16 px-4 sm:px-10"
    >
      <div className={`relative border-b py-2 w-full flex ${isReverse && 'flex-row-reverse'}`}>
        <h2 className="font-bold font-gothic text-xl sm:text-2xl absolute bottom-4 text-indigo-950">
          {title}
        </h2>
        <Image
          className="w-full sm:w-[500px]"
          src={titleImage}
          alt={title}
          width={titleImageWidth}
          height={titleImageHeight}
        />
      </div>
      <div className="flex flex-col gap-4 items-center">{children}</div>
    </section>
  );
}
