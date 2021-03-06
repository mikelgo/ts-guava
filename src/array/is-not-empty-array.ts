import { isNotArray } from './is-not-array';
import { isArray } from './is-array';

/**
 * Checks if an array is not empty
 * @param arg - array which should be checked
 */
export function isNotEmptyArray<T>(arg: T[]): boolean {
  if (isNotArray(arg)) {
    throw new Error('Argument is not an array.');
  }
  return isArray(arg) && arg.length > 0;
}
