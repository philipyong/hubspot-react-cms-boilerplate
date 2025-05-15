import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import '../../../styles/tailwind.css';
// @ts-ignore
import ExampleComponent from '../../islands/ExampleComponent.tsx?island';
import {
  Island,
  logError,
  logInfo,
  ModuleDataFetchResult,
  withUrlAndQuery,
} from '@hubspot/cms-components';
import ExampleAsset from '../../../assets/sprocket.svg';

type ExampleModuleProps = {
  fieldValues: {
    title: string;
    description: string;
  };
};

export type Pokemon = {
  name: string;
  id: number;
  types: {
    type: { name: string };
  }[];
};

// Helper function to settle promises
const settlePromise = (promise: Promise<any>) =>
  promise
    .then((value) => ({ status: 'fulfilled' as const, value }))
    .catch((reason) => ({ status: 'rejected' as const, reason }));

// Types for the data fetched server-side and passed to the island
export interface ExampleModuleServerSideProps {
  fetchedPokemonDataContainer?: {
    status: 'fulfilled' | 'rejected';
    value?: { json: Pokemon; duration: number; source: string };
    reason?: any;
  };
  error?: string;
}

// Function to fetch pokemon data
async function fetchRandomPokemonData(): Promise<{
  json: Pokemon;
  duration: number;
  source: string;
}> {
  const startTime = Date.now();
  const pokemonId = Math.floor(Math.random() * 151) + 1;
  const apiEndpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  logInfo(
    `[ExampleModule] Fetching Pokémon data for ID: ${pokemonId} from ${apiEndpoint}`,
  );
  try {
    const response = await fetch(apiEndpoint);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, response: ${errorText}`,
      );
    }
    const data: Pokemon = await response.json();
    return {
      json: data,
      duration: Date.now() - startTime,
      source: 'fetch',
    };
  } catch (error: any) {
    logError(
      `[ExampleModule] Failed to fetch Pokémon data for ${pokemonId}: `,
      error.message,
    );
    throw error;
  }
}

export const getServerSideProps = withUrlAndQuery(
  async (): Promise<ModuleDataFetchResult> => {
    const serverPropsData: ExampleModuleServerSideProps = {};

    const dataPromise = fetchRandomPokemonData();
    const results = await settlePromise(dataPromise);

    serverPropsData.fetchedPokemonDataContainer = results;

    if (results.status === 'rejected') {
      logError(`[ExampleModule] Data fetching failed.`, results.reason);
      serverPropsData.error =
        results.reason?.message || 'Failed to load Pokémon data.';
    } else {
      logInfo(`[ExampleModule] Data fetching successful.`);
    }

    return {
      serverSideProps: serverPropsData,
      caching: {
        cacheControl: {
          maxAge: results.status === 'rejected' ? 60 : 300,
        },
      },
    };
  },
);

export function Component({
  fieldValues,
  serverSideProps,
}: ExampleModuleProps & {
  serverSideProps: ExampleModuleServerSideProps;
}) {
  const { title, description } = fieldValues;
  const { fetchedPokemonDataContainer } = serverSideProps;
  const pokemon = fetchedPokemonDataContainer?.value?.json;

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4">
      <img className="h-10 w-10" src={ExampleAsset} alt="Example Asset" />
      <h1 className="text-2xl font-bold">{title}</h1>
      <Island
        module={ExampleComponent}
        description={description}
        pokemon={pokemon}
      />
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="title" label="Title" default="Example Module" />
    <TextField
      name="description"
      label="Description"
      default="Click The Button To Increment"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Example Module',
};
