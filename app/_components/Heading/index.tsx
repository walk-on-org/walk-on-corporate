type Props = {
  id: string;
  title: string;
  subTitle?: string;
};

export default function Heading({ id, title, subTitle }: Props) {
  return (
    <div className="text-center mb-6">
      <h2 id={id} className="text-xl font-bold inline-block border-b-2 border-primary pb-2">
        {title}
      </h2>
      {subTitle && (
        <span className="text-primary block text-sm font-ubuntu font-bold pt-2 pb-4">
          {subTitle}
        </span>
      )}
    </div>
  );
}
