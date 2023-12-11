import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <stencil-route-link url="/map-cdn/">
          <button>Map CDN</button>
        </stencil-route-link>
        <stencil-route-link url="/map-npm/">
          <button>Map NPM</button>
        </stencil-route-link>
      </div>
    );
  }
}
