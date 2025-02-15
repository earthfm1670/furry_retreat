'use client';
import LogoFacebook from '@/components/icon/Facebook';

export default function LoginPage() {
  return (
    <main className='min-w-screen flex min-h-screen justify-center bg-gray-200'>
      <div className='mt-20'>
        <section className='flex flex-col gap-5 rounded-lg border border-gray-300 bg-white p-5 shadow-md'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-bold'>Login to Furry Retreat</h1>
            <h1 className=''>Welcome back! Please enter your details</h1>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Email'
              className='w-[430px] rounded-md border border-gray-300 bg-gray-200 p-2 px-4 shadow-sm'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              placeholder='Password'
              className='w-[430px] rounded-md border border-gray-300 bg-gray-200 p-2 px-4 shadow-sm'
            />
          </div>
          <div className='flex w-full flex-row justify-between'>
            <div className='flex justify-center gap-2 text-gray-600'>
              <input type='checkbox' className='w-4' />
              Remember me
            </div>
            <button className='text-blue-600 active:text-blue-800'>
              Forgot your password?
            </button>
          </div>
          <button className='flex w-[430px] justify-center rounded-md bg-blue-500 p-2 text-white active:bg-blue-800'>
            Log in
          </button>
          <div className='flex items-center gap-3 text-nowrap text-sm text-gray-600'>
            <div className='h-px w-full bg-gray-400'></div>OR CONTINUE WITH
            <div className='h-px w-full bg-gray-400'></div>
          </div>
          <button className='flex w-[430px] justify-center gap-1 rounded-md bg-blue-500 p-2 text-white active:bg-blue-800'>
            <div>
              <LogoFacebook />
            </div>
            Log in with Facebook
          </button>
          <div className='flex w-full justify-center gap-1 text-gray-600'>
            Don't have an account?
            <button className='text-blue-600 active:text-blue-800'>
              Sign up
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
