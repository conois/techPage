'use strict';

var errors = ['VALIDATION'];

function define(error) {
  Object.defineProperty(module.exports, error, {
    value: error,
    enumerable: true,
    writable: false,
    configurable: false
  });
}

errors.forEach(define);
