import { Component, Prop, Event, h, EventEmitter } from '@stencil/core';
import { WidgetDefinition } from '../widgets/types';
import { WidgetProperty } from '../../scripts/widgetPropertiesScrapper';
import { removeItem, removeKey } from '../../utils/utils';
import { RA } from '../../utils/types';

@Component({
  tag: 'vis-widget-property',
  shadow: false,
})
export class VisWidgetProperty {
  @Prop() definition!: WidgetDefinition;

  @Prop() propertyDefinition!: WidgetProperty;

  @Event() definitionChange!: EventEmitter<WidgetDefinition>;

  render() {
    const { name, type, options = [], defaultValue } = this.propertyDefinition;
    const value = this.definition.properties[name] ?? defaultValue;
    const handleChange = (
      value: string | number | boolean | RA<string>
    ): void =>
      void this.definitionChange.emit({
        ...this.definition,
        properties:
          value === defaultValue
            ? removeKey(this.definition.properties, name)
            : {
                ...this.definition.properties,
                [name]: value,
              },
      });

    return (
      <calcite-label>
        {name}
        {type === 'boolean' ? (
          <calcite-checkbox
            checked={value === true}
            onCalciteCheckboxChange={(): void => handleChange(!value)}
          />
        ) : type === 'number' ? (
          <calcite-input-number
            value={(typeof value === 'number' ? value : 0).toString()}
            onInput={({ target }): void =>
              handleChange(
                Number.parseInt((target as HTMLCalciteInputNumberElement).value)
              )
            }
          />
        ) : type === 'text' ? (
          <calcite-input-text
            value={value?.toString() ?? ''}
            onInput={({ target }): void =>
              handleChange(
                Number.parseInt((target as HTMLCalciteInputNumberElement).value)
              )
            }
          />
        ) : type === 'radio' ? (
          <calcite-radio-button-group name={name} layout="vertical">
            {options.map((option) => (
              <calcite-label layout="inline" key={option}>
                <calcite-radio-button
                  value={option}
                  onChange={(): void => handleChange(option)}
                ></calcite-radio-button>
                {option}
              </calcite-label>
            ))}
          </calcite-radio-button-group>
        ) : type === 'inline-check' ? (
          options.map((option) => (
            <calcite-label layout="inline" key={option}>
              <calcite-checkbox
                checked={Array.isArray(value) && value.includes(option)}
                onCalciteCheckboxChange={(): void =>
                  handleChange(
                    Array.isArray(value)
                      ? value.includes(option)
                        ? removeItem(value, value.indexOf(option))
                        : [...value, option]
                      : [value]
                  )
                }
              />
              {option}
            </calcite-label>
          ))
        ) : type === 'select' ? (
          <calcite-select
            label={name}
            value={value?.toString() ?? ''}
            onCalciteSelectChange={({ target }): void =>
              handleChange(target.value)
            }
          >
            {options.map((option) => (
              <calcite-option>{option}</calcite-option>
            ))}
          </calcite-select>
        ) : undefined}
      </calcite-label>
    );
  }
}
