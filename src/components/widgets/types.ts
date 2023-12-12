import { IR, RA } from '../../utils/types';

export type WidgetLayout = RA<WidgetDefinition>;

export type WidgetDefinition = {
  readonly name: string;
  readonly position: WidgetPosition;
  readonly properties: IR<string | number | boolean | RA<string>>;
};

export const widgetPositions = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
] as const;
export type WidgetPosition =
  | 'bottom-left'
  | 'bottom-right'
  | 'top-left'
  | 'top-right';
