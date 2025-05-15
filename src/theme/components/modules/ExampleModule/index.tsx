import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import '../../../styles/tailwind.css';
// @ts-ignore
import ExampleComponent from '../../islands/ExampleComponent.tsx?island';
import { Island } from '@hubspot/cms-components';
import ExampleAsset from '../../../assets/sprocket.svg';

type ExampleModuleProps = {
  fieldValues: {
    title: string;
    description: string;
  };
};

export function Component({ fieldValues }: ExampleModuleProps) {
  const { title, description } = fieldValues;
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4">
      <img className="h-10 w-10" src={ExampleAsset} alt="Example Asset" />
      <h1 className="text-2xl font-bold">{title}</h1>
      <Island module={ExampleComponent} description={description} />
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
