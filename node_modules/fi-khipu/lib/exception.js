'use strict';

/**
 * api-exception module.
 * @module lib/api-exception
 */

const util = require('util');

const INDENT = '    ';

class KhipuException extends Error {

  constructor(message, code, headers, body) {
    var notice = message;

    message = '(' + (code || 0) + ') ' + message;

    if (headers) {
      message += '\n' + INDENT + 'Headers: ';

      try {
        message += JSON.stringify(headers, null, INDENT);
      } catch (e) {
        message += util.inspect(headers);
      }
    }

    if (body) {
      message += '\n' + INDENT + 'Body: ';

      try {
        message += JSON.stringify(body, null, INDENT);
      } catch (e) {
        message += util.inspect(body);
      }
    }

    super(message);

    this.name = 'Khipu Exception';
    this.headers = headers;
    this.notice = notice;
    this.code = code;
    this.body = body;
  }

}

module.exports = KhipuException;
