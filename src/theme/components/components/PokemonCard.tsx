import { Pokemon } from '../modules/ExampleModule/index.tsx';

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const { name, id, types } = pokemon;
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-gray-300 p-4">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>ID: {id}</p>
      <p>Types: {types.map((type) => type.type.name).join(', ')}</p>
    </div>
  );
}
