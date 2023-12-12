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
import { ArcGISMapView } from '@arcgis/map-components';
import { widgetNameToHuman } from '../add-widget/widgetProperties';
import { mainText } from '../../localization/main';

@Component({
  tag: 'vis-widget',
  shadow: false,
})
export class VisWidget {
  @Prop() definition!: WidgetDefinition;

  @Prop() isEditing: boolean = false;

  @Prop() mapView!: ArcGISMapView;

  @Event() startEditing!: EventEmitter<void>;
  @Event() finishEditing!: EventEmitter<WidgetDefinition | null>;

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
      <div>
        <div
          ref={(containerRef): void => {
            if (containerRef === undefined || this.widgetRef !== undefined)
              return;
            this.widgetRef = document.createElement(
              this.definition.name
            ) as HTMLArcgisHomeElement;
            this.widgetRef.position = this.definition.position;
            this.widgetRef.view = this.mapView;
            this.widgetRef.classList.add('pointer-events-none');

            this.definitionWatcher(this.definition, {
              ...this.definition,
              properties: {},
            });

            containerRef.append(this.widgetRef);

            this.widgetRef.addEventListener(
              'widgetReady',
              ({ detail: { widget } }) =>
                typeof widget.container === 'object'
                  ? widget.container.addEventListener(
                      'click',
                      (event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        this.startEditing.emit();
                      },
                      { capture: true }
                    )
                  : undefined
            );
          }}
        />
        {this.isEditing &&
        typeof this.widgetRef?.widget.container === 'object' ? (
          <calcite-popover
            referenceElement={this.widgetRef.widget.container}
            label={widgetNameToHuman(this.definition.name)}
            heading={widgetNameToHuman(this.definition.name)}
            open
            autoClose
            closable
            onCalcitePopoverClose={(): void =>
              void this.finishEditing.emit(this.definition)
            }
          >
            <calcite-button
              onClick={(): void => void this.finishEditing.emit(undefined)}
              kind="danger"
            >
              {mainText.remove}
            </calcite-button>
          </calcite-popover>
        ) : undefined}
      </div>
    );
  }
}
