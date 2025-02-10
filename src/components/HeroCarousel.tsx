'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/placeholder.svg?height=600&width=1200',
  '/placeholder.svg?height=600&width=1200',
  '/placeholder.svg?height=600&width=1200',
];

export function HeroCarousel() {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className='relative h-[600px] overflow-hidden'>
        {images.map((src, index) => (
          <Image
            key={src}
            src={src || '/placeholder.svg'}
            alt={`Pet hotel image ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            className={`transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40'>
          <div className='text-center text-white'>
            <h1 className='mb-4 text-4xl font-bold md:text-6xl'>
              Welcome to Furry Retreat
            </h1>
            <p className='text-xl md:text-2xl'>
              Luxury accommodations for your furry friends
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
