'use client';
import { useSession } from 'next-auth/react';
import { enqueueSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { BsCartX } from 'react-icons/bs';
import Link from 'next/link';

import Button from '@/components/common/Button/Button';
import { useCartContext } from '@/contexts/Cart/CartContextProvider';
import { formatPrice } from '@/utils/product';
import { OrderInputProps } from '@/Types/Type';
import { createOrder } from '@/services/orderServices';

function CheckOut() {
  const { cartState, resetCart } = useCartContext();
  const router = useRouter();
  const session = useSession();
  const noteRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const handleCheckout = async () => {
    // check login
    if (!session.data?.user) {
      enqueueSnackbar('Bạn cần đăng nhập để thanh toán', { variant: 'error' });
      router.push('/login');
      return;
    }
    const userId = (session.data.user as { id: string }).id;
    try {
      const data: OrderInputProps = {
        user: userId,
        note: noteRef.current?.value || '',
        customerName: nameRef.current?.value || '',
        email: emailRef.current?.value || '',
        address: addressRef.current?.value || '',
        phoneNumber: phoneNumberRef.current?.value || '',
        products: cartState.items.map(item => {
          return {
            product: item._id,
            quantity: item.quantity,
            price: item.price,
          };
        }),
        totalPay: cartState.totalPay,
        totalQuantity: cartState.totalQuantity,
      };
      const result = await createOrder(data);
      if (result.status === 201) {
        enqueueSnackbar('Đặt hàng thành công', { variant: 'success' });
        resetCart();
        router.push('/products');
      } else {
        enqueueSnackbar('Đặt hàng thất bại', { variant: 'error' });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {cartState.items.length > 0 ? (
        <div className='section-Y mx-auto mt-8 xld:max-w-large'>
          <div className='grid grid-cols-12 gap-x-10'>
            <form action='' className='col-span-8 flex flex-col gap-y-5 p-5'>
              <h2 className='text-lg uppercase'>Thông tin thanh toán</h2>
              <label htmlFor='name' className='text-base font-semibold'>
                Họ và tên*
              </label>
              <input
                ref={nameRef}
                type='text'
                name='name'
                id='name'
                className='h-10 rounded-sm border border-black text-lg outline-none'
              />
              <label htmlFor='phoneNumber' className='text-base font-semibold'>
                Số điện thoại*
              </label>
              <input
                ref={phoneNumberRef}
                type='text'
                name='phoneNumber'
                id='phoneNumber'
                className='h-10 rounded-sm border border-black text-lg outline-none'
              />
              <label htmlFor='email' className='text-base font-semibold'>
                Địa chỉ email*
              </label>
              <input
                ref={emailRef}
                type='email'
                name='email'
                id='email'
                className='h-10 rounded-sm border border-black text-lg outline-none'
              />
              <label htmlFor='address' className='text-base font-semibold'>
                Địa chỉ giao hàng*
              </label>
              <input
                ref={addressRef}
                type='text'
                name='address'
                id='address'
                className='h-10 rounded-sm border border-black text-lg outline-none'
              />
              <h3 className='text-xl'>Thông tin bổ sung</h3>
              <label htmlFor='note' className='text-base font-semibold'>
                Ghi chú cho đơn hàng
              </label>
              <textarea
                ref={noteRef}
                name='note'
                id='note'
                className='text-md h-24 rounded-sm border border-black outline-none'
              ></textarea>
            </form>
            <div className='col-span-4 flex h-fit flex-col  gap-y-4 border border-black p-5'>
              <h3>Đơn hàng của bạn</h3>
              <div className='flex items-center justify-between'>
                <h4>Sản phẩm</h4>
                <h4>Tạm tính</h4>
              </div>
              {cartState.items.length > 0 &&
                cartState.items.map(item => {
                  return (
                    <div
                      className='flex items-center justify-between'
                      key={item._id}
                    >
                      <h5>
                        {item.name} <span>x{item.quantity}</span>
                      </h5>
                      <h5>{formatPrice(item.price)}</h5>
                    </div>
                  );
                })}

              <div className='flex items-center justify-between'>
                <h5>Tạm tính</h5>
                <h5>{formatPrice(cartState.totalPay)}</h5>
              </div>
              <div className='flex items-center justify-between'>
                <h5>Tổng</h5>
                <h5>{formatPrice(cartState.totalPay)}</h5>
              </div>
              <p>
                Hóa đơn chưa kèm phí ship. Quý khách thanh toán bằng tiền mặt
                hoặc chuyển khoản theo yêu cầu với đơn hàng của shop.
              </p>
              <Button
                type='button'
                text='Đặt hàng'
                className='cursor-pointer bg-[#D26E4B] py-4 text-lg text-white'
                onClick={handleCheckout}
              ></Button>
            </div>
          </div>
        </div>
      ) : (
        <div className='section-y mt-8 flex flex-col items-center justify-center gap-y-10'>
          <h3 className='text-xl font-medium uppercase'>
            Giỏ hãng của bạn trống
          </h3>
          <BsCartX className='text-9xl'></BsCartX>
          <Link
            className='font-semibold tracking-widest text-black'
            href={'/products'}
          >
            Nhấp vào đây để tiếp tục mua sắm
          </Link>
        </div>
      )}
    </>
  );
}

export default CheckOut;
