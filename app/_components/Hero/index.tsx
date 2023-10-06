type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-28">
      <div>
        <h1 className="text-5xl font-bold text-center mb-4">{title}</h1>
        <p
          className="flex items-center gap-5 mb-8 justify-center
        before:content-[''] before:block before:h-[1px] before:w-5 before:bg-gray-800
        after:content-[''] after:block after:h-[1px] after:w-5 after:bg-gray-800"
        >
          {sub}
        </p>
      </div>
    </section>
  );
}
