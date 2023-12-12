import { Component, Prop, Event, h, EventEmitter } from '@stencil/core';
import { WidgetDefinition, WidgetPosition } from '../widgets/types';
import { mainText } from '../../localization/main';
import { widgetNameToHuman } from './widgetProperties';
import widgetProperties from '../../assets/widgetProperties.json';

const widgetNames = Object.keys(widgetProperties)
  .filter((name) => name !== 'arcgis-map' && name !== 'arcgis-scene')
  .map((name) => [name, widgetNameToHuman(name)] as const);

@Component({
  tag: 'vis-add-widget',
  shadow: false,
  assetsDirs: ['../../assets'],
})
export class VisAddWidget {
  @Prop() position!: WidgetPosition;

  @Event() added!: EventEmitter<WidgetDefinition>;

  render() {
    return (
      <calcite-dropdown maxItems={10} widthScale="l">
        <calcite-button
          slot="trigger"
          scale="m"
          iconStart="plus"
          label={mainText.addWidget}
        />
        <calcite-dropdown-group>
          {widgetNames.map(([name, label]) => (
            <calcite-dropdown-item
              key={name}
              onCalciteDropdownItemSelect={(): void =>
                void this.added.emit({
                  name,
                  position: this.position,
                  properties: {},
                })
              }
            >
              {label}
            </calcite-dropdown-item>
          ))}
        </calcite-dropdown-group>
      </calcite-dropdown>
    );
  }
}
