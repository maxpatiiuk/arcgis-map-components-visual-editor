import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  shadow: false,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <stencil-route-link url="/map/">
          <calcite-button>Map NPM</calcite-button>
        </stencil-route-link>
      </div>
    );
  }
}
