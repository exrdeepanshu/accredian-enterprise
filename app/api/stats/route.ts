import { NextResponse } from "next/server";
import { STATS } from "@/lib/data";

export async function GET() {
  // Simulate slight API delay
  await new Promise((res) => setTimeout(res, 100));
  return NextResponse.json({ success: true, data: STATS });
}
