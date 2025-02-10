interface Service {
  date: string;
  product: string;
  quantity: string;
  price: string;
}

const service: Service[] = [
  {
    date: '2024-04-01',
    product: 'Premium Dog Food',
    quantity: '2',
    price: '45',
  },
  {
    date: '2023-05-05',
    product: 'Cat Toy Set',
    quantity: '1',
    price: '15',
  },
];

export default function PurchaseHistoryPage() {
  return (
    <div className='mx-auto w-full rounded-md bg-green-100 p-6 shadow-md'>
      <h2 className='text-2xl font-semibold text-gray-800'>Purchase History</h2>

      <div className='mt-4 space-y-4'>
        {service.map((booking, index) => (
          <div key={index} className='border-b pb-3'>
            <p>
              <strong>Date:</strong> {booking.date}
            </p>
            <p>
              <strong>Product:</strong> {booking.product}
            </p>
            <p>
              <strong>Quantity:</strong> {booking.quantity}
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
