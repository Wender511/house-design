import { NextResponse } from 'next/server';

import connectDb from 'lib/config/db';
import Product from 'lib/schema/product';
import Category from 'lib/schema/category';

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
  const products = await Product.find({}).sort({ createdAt: -1 });
  const getCategoryInfo = await Promise.all(
    products.map(async product => {
      const categoryInfo = await Category.findById(product.category);
      return {
        ...product._doc,
        category: categoryInfo,
      };
    }),
  );

  return NextResponse.json(getCategoryInfo);
}
