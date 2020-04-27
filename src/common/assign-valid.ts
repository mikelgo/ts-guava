import { DataTypes } from '../@types/data-types';
import { isValid } from './is-valid';
import { isArray, isNotArray } from '../array-utils';

export function assignValid(arg: any): any | void {
  // object
  if (typeof arg === DataTypes.object && isNotArray(arg)) {
    if (isValid(arg)) {
      return arg;
    } else {
      return void 0;
    }
  }
  // array
  if (typeof arg === DataTypes.object && isArray(arg)) {
    return arg;
  }
  // primitive
  return arg;
}
