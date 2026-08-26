"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { primaryNav, contactLink, reserveLink, orderLocations, siteInfo } from "@/content/nav";
import { OrderNowModal } from "@/components/layout/OrderNowModal";
import { ForkKnifeIcon, ClocheIcon, ChevronDownIcon } from "@/components/icons";

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const lastScrollY = useRef(0);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 h-20 border-b border-white/10 bg-black/20 backdrop-blur-md backdrop-saturate-50 backdrop-grayscale-[0.4] transition-transform duration-500 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1999px] items-center justify-between px-7">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label={siteInfo.name} className="shrink-0">
            <Image
              src="/images/logo.png"
              alt={siteInfo.name}
              width={518}
              height={192}
              priority
              className="h-6 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-[11px] font-medium text-biege-100 hover:text-amber-500"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={reserveLink.href}
              className="font-sans text-[11px] font-medium text-biege-100 hover:text-amber-500"
            >
              {reserveLink.label}
            </Link>
            <Link
              href={contactLink.href}
              className="font-sans text-[11px] font-medium text-biege-100 hover:text-amber-500"
            >
              {contactLink.label}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/menu" className="hidden items-center gap-2.5 sm:flex">
            <span className="font-sans text-[11px] font-medium text-biege-100">Menu</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-[3px] bg-amber-500 text-dark-800">
              <ForkKnifeIcon className="h-4 w-4" />
            </span>
          </Link>

          <div className="hidden h-8 w-px bg-biege-100 sm:block" />

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setOrderOpen(true)}
              className="flex items-center gap-1 font-sans text-[11px] font-medium text-biege-100 hover:text-amber-500"
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
              className="flex h-10 w-10 items-center justify-center rounded-[3px] bg-amber-500 text-dark-800 transition-opacity hover:opacity-85"
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
