"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { CloseIcon } from "@/components/icons";
import type { NavLink } from "@/content/nav";

export function OrderNowModal({
  open,
  onClose,
  locations,
}: {
  open: boolean;
  onClose: () => void;
  locations: NavLink[];
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [locationHref, setLocationHref] = useState(locations[0]?.href ?? "");
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    nameInputRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  function handleSubmit(e: FormEvent) {
    // TODO: wire up the real order submission/redirect once that flow is decided.
    e.preventDefault();
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Order now"
      onClick={onClose}
    >
      <div
        className="relative grid w-full max-w-[680px] grid-cols-1 overflow-hidden rounded-sm bg-biege-100 text-dark-800 shadow-2xl sm:grid-cols-[0.8fr_1fr]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink-950/40 text-biege-100 transition-colors hover:bg-ink-950/70"
        >
          <CloseIcon className="h-3.5 w-3.5" />
        </button>

        <div className="relative h-40 w-full sm:h-full sm:min-h-[360px]">
          <Image
            src="/images/popup.avif"
            alt="Maza Bistrot signature dish"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 640px) 272px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent sm:bg-gradient-to-r" />
        </div>

        <div className="flex flex-col p-7 sm:p-9">
          <p className="font-sans text-xs font-medium uppercase tracking-wide text-amber-500">
            Maza Bistrot
          </p>
          <h2 className="mt-1 font-display text-3xl font-light uppercase leading-none tracking-[-0.02em] text-dark-800">
            Order Now
          </h2>
          <p className="mt-3 font-sans text-sm text-dark-800/70">
            Share your details and pick a location — we&rsquo;ll take you
            straight to checkout.
          </p>

          <form className="mt-6 flex flex-col gap-3.5" onSubmit={handleSubmit}>
            <input
              ref={nameInputRef}
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="rounded-[3px] border border-dark-800/15 bg-biege-50 px-4 py-2.5 font-sans text-sm text-dark-800 outline-none placeholder:text-dark-800/40 focus:border-amber-500"
            />
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              className="rounded-[3px] border border-dark-800/15 bg-biege-50 px-4 py-2.5 font-sans text-sm text-dark-800 outline-none placeholder:text-dark-800/40 focus:border-amber-500"
            />

            <div>
              <p className="mb-2 font-sans text-xs font-medium uppercase tracking-wide text-dark-800/60">
                Choose restaurant
              </p>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc.href}
                    type="button"
                    onClick={() => setLocationHref(loc.href)}
                    aria-pressed={locationHref === loc.href}
                    className={`rounded-[3px] border px-3.5 py-2 font-sans text-xs font-medium transition-colors ${
                      locationHref === loc.href
                        ? "border-dark-800 bg-dark-800 text-biege-100"
                        : "border-dark-800/20 bg-transparent text-dark-800/70 hover:border-dark-800/50"
                    }`}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-2 w-full border-2 border-dark-800 p-1">
              <button
                type="submit"
                className="flex w-full items-center justify-center bg-dark-800 px-8 py-3.5 font-sans text-sm font-medium text-biege-100 transition-opacity hover:opacity-85"
              >
                Continue to Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body,
  );
}
