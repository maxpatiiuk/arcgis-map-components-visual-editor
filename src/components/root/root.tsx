import { Component, State, h } from '@stencil/core';
import { mainText } from '../../localization/main';
import { defaultBaseMap } from '../map-selection/types';
import { WidgetLayout } from '../widgets/types';
import { buildCode } from '../code-builder/buildCode';
import { downloadFile } from '../code-builder/downloadFile';

@Component({
  tag: 'vis-root',
  shadow: false,
})
export class VisRoot {
  @State() baseMap = defaultBaseMap;

  @State() openBaseMapSelection = false;

  @State() isPreview = false;

  @State() widgetLayout: WidgetLayout = [];

  visMap: HTMLVisMapElement | undefined;

  render() {
    const itemId =
      this.baseMap.type === 'PortalItem'
        ? this.baseMap.portalItemId
        : undefined;
    const basemap =
      this.baseMap.type === 'Basemap' ? this.baseMap.basemap : undefined;
    return (
      <calcite-shell>
        <calcite-navigation slot="header">
          <div slot="content-start" class="p-4 flex gap-2">
            <calcite-button
              appearance={this.openBaseMapSelection ? 'outline-fill' : 'solid'}
              aria-pressed={this.openBaseMapSelection}
              onClick={(): void => {
                this.openBaseMapSelection = !this.openBaseMapSelection;
              }}
            >
              {mainText.changeBaseMap}
            </calcite-button>
            {this.openBaseMapSelection && (
              <vis-map-selection
                baseMap={this.baseMap}
                onBaseMapSelected={({ detail: baseMap }): void => {
                  this.baseMap = baseMap;
                  this.openBaseMapSelection = false;
                }}
              />
            )}
            <calcite-button
              appearance={this.isPreview ? 'outline-fill' : 'solid'}
              aria-pressed={this.isPreview}
              onClick={(): void => {
                this.isPreview = !this.isPreview;
              }}
            >
              {mainText.preview}
            </calcite-button>
          </div>
          <calcite-button
            slot="content-end"
            class="p-4 flex gap-2"
            appearance="solid"
            onClick={(): void =>
              void buildCode(this.baseMap, this.widgetLayout, this.visMap)
                .then((code) => downloadFile('index.html', code))
                .catch(console.error)
            }
          >
            {mainText.downloadCode}
          </calcite-button>
        </calcite-navigation>
        <vis-map
          /*
           * Dynamic changes to itemID/basemap don't propagate, so need to
           * re-create the component
           */
          key={itemId ?? basemap}
          itemId={itemId}
          basemap={basemap}
          isPreview={this.isPreview}
          widgetLayout={this.widgetLayout}
          class="h-full"
          ref={(visMap) => {
            this.visMap = visMap ?? this.visMap;
          }}
          onLayoutChange={({ detail }): void => {
            this.widgetLayout = detail;
          }}
        />
      </calcite-shell>
    );
  }
}
