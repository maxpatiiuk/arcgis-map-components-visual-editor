import { Component, State, h } from '@stencil/core';
import { BaseMap } from '../map-selection/types';

@Component({
  tag: 'vis-root',
  shadow: false,
})
export class VisRoot {
  @State() baseMap: BaseMap | undefined;

  render() {
    return this.baseMap === undefined ? (
      <vis-map-selection
        onBaseMapSelected={({ detail: baseMap }): void => {
          this.baseMap = baseMap;
        }}
      />
    ) : (
      <vis-map baseMap={this.baseMap} />
    );
  }
}
