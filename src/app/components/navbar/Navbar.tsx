import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components";

const navLinks = [
  { href: "/", name: "Home" },
  { href: "/", name: "How Hilink Works" },
  { href: "/", name: "Services" },
  { href: "/", name: "Pricing" },
  { href: "/", name: "Contact Us" },
];

export const Navbar = () => (
  <nav className="flexBetween max-container padding-container relative z-30 py-5">
    <Link href="/">
      <Image src="./hilink-logo.svg" alt="logo" width={74} height={29} />
    </Link>
    <ul className="hidden h-full gap-12 lg:flex">
      {navLinks.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className="regular-16 text-gray-50 cursor-pointer flex center pb-1.5 transition-all hover:font-bold"
        >
          {link.name}
        </Link>
      ))}
    </ul>
    <Button
      title="Login"
      type="button"
      icon="./user.svg"
      variant="btn_dark_green"
    />
    <Image
      src="menu.svg"
      alt="menu"
      width={32}
      height={32}
      className="inline-block lg:hidden cursor-pointer"
    />
  </nav>
);
