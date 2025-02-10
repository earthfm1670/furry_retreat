'use client';
import * as React from 'react';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function UserDashboardPage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className='mx-auto w-full rounded-md bg-green-100 p-6 shadow-md'>
      <h2 className='mb-4 text-2xl font-semibold text-gray-800'>Profile</h2>

      <div className='space-y-3'>
        <div>
          <label className='block font-medium text-gray-700'>Name</label>
          <input
            type='text'
            className='w-full rounded-lg border bg-gray-100 px-3 py-2 focus:outline-none'
            defaultValue='John Doe'
            disabled={!isEditing}
          />
        </div>

        <div>
          <label className='block font-medium text-gray-700'>Phone</label>
          <input
            type='text'
            className='w-full rounded-lg border bg-gray-100 px-3 py-2 focus:outline-none'
            defaultValue='(123) 456-7890'
            disabled={!isEditing}
          />
        </div>

        <div>
          <label className='block font-medium text-gray-700'>Email</label>
          <input
            type='email'
            className='w-full rounded-lg border bg-gray-100 px-3 py-2 focus:outline-none'
            defaultValue='john@example.com'
            disabled={!isEditing}
          />
        </div>

        <div>
          <label className='block font-medium text-gray-700'>Address</label>
          <input
            type='text'
            className='w-full rounded-lg border bg-gray-100 px-3 py-2 focus:outline-none'
            defaultValue='123 Pet Street, Animalville, PA 12345'
            disabled={!isEditing}
          />
        </div>
      </div>

      <button
        onClick={() => setIsEditing(!isEditing)}
        className='mt-4 rounded-lg bg-green-500 px-4 py-2 font-semibold text-white transition hover:bg-green-600'
      >
        {isEditing ? 'Save Profile' : 'Edit Profile'}
      </button>
    </div>
  );
}
