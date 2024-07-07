import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white p-6 ">
      <div className="flex justify-center space-x-6 mb-6">
        <Link href="https://facebook.com">
          <img src="/facebook.png" alt="Facebook" className="h-9 w-9" />
        </Link>
        <Link href="https://instagram.com">
          <img src="/instagram.png" alt="Instagram" className="h-9 w-9" />
        </Link>
        <Link href="https://twitter.com">
          <img src="/twitter.png" alt="Twitter" className="h-9 w-9" />
        </Link>
      </div>
      <nav className="flex justify-center space-x-4 mb-6 max-md:space-x-2">
        <Link href="/about" className="text-black hover:text-white hover:text-opacity-70 max-md:text-xs">ABOUT</Link>
        <Link href="/portfolio" className="text-black hover:text-white hover:text-opacity-70 max-md:text-xs">PORTFOLIO</Link>
        <Link href="/partners" className="text-black hover:text-white hover:text-opacity-70 max-md:text-xs">PARTNERS</Link>
        <Link href="/contact" className="text-black hover:text-white hover:text-opacity-70 max-md:text-xs">CONTACT</Link>
      </nav>
      <div className="text-center text-black     text-opacity-70 max-md:text-xs">
        Copyright ©2024. Designed by InsightInnovators
      </div>
    </footer>
  );
}
