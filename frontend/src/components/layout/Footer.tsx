import Link from "next/link"
import Image from "next/image"
import { Home, Sparkles, PackageOpen, Info, Phone, BookOpen, ShieldCheck, Mail, MapPin } from "lucide-react"
import { LucideIcon } from "lucide-react"

type FooterItemType = {
  id: number;
  text: string;
  link: string;
  icon: LucideIcon;
};

type FooterBlockType = {
  id: number;
  title: string;
  items: FooterItemType[];
};

const FooterItem = ({ text, link, icon: Icon }: FooterItemType) => {
  return (
    <li>
      <Link
        href={link}
        className="flex items-center gap-2 text-stone-300 hover:text-amber-400 text-sm transition-colors duration-200"
      >
        <Icon size={15} className="text-amber-500/80" />
        <span>{text}</span>
      </Link>
    </li>
  );
};

const FooterBlockItem = ({ title, items }: FooterBlockType) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-poppins">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <FooterItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

const footerBlocks: FooterBlockType[] = [
  {
    id: 1,
    title: "Explore",
    items: [
      { id: 1, text: "Home", link: "/", icon: Home },
      { id: 2, text: "Curated Packages", link: "/packages", icon: PackageOpen },
      { id: 3, text: "Unique Experiences", link: "/experiences", icon: Sparkles },
      { id: 4, text: "About TripNova", link: "/about", icon: Info },
    ],
  },
  {
    id: 2,
    title: "Guest Services",
    items: [
      { id: 5, text: "Book a Holiday", link: "/booking", icon: BookOpen },
      { id: 6, text: "Contact Support", link: "/contact", icon: Phone },
      { id: 7, text: "Guest Dashboard", link: "/dashboard", icon: ShieldCheck },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#09090b] text-white border-t border-stone-800/80 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold font-playfair bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
                TripNova
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm font-poppins font-light">
              Your gateway to Incredible India. Handcrafted tour packages, transparent pricing, verified stays, and memorable journeys across every state.
            </p>
            <div className="pt-2 text-xs text-stone-400 space-y-1.5 font-poppins">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-amber-500" />
                Connaught Place, New Delhi, India 🇮🇳
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-amber-500" />
                aaditikkushwah12530@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-amber-500" />
                +91 9760404709 (24/7 Helpline)
              </p>
            </div>
          </div>

          {/* Nav Links Blocks */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-8">
            {footerBlocks.map((block) => (
              <FooterBlockItem key={block.id} {...block} />
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-400 gap-4 font-poppins">
          <p>© {new Date().getFullYear()} TripNova Travel Services. All rights reserved.</p>
          <p className="text-stone-400">Crafted with passion for Indian Tourism 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
