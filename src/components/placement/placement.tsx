/**
 * For some reason, the arcgis-placement element appears to not be defined
 * in the custom elements registry, so have to define it on my own.
 */

import { ArcGISMapView } from '@arcgis/map-components';
import { Component, h, Prop, VNode, Watch } from '@stencil/core';
import { WidgetPosition } from '../widgets/types';

@Component({
  tag: 'vis-placement',
})
export class ArcgisPlacement {
  @Prop() mapView!: ArcGISMapView;

  slotted!: HTMLElement;

  @Prop() position!: WidgetPosition;

  @Watch('position')
  positionWatcher(newValue: string): void {
    if (newValue !== undefined) {
      this.mapView.ui.move(this.slotted, newValue);
    }
  }

  componentDidLoad(): void {
    this.mapView.ui.add(this.slotted, this.position as 'top-left');
  }

  disconnectedCallback(): void {
    this.mapView.ui.remove(this.slotted);
  }

  render(): VNode {
    return (
      <div ref={(el) => (this.slotted = el as HTMLElement)}>
        <slot />
      </div>
    );
  }
}
