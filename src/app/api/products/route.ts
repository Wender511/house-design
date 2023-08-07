import { NextResponse } from 'next/server';
import connectDb from 'lib/config/db';
import Category from 'lib/schema/category';
import Product from 'lib/schema/product';

// create a new product
export async function POST(request: Request) {
  const body = await request.json();
  await connectDb();
  await Product.create(body);
  return NextResponse.json(
    {
      message: 'Tạo sản phẩm thành công',
    },
    {
      status: 201,
    },
  );
}
// get all products
export async function GET() {
  await connectDb();
  const products = await Product.find({})
    .sort({ createdAt: -1 })
    .populate({ path: 'category', model: Category });

  return NextResponse.json(products);
}
