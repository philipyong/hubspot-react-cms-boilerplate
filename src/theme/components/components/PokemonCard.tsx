import { Pokemon } from '../modules/ExampleModule/index.tsx';

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const { name, id, types } = pokemon;
  return (
    <div className="flex aspect-square w-full flex-col items-center justify-center gap-1 rounded-md border border-gray-300 p-4">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        className="w-32"
      />
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>ID: {id}</p>
        <p>Types: {types.map((type) => type.type.name).join(', ')}</p>
      </div>
      <button
        className="mt-5 rounded-md bg-blue-500 p-2 text-white"
        onClick={() => {
          window.location.reload();
        }}
      >
        Reroll
      </button>
    </div>
  );
}
