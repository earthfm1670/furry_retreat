import { PlusCircle } from 'lucide-react';

interface Pet {
  name: string;
  species: string;
  breed: string;
  foodRestrictions: string;
  likes: string;
  dislikes: string;
}

const pets: Pet[] = [
  {
    name: 'Buddy',
    species: 'Dog',
    breed: 'Golden Retriever',
    foodRestrictions: 'None',
    likes: 'Playing fetch, swimming',
    dislikes: 'Loud noises',
  },
  {
    name: 'Whiskers',
    species: 'Cat',
    breed: 'Siamese',
    foodRestrictions: 'Lactose intolerant',
    likes: 'Napping in sunlight, chasing toys',
    dislikes: 'Water, cucumbers',
  },
];

export default function PetProfilePage() {
  return (
    <div className='mx-auto w-full rounded-md bg-green-100 p-6 shadow-md'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-semibold text-gray-800'>Pet Profiles</h2>
        <button className='flex items-center rounded-lg bg-green-500 px-4 py-2 text-white transition hover:bg-green-600'>
          <PlusCircle className='mr-2 h-5 w-5' />
          Add Pet
        </button>
      </div>

      <div className='mt-4 space-y-4'>
        {pets.map((pet, index) => (
          <div key={index} className='border-b pb-3'>
            <h3 className='text-lg font-bold'>{pet.name}</h3>
            <p className='text-gray-600'>
              {pet.species} - {pet.breed}
            </p>
            <p>
              <strong>Food Restrictions:</strong> {pet.foodRestrictions}
            </p>
            <p>
              <strong>Likes:</strong> {pet.likes}
            </p>
            <p>
              <strong>Dislikes:</strong> {pet.dislikes}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
