/**
 * Import functions to define the custom HTML elements from the
 * Map Components and Calcite Components libraries.
 */
import { defineCustomElements as defineMapElements } from '@arcgis/map-components/dist/loader';
import { defineCustomElements as defineCalciteElements } from '@esri/calcite-components/dist/loader';

/**
 * Define the custom elements on the window using the Calcite Components
 * Use the CDN-hosted assets. When using the CDN-hosted assets,
 * you need to keep the version number in the path the same as the version of
 * `@esri/calcite-components` installed as a dependency of `@arcgis/map-components`.
 */
defineCalciteElements(window, {
  resourcesUrl: 'https://js.arcgis.com/calcite-components/1.9.2/assets',
});

/**
 * Use the Map Components to define and lazy load the custom map elements.
 */
defineMapElements();
