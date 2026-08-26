import type { Metadata } from "next";
import { DemoNotice } from "@/components/layout/DemoNotice";

export const metadata: Metadata = { title: "Reserve a Table" };

export default function ReservePage() {
  return <DemoNotice />;
}
