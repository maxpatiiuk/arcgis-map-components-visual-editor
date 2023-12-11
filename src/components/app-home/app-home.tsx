import { Component, h } from '@stencil/core';
import { mainText } from '../../localization/main';

@Component({
  tag: 'app-home',
  shadow: false,
})
export class AppHome {
  render() {
    return (
      <main>
        <header>
          <h1>{mainText.title}</h1>
        </header>
        <div class="app-home">
          <stencil-route-link url="/map/">
            <calcite-button>Start</calcite-button>
          </stencil-route-link>
        </div>
      </main>
    );
  }
}
