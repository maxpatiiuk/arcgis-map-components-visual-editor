import {
  Component,
  Prop,
  Event,
  h,
  EventEmitter,
  State,
  Watch,
} from '@stencil/core';
import { WidgetDefinition } from '../widgets/types';
import { R } from '../../utils/types';

@Component({
  tag: 'vis-widget',
  shadow: false,
})
export class VisWidget {
  @Prop() definition!: WidgetDefinition;

  @Prop() isEditing: boolean = false;

  @Event() startEditing!: EventEmitter<void>;
  @Event() finishEditing!: EventEmitter<WidgetDefinition | undefined>;

  @State() containerRef: HTMLDivElement | undefined;

  widgetRef: HTMLArcgisHomeElement | undefined;

  @Watch('definition')
  definitionWatcher(
    definition: WidgetDefinition,
    oldDefinition: WidgetDefinition
  ) {
    const widget = this.widgetRef as R<unknown> | undefined;

    if (widget === undefined) return;

    // Remove old properties
    const newKeys = new Set(Object.keys(definition.properties));
    const removedProperties = Object.keys(oldDefinition).filter(
      (key) => !newKeys.has(key)
    );
    removedProperties.forEach((property) => {
      widget[property] = undefined;
    });

    // Update new properties
    const newProperties = Object.entries(definition.properties);
    newProperties.forEach(([property, value]) => {
      widget[property] = value;
    });

    widget.position = definition.position;
  }

  render() {
    return (
      <div
        onClickCapture={(event): void => {
          event.preventDefault();
          this.startEditing.emit();
        }}
        ref={(containerRef): void => {
          if (containerRef === undefined) return;
          this.widgetRef = document.createElement(
            this.definition.name
          ) as HTMLArcgisHomeElement;
          this.widgetRef.position = this.definition.position;
          this.widgetRef.classList.add('pointer-events-none');
          this.definitionWatcher(this.definition, {
            ...this.definition,
            properties: {},
          });

          containerRef.append(this.widgetRef);
        }}
      />
    );
  }
}
