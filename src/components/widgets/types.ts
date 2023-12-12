import { IR, RA, ValueOf } from '../../utils/types';

export type WidgetLayout = RA<WidgetDefinition>;

export type WidgetDefinition = {
  readonly name: string;
  readonly position: WidgetPosition;
  readonly properties: IR<string | number | boolean>;
};

export const widgetPositions = [
  'bottom-left',
  'bottom-right',
  'top-left',
  'top-right',
] as const;
export type WidgetPosition = ValueOf<typeof widgetPositions>;
