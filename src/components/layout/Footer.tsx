import { Paragraph, Title } from "@/components/ui/typography";
import Link from "next/link";

export const Footer = () => {

  const footerLinks = [
    { label: "Tattoo removal by State", href: "/clinic-by-state" },
    { label: "Tattoo removal by city", href: "/clinic-by-city" },
    { label: "About us", href: "/about-us" },
    // { label: "Blog", href: "/blog" },
  ];

  return (
    <footer className="bg-[#275375] text-white px-4 md:px-8 py-10 md:py-20">
      <div className="max-w-[1152px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Branding */}
          <div>
          <Link href='/'><Title className="text-white">Tattooremovalvault</Title> </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex flex-col space-y-2">
            {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Paragraph className="text-white cursor-pointer">
                {link.label}
              </Paragraph>
            </Link>
          ))}
            </div>
           
            <div className="flex flex-col space-y-2">
            <Link href='/terms-and-condition'><Paragraph className="text-white cursor-pointer">Terms and Conditions</Paragraph> </Link>
            <Link href='/privacy-policy'><Paragraph className="text-white cursor-pointer">Privacy policy</Paragraph> </Link>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 border-t border-white/20 pt-4">
          <Paragraph className="text-white text-sm">
            © 2024 Tattoo removal now. All right reserved
          </Paragraph>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
