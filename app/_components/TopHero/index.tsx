import ButtonLink from '../ButtonLink';

type Props = {
  title: string;
  children: React.ReactNode;
  bgImage: string;
  isReverse: Boolean;
};

export default function TopHero({ title, children, bgImage, isReverse }: Props) {
  return (
    <section
      className={`flex flex-col-reverse h-[480px] ${
        isReverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } ${bgImage}`}
    >
      <div
        className={`w-full flex flex-col items-center py-4 bg-black/40 text-white ${
          isReverse ? 'md:flex-row' : 'md:flex-row-reverse'
        } md:w-1/2`}
      >
        <h2 className="horizontal-tb text-3xl mb-6 mx-12 md:vertical-rl">{title}</h2>
        <div className="flex flex-col justify-center items-center w-64">{children}</div>
      </div>
      <div className="w-full flex justify-center md:w-1/2"></div>
    </section>
  );
}
