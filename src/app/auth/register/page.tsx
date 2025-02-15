'use client';
import { useState } from 'react';
import LogoFacebook from '@/components/icon/Facebook';

export default function RegisterPage() {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    // ป้องกันการพิมพ์ตัวอักษร (ให้พิมพ์แค่ตัวเลข)
    input = input.replace(/[^0-9]/g, '');

    // ป้องกันการลบ +66
    if (input.startsWith('66')) {
      input = '+66 ' + input.slice(2);
    } else if (!input.startsWith('+66')) {
      input = '+66 ' + input.slice(4);
    }

    // เว้นวรรคอัตโนมัติทุก 3 ตัวอักษร
    input = input.replace(/(\d{3})(?=\d)/g, '$1 ');

    // จำกัดให้พิมพ์ได้แค่ 9 ตัว (รวม +66)
    if (input) {
      input = input.slice(0, 15);
    }

    setPhone(input);
  };

  const handleFocus = () => {
    if (phone === '') {
      setPhone('+66 ');
    }
  };

  const handleBlur = () => {
    if (phone === '+66 ') {
      setPhone('');
    }
  };

  return (
    <main className='min-w-screen flex min-h-screen justify-center bg-gray-200'>
      <div className='mt-20'>
        <section className='flex flex-col gap-5 rounded-lg bg-white p-5 border border-gray-300 shadow-md'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-bold'>Register for Furry Retreat</h1>
            <h1 className=''>Create your account to get started</h1>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              placeholder='Enter your name'
              className='w-[430px] rounded-md bg-gray-200 p-2 px-4 shadow-sm border border-gray-300'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='tel'
              value={phone}
              onChange={handlePhoneChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder='+66 '
              className='w-[430px] rounded-md bg-gray-200 p-2 px-4 shadow-sm border border-gray-300'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Email'
              className='w-[430px] rounded-md bg-gray-200 p-2 px-4 shadow-sm border border-gray-300'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              placeholder='Password'
              className='w-[430px] rounded-md bg-gray-200 p-2 px-4 shadow-sm border border-gray-300'
            />
          </div>
          <button className='flex w-[430px] justify-center rounded-md bg-blue-500 p-2 text-white active:bg-blue-800'>
            Register
          </button>
          <div className='flex items-center gap-3 text-nowrap text-sm text-gray-600'>
            <div className='h-px w-full bg-gray-400'></div>OR CONTINUE WITH
            <div className='h-px w-full bg-gray-400'></div>
          </div>
          <button className='flex w-[430px] justify-center gap-1 rounded-md bg-blue-500 p-2 text-white active:bg-blue-800'>
            <div>
              <LogoFacebook />
            </div>
            Register with Facebook
          </button>
        </section>
      </div>
    </main>
  );
}
