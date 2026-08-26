import Image from "next/image";
import { siteInfo } from "@/content/nav";
import {
  footerLocations,
  footerHours,
  footerContacts,
  footerEmail,
  discoverLinks,
  legalLinks,
  actionLinks,
  socialLinks,
  type FooterLinkItem,
} from "@/content/footer";

function FooterLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-biege-100/60">
      {children}
    </p>
  );
}

function FooterLinkColumn({ heading, links }: { heading: string; links: FooterLinkItem[] }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="font-sans text-sm font-medium text-biege-50 sm:text-base">{heading}</p>
      <div className="flex flex-col items-center gap-3">
        {links.map((link) => (
          <p key={link.label} className="font-sans text-sm text-biege-100/70">
            {link.label}
          </p>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-dark-800">
      <div className="mx-auto max-w-[1999px] px-7 py-20 lg:py-28">
        {/* Locations / Hours — center logo — Contact / Newsletter */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-0">
          <div className="grid grid-cols-2 divide-x divide-white/10 border-y border-white/10 py-10">
            <div className="flex flex-col items-center gap-8 px-4">
              <FooterLabel>Locations</FooterLabel>
              <div className="flex flex-col items-center gap-6">
                {footerLocations.map((location) => (
                  <div key={location.city} className="text-center">
                    <p className="font-sans text-base font-medium text-biege-50">{location.city}</p>
                    <p className="font-sans text-sm leading-relaxed text-biege-100/70">{location.address}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 px-4">
              <FooterLabel>Hours</FooterLabel>
              <div className="flex flex-col items-center gap-6">
                {footerHours.map((hours) => (
                  <div key={hours.city} className="text-center">
                    <p className="font-sans text-base font-medium text-biege-50">{hours.city}</p>
                    {hours.schedule.map((line) => (
                      <p key={line} className="font-sans text-sm leading-relaxed text-biege-100/70">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-6 lg:w-24 lg:py-0">
            <Image
              src="/images/logo.png"
              alt={siteInfo.name}
              width={160}
              height={160}
              className="h-11 w-11"
            />
          </div>

          <div className="grid grid-cols-2 divide-x divide-white/10 border-y border-white/10 py-10">
            <div className="flex flex-col items-center gap-8 px-4">
              <FooterLabel>Contact</FooterLabel>
              <div className="flex flex-col items-center gap-6">
                {footerContacts.map((contact) => (
                  <div key={contact.city} className="text-center">
                    <p className="font-sans text-base font-medium text-biege-50">{contact.city}</p>
                    <p className="font-sans text-sm leading-relaxed text-biege-100/70">{contact.phone}</p>
                  </div>
                ))}
                <p className="font-sans text-sm font-medium text-biege-100/70">
                  {footerEmail}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 px-4">
              <FooterLabel>Newsletter</FooterLabel>
              <p className="text-center font-sans text-sm leading-relaxed text-biege-100/70">
                Get the latest updates.
                <br />
                Coming soon...
              </p>
            </div>
          </div>
        </div>

        {/* Discover / Legals — spacer — Actions / Socials */}
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
          <div className="grid grid-cols-2">
            <FooterLinkColumn heading="Discover" links={discoverLinks} />
            <FooterLinkColumn heading="Legals" links={legalLinks} />
          </div>

          <div className="hidden lg:block lg:w-24" />

          <div className="grid grid-cols-2">
            <FooterLinkColumn heading="Actions" links={actionLinks} />
            <FooterLinkColumn heading="Socials" links={socialLinks} />
          </div>
        </div>

        {/* Giant wordmark */}
        <p className="mt-20 text-center font-display text-[clamp(3rem,13vw,11.5rem)] uppercase leading-[0.9] tracking-[-0.02em] text-amber-500 lg:mt-32">
          {siteInfo.name}
        </p>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-6 font-sans text-xs text-biege-100/50 sm:flex-row sm:justify-between">
          <p>
            © {year} {siteInfo.name}
          </p>
          <p>All Rights Reserved</p>
          <p>Made by Mounterra Innovations</p>
        </div>
      </div>
    </footer>
  );
}
