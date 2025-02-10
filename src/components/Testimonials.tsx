import Image from 'next/image';

const testimonials = [
  {
    name: 'John Doe',
    image: '/placeholder.svg?height=100&width=100',
    text: 'My dogs loves staying at Furry Retreat! The staffs are so caring and attentive',
  },
  {
    name: 'Jane Smith',
    image: '/placeholder.svg?height=100&width=100',
    text: 'I always feel at ease leaving my cat here. They provide excellent care and updates.',
  },
  {
    name: 'Mike Johnson',
    image: '/placehoder.svg?height=100&width=100',
    text: 'The grooming services are top-notch. My pet always come back looking amazing!',
  },
];

export function Testimonials() {
  return (
    <section id='testimonials' className='bg-green-50 py-16'>
      <div className='container mx-auto px-6'>
        <h2 className='mb-12 text-center text-3xl font-bold text-green-800'>
          What Our Customers Say
        </h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md'
            >
              <Image
                src={testimonial.image || '/placeholder.svg'}
                alt={testimonial.name}
                width={100}
                height={100}
                className='mb-4 rounded-full border-4 border-green-200'
              />
              <p className='mb-4 text-green-600'>{testimonial.text}</p>
              <p className='font-semibold text-green-700'>{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
