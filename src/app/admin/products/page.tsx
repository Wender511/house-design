import { Button, Divider, Fab, Menu, MenuItem } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';

import { API_URL } from '@/constants';
import { ProductProps } from '@/Types/Type';
import { formatPrice } from '@/utils/product';
import ProductMenu from '@/components/admin/Product/ProductMenu';

const getProducts = async () => {
  const products = await fetch(`${API_URL}/products`).then(res => res.json());

  return products;
};

const Page = async () => {
  const products = await getProducts();
  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='flex justify-between p-4'>
        <h2>Products</h2>
        <h2>Welcome Back, Clint</h2>
      </div>
      <div className='p-4'>
        <div className='m-auto w-full overflow-y-auto rounded-lg border bg-white p-4'>
          <div className='my-3 grid grid-cols-3 items-center justify-between p-2 sm:grid-cols-4 md:grid-cols-6'>
            <span className='col-span-2'>Name</span>
            <span className='col-span-1'>Category</span>
            <span className='col-span-1'>Price</span>
            <span className='col-span-1'>Thumbnail</span>
            <span className='col-span-1'>Remaining Item</span>
          </div>
          <ul>
            {products.map((product: ProductProps, index: number) => {
              return (
                <li
                  key={index}
                  className='relative my-3 grid grid-cols-3 items-center justify-between rounded-lg bg-gray-50 p-2 hover:bg-gray-100 sm:grid-cols-4 md:grid-cols-6'
                >
                  <div className='col-span-2 flex items-center'>
                    <p className='font-semibold text-primary'>{product.name}</p>
                  </div>
                  <Link
                    href={`/admin/categories/${product.category._id}`}
                    className='col-span-1'
                  >
                    <p className=' text-gray-600 hover:text-purple-600'>
                      {product.category.name}
                    </p>
                  </Link>
                  <p className='col-span-1 flex flex-col'>
                    <span className='text-gray-400 line-through'>
                      {formatPrice(product.price)}
                    </span>
                    <span className='text-lg font-semibold text-purple-800'>
                      {formatPrice(product.salePrice)}
                    </span>
                  </p>
                  <div className='col-span-1'>
                    <Image
                      src={product.thumbnail}
                      alt={product.name}
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className='col-span-1'>
                    <p className='text-bold text-lg'>{product.remainingItem}</p>
                  </div>
                  <ProductMenu />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Fab color='secondary' aria-label='add'>
        <IoMdAdd size={22} className='text-typo-1' />
      </Fab>
    </div>
  );
};

export default Page;
