import type { Metadata } from "next";
import { DemoNotice } from "@/components/layout/DemoNotice";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <DemoNotice />;
}
