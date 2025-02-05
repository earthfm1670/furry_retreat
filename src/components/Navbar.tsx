'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  PawPrintIcon as Paw,
  UserCircle,
  LogIn,
  LogOut,
  ShoppingCart,
} from 'lucide-react';

export function Navbar() {
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);

  useEffect(() => {
    // replace 3 with data of items in cart
    const cartItems = 3;
    setCartItemsCount(cartItems);
  }, []);
  return (
    <>
      <nav className='bg-green-500 text-white shadow-md'>
        <div className='container mx-auto flex items-center justify-between px-6 py-3'>
          <Link href='/' className='flex items-center space-x-2'>
            <Paw className='h-8 w-8' />
            <span className='text-xl font-bold'>Furry Retreat</span>
          </Link>
          {/* right side menus */}
          <div className='flex items-center space-x-4'>
            <Link
              href='/booking'
              className='transition-colors hover:text-green-200'
            >
              Booking
            </Link>
            <Link
              href='/services'
              className='transition-colors hover:text-green-200'
            >
              Services
            </Link>
            <Link
              href='/products'
              className='transition-colors hover:text-green-200'
            >
              Products
            </Link>

            <Link
              href='/cart'
              className='relative transition-colors hover:text-green-200'
            >
              <ShoppingCart className='h-8 w-8' />
              {cartItemsCount > 0 && (
                <span className='absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white'>
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
