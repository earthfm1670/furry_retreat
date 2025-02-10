'use client';

import { Bed, Bath, Heart, Utensils } from 'lucide-react';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/system';

const GreenButton = styled(MuiButton)(({}) => ({
  backgroundColor: '#4caf50',
  color: 'white',
  '&:hover': {
    backgroundColor: '#45a049',
  },
}));

const services = [
  {
    icon: Bed,
    title: 'Comfortable Lodging',
    description: 'Spacious rooms for your pets to relax and play',
  },
  {
    icon: Bath,
    title: 'Grooming Services',
    description:
      'Keep your pet looking their best with our professional grooming.',
  },
  {
    icon: Heart,
    title: 'Health Check-ups',
    description: "Regular health monitoring to ensure your pet's well-being",
  },
  {
    icon: Utensils,
    title: 'Gourmet Pet Meals',
    description: "Nutritious and delicious meals tailored to your pet's needs.",
  },
];

export function Services() {
  return (
    <section id='services' className='bg-green-100 py-16'>
      <div className='container mx-auto px-6'>
        <h2 className='mb-12 text-center text-3xl font-bold text-green-800'>
          Our Services
        </h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {services.map((service, index) => (
            <div
              key={index}
              className='flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md'
            >
              <service.icon className='mb-4 h-12 w-12 text-green-500' />
              <h3 className='mb-2 text-xl font-semibold text-green-700'>
                {service.title}
              </h3>
              <p className='text-green-600'>{service.description}</p>
            </div>
          ))}
        </div>
        <div className='mt-12 text-center'>
          <GreenButton href='/services' variant='contained' size='large'>
            View More Services
          </GreenButton>
        </div>
      </div>
    </section>
  );
}
