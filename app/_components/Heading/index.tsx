type Props = {
  id: string;
  title: string;
  subTitle?: string;
};

export default function Heading({ id, title, subTitle }: Props) {
  return (
    <div className="text-center mb-6">
      <h2 id={id} className="text-xl font-bold inline-block border-b-2 border-orange-400 pb-2">
        {title}
      </h2>
      {subTitle && (
        <span className="text-orange-400 block text-sm font-ubuntu font-bold pt-2 pb-4">
          {subTitle}
        </span>
      )}
    </div>
  );
}
