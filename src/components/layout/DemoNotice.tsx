import Image from "next/image";

export function DemoNotice() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-7 py-32 text-center">
      <Image
        src="/images/demopage.avif"
        alt="Dining room interior at Maza Bistrot"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-biege-100/60">
          Maza Bistrot
        </p>

        <h1 className="mt-5 font-display text-[clamp(2rem,6vw,6rem)] font-light uppercase leading-[0.95] tracking-[-0.03em] text-biege-100">
          This Is A
          <br />
          Demo Website
        </h1>

        <p className="mx-auto mt-6 max-w-lg font-sans text-sm font-medium leading-relaxed text-biege-100/80 sm:text-base">
          This page is a placeholder built for demonstration purposes. For more
          details, get in touch with Mounterra Innovations.
        </p>

        <div className="mx-auto mt-8 w-fit border-2 border-biege-100 p-1">
          <a
            href="https://www.mounterra.in"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center bg-khaki-300 px-8 py-3.5 font-sans text-sm font-medium text-dark-800 transition-colors hover:bg-biege-100"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
