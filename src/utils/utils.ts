import { IR, RA } from './types';

// Find a value in an array, and return it's mapped variant
export function mappedFind<ITEM, RETURN_TYPE>(
  array: RA<ITEM>,
  callback: (item: ITEM, index: number) => RETURN_TYPE | undefined
): RETURN_TYPE | undefined {
  let value = undefined;
  array.some((item, index) => {
    value = callback(item, index);
    return value !== undefined;
  });
  return value;
}

/** Create a new array with a given item replaced */
export const replaceItem = <T>(
  array: RA<T>,
  index: number,
  newItem: T
): RA<T> =>
  array[index] === newItem
    ? array
    : [
        ...array.slice(0, index),
        newItem,
        ...(index === -1 ? [] : array.slice(index + 1)),
      ];

/** Create a new array without a given item */
export const removeItem = <T>(array: RA<T>, index: number): RA<T> =>
  index < 0
    ? [...array.slice(0, index - 1), ...array.slice(index)]
    : [...array.slice(0, index), ...array.slice(index + 1)];

/**
 * Create a new object with given keys removed
 */
export const removeKey = <
  DICTIONARY extends IR<unknown>,
  OMIT extends keyof DICTIONARY
>(
  object: DICTIONARY,
  ...toOmit: RA<OMIT>
): Omit<DICTIONARY, OMIT> =>
  // @ts-expect-error
  Object.fromEntries(
    Object.entries(object).filter(([key]) => !toOmit.includes(key as OMIT))
  );

export function error(message: string): never {
  throw new Error(message);
}

/** Generate a sort function for Array.prototype.sort */
export const sortFunction =
  <T, V extends Date | boolean | number | string | null | undefined>(
    mapper: (value: T) => V,
    reverse = false
  ): ((left: T, right: T) => -1 | 0 | 1) =>
  (left: T, right: T): -1 | 0 | 1 => {
    const [leftValue, rightValue] = reverse
      ? [mapper(right), mapper(left)]
      : [mapper(left), mapper(right)];
    if (leftValue === rightValue) return 0;
    return typeof leftValue === 'string' && typeof rightValue === 'string'
      ? (leftValue.localeCompare(rightValue) as -1 | 0 | 1)
      : (leftValue ?? 0) > (rightValue ?? 0)
      ? 1
      : -1;
  };
