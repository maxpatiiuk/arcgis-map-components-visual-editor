import { Component, h } from '@stencil/core';
import { mainText } from '../../localization/main';

@Component({
  tag: 'app-map',
  shadow: false,
})
export class AppProfile {
  render() {
    return (
      <calcite-shell>
        <calcite-navigation slot="header">
          <calcite-navigation-logo
            slot="logo"
            heading={mainText.title}
            description={mainText.title}
          ></calcite-navigation-logo>
          <calcite-menu slot="content-end">
            <calcite-menu-item
              text="Drivers"
              icon-start="license"
              text-enabled
            ></calcite-menu-item>
            <calcite-menu-item
              active
              text="Routes"
              icon-start="road-sign"
              text-enabled
            ></calcite-menu-item>
            <calcite-menu-item
              text="Forecast"
              icon-start="snow"
              text-enabled
            ></calcite-menu-item>
          </calcite-menu>
          <calcite-navigation slot="navigation-secondary">
            <calcite-menu slot="content-start">
              <calcite-menu-item
                breadcrumb
                text="All Routes"
                icon-start="book"
                text-enabled
              ></calcite-menu-item>
              <calcite-menu-item
                active
                text="South Hills"
                icon-start="apps"
                text-enabled
              ></calcite-menu-item>
            </calcite-menu>
          </calcite-navigation>
          <calcite-navigation-user
            slot="user"
            full-name="Wendell Berry"
            username="w_berry"
          ></calcite-navigation-user>
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
