import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://678fd35e49875e5a1a93828c.mockapi.io/Data");
    if (!response.ok) {
      throw new Error("Failed to fetch data from Fake Store API");
    }
    const products = await response.json();
    return NextResponse.json(products);
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
