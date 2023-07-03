import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="flex flex-col gap-2">
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/about-us/team-members">Our Team</Link>
          <Link href="/cryptocurrency">Crypto Currency</Link>
          <Link href="/stock-market">Stock Market</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
