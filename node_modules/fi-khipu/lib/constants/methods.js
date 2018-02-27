'use strict';

var methods = ['OPTIONS', 'DELETE', 'PATCH', 'HEAD', 'POST', 'GET', 'PUT'];

function define(method) {
  Object.defineProperty(module.exports, method, {
    value: method,
    enumerable: true,
    writable: false,
    configurable: false
  });
}

methods.forEach(define);

module.exports.isValid = function isValid(method) {
  return methods.indexOf(method) !== -1;
};
