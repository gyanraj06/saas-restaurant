"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { CloseIcon } from "@/components/icons";
import { primaryNav, contactLink } from "@/content/nav";

export function MobileNavDrawer({
  open,
  onClose,
  onOrderNow,
}: {
  open: boolean;
  onClose: () => void;
  onOrderNow: () => void;
}) {
  // `createPortal` needs `document`, which doesn't exist during SSR — render
  // nothing until mounted on the client. Kept as a separate mounted flag
  // (rather than bailing on `!open`) so the closing slide-out transition can
  // still play instead of the drawer just vanishing.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  const navLinks = [...primaryNav, contactLink];

  if (!mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-40 sm:hidden ${open ? "" : "pointer-events-none"}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
    >
      <div
        className={`flex h-full w-full flex-col bg-amber-500 px-7 pb-10 pt-8 text-dark-800 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-2 self-end font-sans text-sm font-medium"
        >
          Close
          <CloseIcon className="h-4 w-4" />
        </button>

        <div className="mt-10 flex gap-3">
          <div className="w-full border-2 border-dark-800 p-1">
            <Link
              href="/menu"
              onClick={onClose}
              className="flex w-full items-center justify-center bg-dark-800 px-6 py-3.5 font-sans text-sm font-medium text-biege-100 transition-opacity hover:opacity-85"
            >
              Menu
            </Link>
          </div>
          <div className="w-full border-2 border-dark-800 p-1">
            <button
              type="button"
              onClick={onOrderNow}
              className="flex w-full items-center justify-center bg-dark-800 px-6 py-3.5 font-sans text-sm font-medium text-biege-100 transition-opacity hover:opacity-85"
            >
              Order Now
            </button>
          </div>
        </div>

        <nav className="mt-10 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-display text-4xl font-light uppercase leading-tight tracking-[-0.02em]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>,
    document.body,
  );
}
