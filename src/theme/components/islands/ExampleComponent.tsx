import { useState } from 'react';

type ExampleComponentProps = {
  description: string;
};

export default function ExampleComponent({
  description,
}: ExampleComponentProps) {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-gray-300 p-4">
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
  );
}
