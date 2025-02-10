import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer id='contact' className='bg-green-500 py-12 text-white'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div>
            <h3 className='mb-4 text-xl font-semibold'>Furry Retreat</h3>
            <p>Luxury accommodations for your furry friends</p>
          </div>
          <div>
            <h3 className='mb-4 text-xl font-semibold'>Contact Us</h3>
            <ul className='space-y-2'>
              <li className='flex items-center'>
                <MapPin className='mr-2 h-5 w-5' />
                123 Pet Street, Animalville, PA 12345
              </li>
              <li className='flex items-center'>
                <Phone className='mr-2 h-5 w-5' />
                +(66) 876 5432
              </li>
              <li className='flex items-center'>
                <Mail className='mr-2 h-5 w-5' />
                info@furryretreat.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-4 text-xl font-semibold'>Hours</h3>
            <p>Monday - Friday: 9am - 7pm</p>
            <p>Saturday - Sunday: 10am - 6pm</p>
          </div>
        </div>
        <div className='mt-8 text-center'>
          <p>&cop; 2025 Furry Retreat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
