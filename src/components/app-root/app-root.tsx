import { Component, h } from '@stencil/core';
import { mainText } from '../../localization/main';

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

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>{mainText.title}</h1>
        </header>

        <main>
          <stencil-router historyType="hash">
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/map/" component="app-map" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}

// TODO: 1. ask for portal ID or map selection
// TODO: display the map
