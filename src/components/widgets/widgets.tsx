import { Component, Prop, Event, h, EventEmitter, State } from '@stencil/core';
import { WidgetLayout, widgetPositions } from './types';
import { removeItem, replaceItem } from '../../utils/utils';
import { ArcGISMapView } from '@arcgis/map-components';
import { R } from '../../utils/types';

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

  // FIXME: all widgets getting duplicated after hot reload
  render() {
    const grouppedCounts = this.widgetLayout.reduce<R<WidgetLayout>>(
      (group, widget) => {
        group[widget.name] = [...(group[widget.name] ?? []), widget];
        return group;
      },
      {}
    );
    return (
      <div class="contents">
        {this.widgetLayout.map((widget, index) => (
          <vis-widget
            key={`${widget.name}_${grouppedCounts[widget.name].indexOf(
              widget
            )}`}
            definition={widget}
            mapView={this.mapView}
            isEditing={this.activeWidget === index}
            isPreview={this.isPreview}
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
        {!this.isPreview &&
          widgetPositions.map((position) => (
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
