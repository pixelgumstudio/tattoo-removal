"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Heading, Title, SmallText } from "../ui/typography";
// import { ThemeToggle } from "../shared/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Tattoo removal by State", href: "/clinic-by-state" },
    { label: "Tattoo removal by city", href: "/clinic-by-city" },
    { label: "About us", href: "/about-us" },
    { label: "Contact us", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="w-full px-4 md:px-8 py-4 border-b shadow-sm">
      <div className="flex items-center justify-between max-w-[1152px] mx-auto">
        {/* Logo */}
        <Link href="/">
          <Title as="span" className="text-xl sm:text-2xl cursor-pointer">
            Tattoo removal
          </Title>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <SmallText className="hover:text-black transition-colors">
                {link.label}
              </SmallText>
            </Link>
          ))}
          {/* <ThemeToggle /> */}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 space-y-2 px-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <SmallText className="block py-2 border-b">
                {link.label}
              </SmallText>
            </Link>
          ))}
          {/* <ThemeToggle /> */}
        </nav>
      )}
    </header>
  );
}
