import { NextResponse } from "next/server";
import { TESTIMONIALS } from "@/lib/data";

export async function GET() {
  await new Promise((res) => setTimeout(res, 100));
  return NextResponse.json({ success: true, data: TESTIMONIALS });
}
