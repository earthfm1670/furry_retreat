interface Booking {
  pet: string;
  dates: string;
  service: string;
  status: 'Completed' | 'Upcoming';
}

const bookings: Booking[] = [
  {
    pet: 'Buddy',
    dates: '2023-06-01 to 2023-06-05',
    service: 'Luxury Suite',
    status: 'Completed',
  },
  {
    pet: 'Whiskers',
    dates: '2023-07-10 to 2023-07-15',
    service: 'Standard Room',
    status: 'Upcoming',
  },
];

export default function BookingHistoryPage() {
  return (
    <div className='mx-auto w-full rounded-md bg-green-100 p-6 shadow-md'>
      <h2 className='text-2xl font-semibold text-gray-800'>Booking History</h2>

      <div className='mt-4 space-y-4'>
        {bookings.map((booking, index) => (
          <div key={index} className='border-b pb-3'>
            <p>
              <strong>Pet:</strong> {booking.pet}
            </p>
            <p>
              <strong>Dates:</strong> {booking.dates}
            </p>
            <p>
              <strong>Service:</strong> {booking.service}
            </p>
            <p>
              <strong>Status:</strong>
              <span
                className={`ml-1 font-semibold ${booking.status === 'Completed' ? 'text-green-600' : 'text-orange-500'}`}
              >
                {booking.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
