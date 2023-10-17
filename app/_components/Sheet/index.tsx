type Props = {
  children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
  return (
    <div className="w-[calc(100%_-_32px)] sm:w-[calc(100%_-_80px)] lg:w-[840px] mx-auto -mt-8 bg-white px-4 py-10 sm:px-20 sm:py-20">
      {children}
    </div>
  );
}
