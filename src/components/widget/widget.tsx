import { Component, Prop, Event, h, EventEmitter } from '@stencil/core';
import { WidgetDefinition } from '../widgets/types';

@Component({
  tag: 'vis-widget',
  shadow: false,
})
export class VisWidget {
  @Prop() definition!: WidgetDefinition;

  @Prop() isEditing: boolean = false;

  @Event() startEditing!: EventEmitter<void>;
  @Event() finishEditing!: EventEmitter<WidgetDefinition | undefined>;

  render() {
    return (
      <div
        onClickCapture={(event): void => {
          event.preventDefault();
          this.startEditing.emit();
        }}
      >
        <arcgis-layer-list
          position={this.definition.position}
          class="pointer-events-none"
        />
      </div>
    );
  }
}
