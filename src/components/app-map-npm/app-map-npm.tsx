import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-map-npm',
  styleUrl: 'app-map-npm.css',
  shadow: false,
})
export class AppProfile {
  render() {
    return (
      <calcite-shell>
        <calcite-navigation slot="header">
          <calcite-navigation-logo slot="logo" />
        </calcite-navigation>
        <arcgis-map
          item-id="e691172598f04ea8881cd2a4adaa45ba"
          zoom="4"
          className="h-full"
        >
          <arcgis-layer-list position="top-right" />
        </arcgis-map>
      </calcite-shell>
    );
  }
}
