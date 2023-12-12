import { Component, Prop, Event, h, EventEmitter, State } from '@stencil/core';
import { WidgetLayout, widgetPositions } from './types';
import { removeItem, replaceItem } from '../../utils/utils';
import { ArcGISMapView } from '@arcgis/map-components';

@Component({
  tag: 'vis-widgets',
  shadow: false,
})
export class VisWidgets {
  @Prop() widgetLayout!: WidgetLayout;

  @Prop() mapView!: ArcGISMapView;

  @Prop() isPreview: boolean = false;

  @State() activeWidget: number | undefined = undefined;

  @Event() layoutChange!: EventEmitter<WidgetLayout>;

  render() {
    return (
      <div class="contents">
        {this.widgetLayout.map((widget, index) => (
          <vis-widget
            key={index}
            definition={widget}
            mapView={this.mapView}
            isEditing={this.activeWidget === index}
            onStartEditing={(): void => {
              this.activeWidget = index;
            }}
            onFinishEditing={({ detail: newWidgetLayout }): void => {
              this.activeWidget = undefined;
              this.layoutChange.emit(
                newWidgetLayout === null
                  ? removeItem(this.widgetLayout, index)
                  : replaceItem(this.widgetLayout, index, newWidgetLayout)
              );
            }}
          />
        ))}
        {widgetPositions.map((position) => (
          <vis-placement mapView={this.mapView!} position={position}>
            <vis-add-widget
              position={position}
              onAdded={({ detail }): void =>
                void this.layoutChange.emit([...this.widgetLayout, detail])
              }
            />
          </vis-placement>
        ))}
      </div>
    );
  }
}
