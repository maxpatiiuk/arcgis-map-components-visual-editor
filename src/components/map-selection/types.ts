export type BaseMap =
  | {
      readonly type: 'PortalItem';
      readonly portalItemId: string;
    }
  | {
      readonly type: 'Basemap';
      readonly basemap: string;
    };

export const defaultBaseMap: BaseMap = {
  type: 'PortalItem',
  portalItemId: '41281c51f9de45edaf1c8ed44bb10e30',
};
