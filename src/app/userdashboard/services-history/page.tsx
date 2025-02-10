interface Service {
  pet: string;
  date: string;
  service: string;
  price: string;
}

const service: Service[] = [
  {
    pet: 'Buddy',
    date: '2024-05-15',
    service: 'Grooming',
    price: '50',
  },
  {
    pet: 'Whiskers',
    date: '2023-06-20',
    service: 'Vet Check-up',
    price: '75',
  },
];

export default function ServicesHistory() {
  return (
    <div className='mx-auto w-full rounded-md bg-green-100 p-6 shadow-md'>
      <h2 className='text-2xl font-semibold text-gray-800'>Services History</h2>

      <div className='mt-4 space-y-4'>
        {service.map((booking, index) => (
          <div key={index} className='border-b pb-3'>
            <p>
              <strong>Pet:</strong> {booking.pet}
            </p>
            <p>
              <strong>Date:</strong> {booking.date}
            </p>
            <p>
              <strong>Service:</strong> {booking.service}
            </p>
            <p>
              <strong>Price:</strong>

              {` $${booking.price}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
