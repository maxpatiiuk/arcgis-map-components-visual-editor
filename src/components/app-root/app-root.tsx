import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: false,
})
export class AppRoot {
  render() {
    return (
      <stencil-router historyType="hash">
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="app-home" exact={true} />
          <stencil-route url="/map/" component="app-map" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}

// TODO: 1. ask for portal ID or map selection
// TODO: display the map
