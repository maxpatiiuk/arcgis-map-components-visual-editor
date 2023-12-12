/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { WidgetDefinition, WidgetLayout, WidgetPosition } from "./components/widgets/types";
import { ArcGISMapView } from "@arcgis/map-components";
import { BaseMap } from "./components/map-selection/types";
import { WidgetProperty } from "./scripts/widgetPropertiesScrapper";
export { WidgetDefinition, WidgetLayout, WidgetPosition } from "./components/widgets/types";
export { ArcGISMapView } from "@arcgis/map-components";
export { BaseMap } from "./components/map-selection/types";
export { WidgetProperty } from "./scripts/widgetPropertiesScrapper";
export namespace Components {
    interface VisAddWidget {
        "position": WidgetPosition;
    }
    interface VisMap {
        "basemap": string | undefined;
        "isPreview": boolean;
        "itemId": string | undefined;
        "mapView": ArcGISMapView | undefined;
        "widgetLayout": WidgetLayout;
    }
    interface VisMapSelection {
        "baseMap": BaseMap;
    }
    interface VisPlacement {
        "mapView": ArcGISMapView;
        "position": WidgetPosition;
    }
    interface VisRoot {
    }
    interface VisWidget {
        "definition": WidgetDefinition;
        "isEditing": boolean;
        "isPreview": boolean;
        "mapView": ArcGISMapView;
    }
    interface VisWidgetProperty {
        "definition": WidgetDefinition;
        "propertyDefinition": WidgetProperty;
    }
    interface VisWidgets {
        "isPreview": boolean;
        "mapView": ArcGISMapView;
        "widgetLayout": WidgetLayout;
    }
}
export interface VisAddWidgetCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVisAddWidgetElement;
}
export interface VisMapCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVisMapElement;
}
export interface VisMapSelectionCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVisMapSelectionElement;
}
export interface VisWidgetCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVisWidgetElement;
}
export interface VisWidgetPropertyCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVisWidgetPropertyElement;
}
export interface VisWidgetsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVisWidgetsElement;
}
declare global {
    interface HTMLVisAddWidgetElementEventMap {
        "added": WidgetDefinition;
    }
    interface HTMLVisAddWidgetElement extends Components.VisAddWidget, HTMLStencilElement {
        addEventListener<K extends keyof HTMLVisAddWidgetElementEventMap>(type: K, listener: (this: HTMLVisAddWidgetElement, ev: VisAddWidgetCustomEvent<HTMLVisAddWidgetElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLVisAddWidgetElementEventMap>(type: K, listener: (this: HTMLVisAddWidgetElement, ev: VisAddWidgetCustomEvent<HTMLVisAddWidgetElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLVisAddWidgetElement: {
        prototype: HTMLVisAddWidgetElement;
        new (): HTMLVisAddWidgetElement;
    };
    interface HTMLVisMapElementEventMap {
        "layoutChange": WidgetLayout;
    }
    interface HTMLVisMapElement extends Components.VisMap, HTMLStencilElement {
        addEventListener<K extends keyof HTMLVisMapElementEventMap>(type: K, listener: (this: HTMLVisMapElement, ev: VisMapCustomEvent<HTMLVisMapElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLVisMapElementEventMap>(type: K, listener: (this: HTMLVisMapElement, ev: VisMapCustomEvent<HTMLVisMapElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLVisMapElement: {
        prototype: HTMLVisMapElement;
        new (): HTMLVisMapElement;
    };
    interface HTMLVisMapSelectionElementEventMap {
        "baseMapSelected": BaseMap;
    }
    interface HTMLVisMapSelectionElement extends Components.VisMapSelection, HTMLStencilElement {
        addEventListener<K extends keyof HTMLVisMapSelectionElementEventMap>(type: K, listener: (this: HTMLVisMapSelectionElement, ev: VisMapSelectionCustomEvent<HTMLVisMapSelectionElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLVisMapSelectionElementEventMap>(type: K, listener: (this: HTMLVisMapSelectionElement, ev: VisMapSelectionCustomEvent<HTMLVisMapSelectionElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLVisMapSelectionElement: {
        prototype: HTMLVisMapSelectionElement;
        new (): HTMLVisMapSelectionElement;
    };
    interface HTMLVisPlacementElement extends Components.VisPlacement, HTMLStencilElement {
    }
    var HTMLVisPlacementElement: {
        prototype: HTMLVisPlacementElement;
        new (): HTMLVisPlacementElement;
    };
    interface HTMLVisRootElement extends Components.VisRoot, HTMLStencilElement {
    }
    var HTMLVisRootElement: {
        prototype: HTMLVisRootElement;
        new (): HTMLVisRootElement;
    };
    interface HTMLVisWidgetElementEventMap {
        "startEditing": void;
        "finishEditing": WidgetDefinition | null;
    }
    interface HTMLVisWidgetElement extends Components.VisWidget, HTMLStencilElement {
        addEventListener<K extends keyof HTMLVisWidgetElementEventMap>(type: K, listener: (this: HTMLVisWidgetElement, ev: VisWidgetCustomEvent<HTMLVisWidgetElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLVisWidgetElementEventMap>(type: K, listener: (this: HTMLVisWidgetElement, ev: VisWidgetCustomEvent<HTMLVisWidgetElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLVisWidgetElement: {
        prototype: HTMLVisWidgetElement;
        new (): HTMLVisWidgetElement;
    };
    interface HTMLVisWidgetPropertyElementEventMap {
        "definitionChange": WidgetDefinition;
    }
    interface HTMLVisWidgetPropertyElement extends Components.VisWidgetProperty, HTMLStencilElement {
        addEventListener<K extends keyof HTMLVisWidgetPropertyElementEventMap>(type: K, listener: (this: HTMLVisWidgetPropertyElement, ev: VisWidgetPropertyCustomEvent<HTMLVisWidgetPropertyElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLVisWidgetPropertyElementEventMap>(type: K, listener: (this: HTMLVisWidgetPropertyElement, ev: VisWidgetPropertyCustomEvent<HTMLVisWidgetPropertyElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLVisWidgetPropertyElement: {
        prototype: HTMLVisWidgetPropertyElement;
        new (): HTMLVisWidgetPropertyElement;
    };
    interface HTMLVisWidgetsElementEventMap {
        "layoutChange": WidgetLayout;
    }
    interface HTMLVisWidgetsElement extends Components.VisWidgets, HTMLStencilElement {
        addEventListener<K extends keyof HTMLVisWidgetsElementEventMap>(type: K, listener: (this: HTMLVisWidgetsElement, ev: VisWidgetsCustomEvent<HTMLVisWidgetsElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLVisWidgetsElementEventMap>(type: K, listener: (this: HTMLVisWidgetsElement, ev: VisWidgetsCustomEvent<HTMLVisWidgetsElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLVisWidgetsElement: {
        prototype: HTMLVisWidgetsElement;
        new (): HTMLVisWidgetsElement;
    };
    interface HTMLElementTagNameMap {
        "vis-add-widget": HTMLVisAddWidgetElement;
        "vis-map": HTMLVisMapElement;
        "vis-map-selection": HTMLVisMapSelectionElement;
        "vis-placement": HTMLVisPlacementElement;
        "vis-root": HTMLVisRootElement;
        "vis-widget": HTMLVisWidgetElement;
        "vis-widget-property": HTMLVisWidgetPropertyElement;
        "vis-widgets": HTMLVisWidgetsElement;
    }
}
declare namespace LocalJSX {
    interface VisAddWidget {
        "onAdded"?: (event: VisAddWidgetCustomEvent<WidgetDefinition>) => void;
        "position": WidgetPosition;
    }
    interface VisMap {
        "basemap"?: string | undefined;
        "isPreview"?: boolean;
        "itemId"?: string | undefined;
        "mapView"?: ArcGISMapView | undefined;
        "onLayoutChange"?: (event: VisMapCustomEvent<WidgetLayout>) => void;
        "widgetLayout": WidgetLayout;
    }
    interface VisMapSelection {
        "baseMap": BaseMap;
        "onBaseMapSelected"?: (event: VisMapSelectionCustomEvent<BaseMap>) => void;
    }
    interface VisPlacement {
        "mapView": ArcGISMapView;
        "position": WidgetPosition;
    }
    interface VisRoot {
    }
    interface VisWidget {
        "definition": WidgetDefinition;
        "isEditing"?: boolean;
        "isPreview"?: boolean;
        "mapView": ArcGISMapView;
        "onFinishEditing"?: (event: VisWidgetCustomEvent<WidgetDefinition | null>) => void;
        "onStartEditing"?: (event: VisWidgetCustomEvent<void>) => void;
    }
    interface VisWidgetProperty {
        "definition": WidgetDefinition;
        "onDefinitionChange"?: (event: VisWidgetPropertyCustomEvent<WidgetDefinition>) => void;
        "propertyDefinition": WidgetProperty;
    }
    interface VisWidgets {
        "isPreview"?: boolean;
        "mapView": ArcGISMapView;
        "onLayoutChange"?: (event: VisWidgetsCustomEvent<WidgetLayout>) => void;
        "widgetLayout": WidgetLayout;
    }
    interface IntrinsicElements {
        "vis-add-widget": VisAddWidget;
        "vis-map": VisMap;
        "vis-map-selection": VisMapSelection;
        "vis-placement": VisPlacement;
        "vis-root": VisRoot;
        "vis-widget": VisWidget;
        "vis-widget-property": VisWidgetProperty;
        "vis-widgets": VisWidgets;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "vis-add-widget": LocalJSX.VisAddWidget & JSXBase.HTMLAttributes<HTMLVisAddWidgetElement>;
            "vis-map": LocalJSX.VisMap & JSXBase.HTMLAttributes<HTMLVisMapElement>;
            "vis-map-selection": LocalJSX.VisMapSelection & JSXBase.HTMLAttributes<HTMLVisMapSelectionElement>;
            "vis-placement": LocalJSX.VisPlacement & JSXBase.HTMLAttributes<HTMLVisPlacementElement>;
            "vis-root": LocalJSX.VisRoot & JSXBase.HTMLAttributes<HTMLVisRootElement>;
            "vis-widget": LocalJSX.VisWidget & JSXBase.HTMLAttributes<HTMLVisWidgetElement>;
            "vis-widget-property": LocalJSX.VisWidgetProperty & JSXBase.HTMLAttributes<HTMLVisWidgetPropertyElement>;
            "vis-widgets": LocalJSX.VisWidgets & JSXBase.HTMLAttributes<HTMLVisWidgetsElement>;
        }
    }
}
