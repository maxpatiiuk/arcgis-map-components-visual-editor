import { Component, h } from '@stencil/core';
import { mainText } from '../../localization/main';

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
              <stencil-route url="/map-npm/" component="app-map-npm" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}

// TODO: 1. ask for portal ID or map selection
// TODO: display the map
