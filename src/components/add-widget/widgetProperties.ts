export const widgetNameToHuman = (widgetName: string) =>
  kebabToHuman(widgetName.slice('arcgis-'.length));

const kebabToHuman = (value: string): string =>
  value
    .split('-')
    .map(capitalize)
    .join(' ')
    .replaceAll('2d', '2D')
    .replaceAll('3d', '3D')
    .replaceAll('Of', 'of');

const capitalize = (value: string): string =>
  `${value[0].toUpperCase()}${value.slice(1)}`;
