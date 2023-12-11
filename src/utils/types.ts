// Record
export type R<V> = Record<string, V>;
// Immutable record
export type IR<V> = Readonly<Record<string, V>>;
// Immutable record of any type
export type RR<K extends string | number | symbol, V> = Readonly<Record<K, V>>;
// Immutable Array
export type RA<V> = readonly V[];

export type GetSet<T> = readonly [T, (value: T) => void];
export type GetOrSet<T> = readonly [
  T,
  (value: T | ((oldValue: T) => T)) => void
];

export type ValueOf<T> = T[keyof T];

// eslint-disable-next-line functional/prefer-readonly-type
export type Writable<T> = {
  -readonly [K in keyof T]: T[K];
};

/**
 * Cast type to writable. Equivalent to doing "as Writable<T>", except this
 * way, don't have to manually specify the generic type
 */
export const writable = <T>(value: T): Writable<T> => value;

/** Filter undefined items out of the array */
export const isDefined = <T>(value: T | undefined): value is T =>
  value !== undefined;
