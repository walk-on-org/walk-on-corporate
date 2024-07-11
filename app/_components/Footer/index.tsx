import Image from 'next/image';
import Link from 'next/link';
import FooterMenu from '../FooterMenu';
import OfficalSnsIcon from '@/app/_components/OfficalSnsIcon';

export default function Footer() {
  return (
    <footer className="bg-gray-800 pt-8 px-6 pb-4 text-white text-center text-sm">
      <nav className="flex flex-col justify-center md:flex-row">
        <div className="w-full md:w-64">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/logo-white.png"
              alt="walk-on"
              className="h-32 w-auto mx-auto"
              width={348}
              height={133}
              priority
            />
          </Link>
        </div>
        <FooterMenu />
        <OfficalSnsIcon />
      </nav>
      <p className="font-ubuntu mt-8">© walk-on. All Rights Reserved</p>
    </footer>
  );
}
