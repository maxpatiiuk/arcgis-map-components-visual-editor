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
import widgetProperties from '../../assets/widgetProperties.json';
import { WidgetsProperties } from '../../scripts/widgetPropertiesScrapper';

const definitions = widgetProperties as WidgetsProperties;

@Component({
  tag: 'vis-widget',
  shadow: false,
})
export class VisWidget {
  @Prop() isEditing = false;

  @Prop() isPreview = false;

  @Prop() mapView!: ArcGISMapView;

  @Prop() definition!: WidgetDefinition;

  @State() pendingDefinition!: WidgetDefinition;

  @State() containerRef: HTMLDivElement | undefined;

  @Event() startEditing!: EventEmitter<void>;

  @Event() finishEditing!: EventEmitter<WidgetDefinition | null>;

  widgetRef: HTMLArcgisHomeElement | undefined;

  @Watch('definition')
  definitionWatcher(
    definition: WidgetDefinition,
    oldDefinition: WidgetDefinition
  ) {
    const widget = this.widgetRef as R<unknown> | undefined;

    if (widget === undefined) return;

    this.pendingDefinition = definition;

    // Remove old properties
    const newKeys = new Set(Object.keys(definition.properties));
    const removedProperties = Object.keys(oldDefinition.properties).filter(
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
                        if (this.isPreview) return;
                        // FIXME: if isEditing, this looses props
                        if (this.isEditing)
                          this.finishEditing.emit(this.pendingDefinition);
                        else {
                          event.preventDefault();
                          event.stopPropagation();
                          this.startEditing.emit();
                        }
                      },
                      { capture: true }
                    )
                  : undefined
            );
          }}
        />
        {this.isEditing &&
        !this.isPreview &&
        typeof this.widgetRef?.widget.container === 'object' ? (
          <calcite-popover
            referenceElement={this.widgetRef.widget.container}
            label={widgetNameToHuman(this.definition.name)}
            heading={widgetNameToHuman(this.definition.name)}
            open
            autoClose
            closable
            onCalcitePopoverClose={(): void =>
              void this.finishEditing.emit(this.pendingDefinition)
            }
          >
            {definitions[this.definition.name].length > 0 && (
              <div class="flex flex-col p-4 gap-4">
                {definitions[this.definition.name].map((property) => (
                  <vis-widget-property
                    definition={this.pendingDefinition}
                    key={property.name}
                    propertyDefinition={property}
                    onDefinitionChange={({ detail }): void => {
                      this.pendingDefinition = detail;
                    }}
                  />
                ))}
              </div>
            )}
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
