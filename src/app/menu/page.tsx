import type { Metadata } from "next";
import { MenuIntroSection } from "@/components/sections/MenuIntroSection";
import { MenuCategoriesSection } from "@/components/sections/MenuCategoriesSection";

export const metadata: Metadata = { title: "Menu" };

export default function MenuPage() {
  return (
    <>
      <MenuIntroSection />
      <MenuCategoriesSection />
    </>
  );
}
