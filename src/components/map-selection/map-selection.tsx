import { Component, EventEmitter, Event, h, Prop } from '@stencil/core';
import { mainText } from '../../localization/main';
import { basemaps } from '../map/basemaps';
import { BaseMap, defaultBaseMap } from './types';

const portalBrowserUrl =
  'https://www.arcgis.com/home/search.html?restrict=false&sortField=numviews&sortOrder=desc&focus=maps-webmaps';

@Component({
  tag: 'vis-map-selection',
  shadow: false,
})
export class VisMapSelection {
  @Prop() baseMap!: BaseMap;

  @Event() baseMapSelected!: EventEmitter<BaseMap>;

  render() {
    return (
      <calcite-modal
        open
        aria-labelledby="modal-title"
        escapeDisabled={true}
        closeButtonDisabled={true}
        outsideCloseDisabled={true}
      >
        <header slot="header" id="modal-title">
          <h1>{mainText.title}</h1>
        </header>
        <main slot="content">
          <br />
          <calcite-label>
            <p>{mainText.subDescription}</p>
            <calcite-link href={portalBrowserUrl} target="_blank">
              {mainText.browseAllPortalItems}
            </calcite-link>
            <calcite-list selectionMode="single">
              <calcite-list-item
                label={mainText.portalItemId}
                value="portal-item-id"
                selected={this.baseMap.type === 'PortalItem'}
                onCalciteListItemSelect={(): void => {
                  this.baseMap = defaultBaseMap;
                }}
              >
                {this.baseMap.type === 'PortalItem' && (
                  <calcite-input-text
                    slot="content-bottom"
                    aria-label={mainText.portalItemId}
                    placeholder={mainText.portalItemId}
                    value={this.baseMap.portalItemId}
                    onInput={(event): void => {
                      this.baseMap = {
                        type: 'PortalItem',
                        portalItemId: (
                          event.target as HTMLCalciteInputTextElement
                        ).value,
                      };
                    }}
                  />
                )}
              </calcite-list-item>
              <calcite-list-item-group heading={mainText.defaultBaseMaps}>
                {Object.entries(basemaps).map(([name, description]) => (
                  <calcite-list-item
                    key={name}
                    label={name}
                    description={description}
                    value={name}
                    onCalciteListItemSelect={(): void => {
                      this.baseMap = {
                        type: 'Basemap',
                        basemap: name,
                      };
                    }}
                    selected={
                      this.baseMap.type === 'Basemap' &&
                      this.baseMap.basemap === name
                    }
                  />
                ))}
              </calcite-list-item-group>
            </calcite-list>
          </calcite-label>
        </main>
        <calcite-button
          slot="primary"
          onClick={() => this.baseMapSelected.emit(this.baseMap)}
        >
          {mainText.continue}
        </calcite-button>
      </calcite-modal>
    );
  }
}
