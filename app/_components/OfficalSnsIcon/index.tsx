import Image from 'next/image';
import Link from 'next/link';

export default function OfficalSnsIcon() {
  return (
    <div className="flex flex-col items-center gap-6 pt-4">
      <span className="font-ubuntu text-white">OFFICAL SNS</span>
      <div className="flex gap-6">
        <Link
          href="https://www.instagram.com/hairworks_job"
          className="bg-white rounded-full w-12 h-12 flex items-center justify-center group"
          target="_blank"
        >
          <Image
            src="/icon/instagram/Instagram_Glyph_Gradient.png"
            alt="instagram"
            width={26}
            height={26}
            className="group-hover:transform group-hover:duration-500 group-hover:scale-125"
          />
        </Link>
        <Link
          href="https://x.com/MJmallet"
          className="bg-white rounded-full w-12 h-12 flex items-center justify-center group"
          target="_blank"
        >
          <Image
            src="/icon/x/logo-black.png"
            alt="x"
            width={26}
            height={26}
            className="group-hover:transform group-hover:duration-500 group-hover:scale-125"
          />
        </Link>
        <Link
          href="https://www.wantedly.com/companies/company_3569336"
          className="bg-white rounded-full w-12 h-12 flex items-center justify-center group"
          target="_blank"
        >
          <Image
            src="/icon/wantedly/Wantedly_Mark_LightBG.png"
            alt="wantedly"
            width={44}
            height={44}
            className="group-hover:transform group-hover:duration-500 group-hover:scale-125"
          />
        </Link>
      </div>
    </div>
  );
}
