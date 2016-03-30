'use strict';
// _.startCase
import startCase from 'lodash.startcase';

export default function () {
  return function (input) {
    return startCase(input);
  }
}
