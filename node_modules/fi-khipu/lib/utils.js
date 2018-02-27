'use strict';

/**
 * serializer module.
 * @module lib/serializer
 */

module.exports = {

  /**
   * Alphabetically sorts every property in an object and in any array values.
   */
  sortObject: function sortObject(object) {
    var keys = Object.keys(object);
    var sorted = {};

    var options = {
      sensitivity: 'base'
    };

    function compare(a, b) {
      return a.localeCompare(b, options);
    }

    keys.sort(compare);

    for (var index in keys) {
      if (keys[index]) {
        var key = keys[index];

        if (Array.isArray(object[key])) {
          sorted[key] = object[key].sort(compare);
        } else if (typeof object[key] === 'object') {
          sorted[key] = sortObject(object[key]);
        } else {
          sorted[key] = object[key];
        }
      }
    }

    return sorted;
  }

};
