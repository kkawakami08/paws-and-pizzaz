import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Product from "../../../../../models/product";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product });
}
