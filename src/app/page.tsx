import { Hero } from "@/components/sections/Hero";
import { SpiritSection } from "@/components/sections/SpiritSection";
import { SignaturePlatesSection } from "@/components/sections/SignaturePlatesSection";
import { CateringSection } from "@/components/sections/CateringSection";
import { DrinksSection } from "@/components/sections/DrinksSection";
import { GiftCardSection } from "@/components/sections/GiftCardSection";
import { RootedSection } from "@/components/sections/RootedSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SpiritSection />
      <SignaturePlatesSection />
      <CateringSection />
      <DrinksSection />
      <GiftCardSection />
      <RootedSection />
      <TestimonialsSection />
    </>
  );
}
