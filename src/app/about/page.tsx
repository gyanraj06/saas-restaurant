import type { Metadata } from "next";
import { DemoNotice } from "@/components/layout/DemoNotice";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <DemoNotice />;
}
