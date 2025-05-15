import {
    ModuleFields,
} from '@hubspot/cms-components/fields';
import "../../../styles/tailwind.css";
// @ts-ignore
import ExampleComponent from '../../islands/ExampleComponent.tsx?island';
import { Island } from '@hubspot/cms-components';
import ExampleAsset from '../../../assets/sprocket.svg'

export function Component({ fieldValues }) {
    return (
        <div>
            <img className='w-10 h-10' src={ExampleAsset} alt="Example Asset" />
            <h1 className='text-3xl font-bold'>Example Module</h1>
            <Island module={ExampleComponent} />
        </div>
    );
}

export const fields = (
    <ModuleFields children={""} />
);

export const meta = {
    label: 'Example Module',
};
