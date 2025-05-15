import { useState } from 'react';
import { Pokemon } from '../modules/ExampleModule/index.tsx';
import PokemonCard from '../components/PokemonCard.tsx';

type ExampleComponentProps = {
  description: string;
  pokemon: Pokemon;
};

export default function ExampleComponent({
  description,
  pokemon,
}: ExampleComponentProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-cols-1 items-center justify-start gap-4 lg:grid-cols-2">
      <div className="flex aspect-square h-full flex-col items-center justify-center gap-4 rounded-md border border-gray-300 p-4">
        <h2 className="text-xl font-bold">Example Component</h2>
        <p>{description}</p>
        <p>Count: {count}</p>
        <button
          className="rounded-md bg-blue-500 p-2 text-white"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}
