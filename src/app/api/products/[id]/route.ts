import { NextResponse } from 'next/server';

import connectDb from 'lib/config/db';
import Product from 'lib/schema/product';
import Category from 'lib/schema/category';

// get product by id
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectDb();
  const result = await Product.findById(id).populate({
    path: 'category',
    model: Category,
  });
  if (!result) {
    return NextResponse.json(
      {
        message: 'Product with the given id not found',
      },
      { status: 404 },
    );
  }
  return NextResponse.json(result);
}

// update product
export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const body = await request.json();
  await connectDb();
  const result = await Product.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    return NextResponse.json(
      {
        message: 'Product with the given id not found',
      },
      { status: 404 },
    );
  }
  return NextResponse.json(
    {
      message: 'Cập nhật sản phẩm thành công',
    },
    {
      status: 201,
    },
  );
}

// delete product
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  await connectDb();
  const result = await Product.findByIdAndDelete(id);
  if (!result) {
    return NextResponse.json(
      {
        message: 'Product with the given id not found',
      },
      { status: 404 },
    );
  }
  return NextResponse.json(
    {
      message: 'Product deleted successfully',
    },
    {
      status: 200,
    },
  );
}
