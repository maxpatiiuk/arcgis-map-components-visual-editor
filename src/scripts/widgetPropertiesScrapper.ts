/**
 * A quick and dirty script for extracting the map component names and
 * argument types from Storybook stories.
 *
 * Run it like this:
 * node --loader @swc-node/register/esm widgetPropertiesScrapper.ts ~/site/esri/arcgis-web-components/packages/map-components/stories/reference/stories/
 * Where last argument is a path to the map-components stories folder in the
 * arcgis-web-components repository.
 */

import fs from 'node:fs';
import path from 'node:path';
import { IR, RA, isDefined } from '../utils/types';

const mapComponentStoriesRoot = path.resolve(process.argv[2]);

const files = fs
  .readdirSync(mapComponentStoriesRoot)
  .filter((file) => file.endsWith('.stories.ts'))
  .map((file) => path.join(mapComponentStoriesRoot, file));

const areaMeasurementUnitArgType = {
  options: [
    'acres',
    'ares',
    'hectares',
    'imperial',
    'metric',
    'square-centimeters',
    'square-decimeters',
    'square-feet',
    'square-inches',
    'square-kilometers',
    'square-meters',
    'square-miles',
    'square-millimeters',
    'square-us-feet',
    'square-yards',
  ],
  mapping: [
    'acres',
    'ares',
    'hectares',
    'imperial',
    'metric',
    'square-centimeters',
    'square-decimeters',
    'square-feet',
    'square-inches',
    'square-kilometers',
    'square-meters',
    'square-miles',
    'square-millimeters',
    'square-us-feet',
    'square-yards',
  ],
  control: { type: 'select' },
};

const distanceMeasurementUnitArgType = {
  options: [
    'centimeters',
    'decimeters',
    'feet',
    'imperial',
    'inches',
    'kilometers',
    'meters',
    'metric',
    'miles',
    'millimeters',
    'nautical-miles',
    'square-yards',
  ],
  mapping: [
    'centimeters',
    'decimeters',
    'feet',
    'imperial',
    'inches',
    'kilometers',
    'meters',
    'metric',
    'miles',
    'millimeters',
    'nautical-miles',
    'square-yards',
  ],
  control: { type: 'select' },
};

// These are used in the eval below
areaMeasurementUnitArgType || distanceMeasurementUnitArgType;

const widgetDefinitions = files
  .map((file) =>
    eval(
      `(${
        fs
          .readFileSync(file)
          .toString()
          .match(/(?<== ){[\s\S]+?}(?=;)/g)
          ?.at(-1) ?? ''
      })`
    )
  )
  .map((meta) => ({
    name: meta.args.componentName,
    parameters: Object.entries(meta.argTypes ?? {})
      .map(([name, parameters]) => {
        const options = parameters as ParameterOptions;
        const defaultValue = meta.args[name];
        const isReadOnly = options.table?.disable === true;
        const type = options.control?.type;
        if (isReadOnly || type === 'object') return undefined;

        return [
          {
            name,
            type,
            options: options.options ?? options.mapping,
            defaultValue,
          },
        ];
      })
      .filter(isDefined),
  }));

fs.writeFileSync(
  '../assets/widgetProperties.json',
  JSON.stringify(widgetDefinitions, null, 2)
);

type ParameterOptions = {
  readonly table?: {
    readonly disable: boolean;
  };
  readonly options?: RA<string>;
  readonly mapping?: RA<string>;
  readonly control?: {
    readonly type?:
      | 'select'
      | 'radio'
      | 'text'
      | 'boolean'
      | 'number'
      | 'inline-check'
      | 'object';
  };
};

export type WidgetsProperties = RA<{
  readonly name: string;
  readonly parameters: IR<WidgetProperties>;
}>;

export type WidgetProperties = {
  readonly name: string;
  readonly parameters: RA<{
    readonly name: string;
    readonly type: WidgetControlType;
    readonly options: RA<string>;
    readonly defaultValue?: string | number | boolean;
  }>;
};

export type WidgetControlType =
  | 'select'
  | 'radio'
  | 'text'
  | 'boolean'
  | 'number'
  | 'inline-check'
  | 'object';
