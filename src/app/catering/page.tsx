import type { Metadata } from "next";
import { DemoNotice } from "@/components/layout/DemoNotice";

export const metadata: Metadata = { title: "Catering" };

export default function CateringPage() {
  return <DemoNotice />;
}
