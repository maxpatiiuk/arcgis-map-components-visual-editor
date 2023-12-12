import { Component, Prop, Event, h, EventEmitter } from '@stencil/core';
import { WidgetLayout } from '../widgets/types';
import { ArcGISMapView } from '@arcgis/map-components';

@Component({
  tag: 'vis-map',
  shadow: false,
})
export class VisMap {
  @Prop() itemId: string | undefined;

  @Prop() basemap: string | undefined;

  @Prop() isPreview = false;

  @Prop() widgetLayout!: WidgetLayout;

  @Prop({ mutable: true }) mapView: ArcGISMapView | undefined = undefined;

  @Event() layoutChange!: EventEmitter<WidgetLayout>;

  render() {
    return (
      <arcgis-map
        itemId={this.itemId}
        basemap={this.basemap}
        ref={(map: HTMLArcgisMapElement): void => {
          if (map?.view?.ready === true) this.mapView = map.view;
          else
            map?.addEventListener('viewReady', () => {
              this.mapView = map.view;
            });
        }}
      >
        <vis-widgets
          isPreview={this.isPreview}
          mapView={this.mapView}
          widgetLayout={this.widgetLayout}
          onLayoutChange={({ detail }): void =>
            void this.layoutChange.emit(detail)
          }
        />
      </arcgis-map>
    );
  }
}
