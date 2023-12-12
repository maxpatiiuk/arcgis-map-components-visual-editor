import { getAssetPath } from '@stencil/core';
import { BaseMap } from '../map-selection/types';
import { WidgetLayout, widgetPositions } from '../widgets/types';
import { sortFunction } from '../../utils/utils';

export async function buildCode(
  baseMap: BaseMap,
  widgetLayout: WidgetLayout,
  visMap: HTMLVisMapElement | undefined
): Promise<string> {
  console.log(baseMap, widgetLayout, visMap?.mapView?.zoom);
  const rawPageHtml = await fetch(getAssetPath('assets/index.html')).then(
    (response) => response.text()
  );
  const pageHtml = rawPageHtml
    .split('\n')
    .filter(
      (line) =>
        !line.includes('build/') &&
        !line.includes('assets/') &&
        !line.includes('manifest.json')
    )
    .join('\n');
  const body = pageHtml.indexOf('<body>');
  return `${pageHtml.slice(0, body)}<body style="height:100dvh; margin:0">
    <arcgis-map
      ${
        baseMap.type === 'PortalItem'
          ? `item-id="${baseMap.portalItemId}"`
          : `basemap="${baseMap.basemap}"`
      }
      zoom="${visMap?.map?.zoom ?? ''}"
      center="${visMap?.map?.center ?? ''}"
    >
      ${Array.from(widgetLayout)
        .sort(sortFunction(({ position }) => widgetPositions.indexOf(position)))
        .map(
          ({ name, position, properties }) =>
            `<${name} ${Object.entries({ position, ...properties })
              .map(
                ([name, value]) =>
                  `${name}="${
                    Array.isArray(value) ? value.join(',') : value.toString()
                  }"`
              )
              .join(' ')}></${name}>`
        )
        .join('\n      ')}
    </arcgis-map>
  </body>
</html>`;
}
