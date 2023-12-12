import { Component, Prop, h } from '@stencil/core';
import { mainText } from '../../localization/main';
import { BaseMap } from '../map-selection/types';

@Component({
  tag: 'vis-map',
  shadow: false,
})
export class VisMap {
  @Prop() baseMap!: BaseMap;

  render() {
    return (
      <calcite-shell>
        <calcite-navigation slot="header">
          <calcite-navigation-logo
            slot="logo"
            heading={mainText.title}
            description={mainText.title}
          ></calcite-navigation-logo>
          <calcite-menu slot="content-end" label="">
            <calcite-menu-item
              text="Drivers"
              label="Drivers"
              icon-start="license"
              text-enabled
            ></calcite-menu-item>
            <calcite-menu-item
              active
              text="Routes"
              label="Drivers"
              icon-start="road-sign"
              text-enabled
            ></calcite-menu-item>
            <calcite-menu-item
              text="Forecast"
              label="Drivers"
              icon-start="snow"
              text-enabled
            ></calcite-menu-item>
          </calcite-menu>
          <calcite-navigation slot="navigation-secondary">
            <calcite-menu slot="content-start" label="abc">
              <calcite-menu-item
                breadcrumb
                text="All Routes"
                label="Drivers"
                icon-start="book"
                text-enabled
              ></calcite-menu-item>
              <calcite-menu-item
                active
                label="Drivers"
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
          itemId={
            this.baseMap.type === 'PortalItem'
              ? this.baseMap.portalItemId
              : undefined
          }
          basemap={
            this.baseMap.type === 'Basemap' ? this.baseMap.basemap : undefined
          }
          className="h-full"
        >
          <arcgis-layer-list position="top-right" />
        </arcgis-map>
      </calcite-shell>
    );
  }
}
