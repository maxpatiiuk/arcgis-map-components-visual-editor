export type BaseMap =
  | {
      readonly type: 'PortalItem';
      readonly portalItemId: string;
    }
  | {
      readonly type: 'Basemap';
      readonly basemap: string;
    };
