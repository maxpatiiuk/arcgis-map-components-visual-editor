import { Component, Prop, State, h } from '@stencil/core';
import { mainText } from '../../localization/main';
import { BaseMap } from '../map-selection/types';
import { WidgetLayout } from '../widgets/types';
import { ArcGISMapView } from '@arcgis/map-components';

@Component({
  tag: 'vis-map',
  shadow: false,
})
export class VisMap {
  @Prop() baseMap!: BaseMap;

  @State() showCode = false;

  @State() isPreview = false;

  @State() widgetLayout: WidgetLayout = [
    {
      name: 'Home',
      position: 'top-left',
      properties: {},
    },
  ];

  @State() mapView: ArcGISMapView | undefined = undefined;

  render() {
    return (
      <calcite-shell>
        <calcite-navigation slot="header">
          <calcite-button
            slot="content-start"
            class="p-4 flex gap-2"
            appearance={this.isPreview ? 'outline-fill' : 'solid'}
            aria-pressed={this.isPreview}
            onClick={(): void => {
              this.isPreview = !this.isPreview;
            }}
          >
            {mainText.preview}
          </calcite-button>
          <calcite-button
            slot="content-end"
            class="p-4 flex gap-2"
            appearance={this.showCode ? 'outline-fill' : 'solid'}
            aria-pressed={this.showCode}
            onClick={(): void => {
              this.showCode = !this.showCode;
            }}
          >
            {mainText.showCode}
          </calcite-button>
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
          ref={(map: HTMLArcgisMapElement): void =>
            map?.addEventListener('viewReady', () => {
              // FIXME: remove the default zoom widget?
              this.mapView = map.view;
            })
          }
        >
          <vis-widgets
            isPreview={this.isPreview}
            mapView={this.mapView}
            widgetLayout={this.widgetLayout}
          />
        </arcgis-map>
      </calcite-shell>
    );
  }
}
