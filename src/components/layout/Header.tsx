"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { primaryNav, contactLink, reserveLink, orderLocations, siteInfo } from "@/content/nav";
import { OrderNowModal } from "@/components/layout/OrderNowModal";
import { ForkKnifeIcon, ClocheIcon, ChevronDownIcon } from "@/components/icons";

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // The menu page opens on a light beige hero, so the header needs to sit
  // transparent over it with dark text instead of the site-wide light-on-dark scheme.
  const isLightHero = pathname?.startsWith("/menu");

  useEffect(() => {
    function onScroll() {
      const currentY = window.scrollY;
      const scrolledDown = currentY > lastScrollY.current;
      setHidden(scrolledDown && currentY > 100);
      lastScrollY.current = currentY;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = isLightHero
    ? "text-dark-800 hover:text-amber-500"
    : "text-biege-100 hover:text-amber-500";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 h-20 transition-[translate,opacity] duration-700 [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] ${
        isLightHero
          ? "border-b border-dark-800/10"
          : "border-b border-white/10 backdrop-blur-md backdrop-saturate-50 backdrop-grayscale-[0.4]"
      } ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <div className="mx-auto flex h-full max-w-[1999px] items-center justify-between px-7">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label={siteInfo.name} className="shrink-0">
            <Image
              src="/images/logo.png"
              alt={siteInfo.name}
              width={160}
              height={160}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-[11px] font-medium ${textColor}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={reserveLink.href}
              className={`font-sans text-[11px] font-medium ${textColor}`}
            >
              {reserveLink.label}
            </Link>
            <Link
              href={contactLink.href}
              className={`font-sans text-[11px] font-medium ${textColor}`}
            >
              {contactLink.label}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/menu" className="flex items-center gap-2.5">
            <span className={`font-sans text-[11px] font-medium ${isLightHero ? "text-dark-800" : "text-biege-100"}`}>
              Menu
            </span>
            <span className="hidden h-10 w-10 items-center justify-center rounded-[3px] bg-amber-500 text-dark-800 sm:flex">
              <ForkKnifeIcon className="h-4 w-4" />
            </span>
          </Link>

          <div className={`hidden h-8 w-px sm:block ${isLightHero ? "bg-dark-800" : "bg-biege-100"}`} />

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setOrderOpen(true)}
              className={`flex items-center gap-1 font-sans text-[11px] font-medium ${textColor}`}
              aria-haspopup="dialog"
              aria-expanded={orderOpen}
            >
              Order Now
              <ChevronDownIcon className="h-2.5 w-2.5" />
            </button>
            <button
              type="button"
              onClick={() => setOrderOpen(true)}
              aria-label="Order now"
              className="hidden h-10 w-10 items-center justify-center rounded-[3px] bg-amber-500 text-dark-800 transition-opacity hover:opacity-85 sm:flex"
            >
              <ClocheIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <OrderNowModal open={orderOpen} onClose={() => setOrderOpen(false)} locations={orderLocations} />
    </header>
  );
}
