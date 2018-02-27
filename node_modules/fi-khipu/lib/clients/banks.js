'use strict';

/**
 * banks module.
 * @module lib/client/banks
 * @see module:lib/configuration
 * @see module:lib/api-exception
 * @see module:lib/api-client
 */

const KhipuException = require('../exception');
const KhipuClient = require('../client');

const methods = require('../constants/methods');
const errors = require('../constants/errors');
const is = require('is_js');

class KhipuBanks {

  constructor(client) {
    this.client = client || new KhipuClient();
  }

  /**
   * Retrieves banks list.
   */
  list(callback) {
    if (is.not.function(callback)) {
      var err = new KhipuException("The callback must be a [Function]!", errors.VALIDATION);
      return callback(err);
    }

    var options = {
      method: methods.GET,
      uri: '/banks'
    };

    this.client.request(options, function (err, body) {
      if (err) {
        return callback(err);
      }

      if (body && Array.isArray(body.banks)) {
        return callback(null, body.banks);
      }

      callback(null, body);
    });
  }

}

module.exports = KhipuBanks;
