import Image from 'next/image';
import Link from 'next/link';
import FooterMenu from '../FooterMenu';

export default function Footer() {
  return (
    <footer className="bg-black pt-8 px-6 pb-4 text-white text-center text-sm">
      <nav className="flex flex-col md:flex-row">
        <div className="w-full md:w-72">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/logo-white.png"
              alt="walk-on"
              className="h-32 w-auto md:mx-auto"
              width={348}
              height={133}
              priority
            />
          </Link>
        </div>
        <FooterMenu />
      </nav>
      <p>© walk-on. All Rights Reserved 2023</p>
    </footer>
  );
}
