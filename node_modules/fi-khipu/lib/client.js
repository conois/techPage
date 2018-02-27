'use strict';

/**
 * api-client module.
 * @module lib/api-client
 * @see module:lib/configuration
 * @see module:lib/api-exception
 */

const KhipuConfiguration = require('./configuration');
const KhipuException = require('./exception');

const methods = require('./constants/methods');
const request = require('request');
const crypto = require('crypto');
const utils = require('./utils');
const is = require('is_js');
const qs = require('qs');

class KhipuClient {

  constructor(config) {
    if (!(config instanceof KhipuConfiguration)) {
      config = KhipuConfiguration.getDefault();
    }

    this.config = config;
  }

  /**
   * Gets the API key with prefix if set.
   *
   * @param  {String} apiKeyIdentifier API key name to retrieve..
   *
   * @return {String}
   */
  getApiKeyWithPrefix(apiKeyIdentifier) {
    var prefix = this.config.getApiKeyPrefix(apiKeyIdentifier);
    var apiKey = this.config.getApiKey(apiKeyIdentifier);

    if (prefix && apiKey) {
      return prefix + ' ' + apiKey;
    }

    return apiKey;
  }

  /**
   * Performs the API HTTP request.
   *
   * @param {String} resourcePath path to method endpoint.
   * @param {String} method method to call.
   * @param {Array} queryParams parameters to be place in query URL.
   * @param {Array} postData parameters to be placed in POST body.
   * @param {Array} headerParams parameters to be place in request header.
   * @param {String} responseType expected response type of the endpoint.
   * @param {Function} callback The callback function.
   */
  request(options, callback) {
    /* Normalize headers */
    if (options.headers) {
      /* Place all default configuration headers into options headers */
      for (var key in this.config.defaultHeaders) {
        if (!options.headers[key] && this.config.defaultHeaders[key]) {
          options.headers[key] = this.config.defaultHeaders[key];
        }
      }
    } else {
      options.headers = this.config.defaultHeaders;
    }

    /* Set request URL */
    options.baseUrl = this.config.host;

    /* Set timeout */
    if (this.config.requestTimeout > 0) {
      options.timeout = Math.round(this.config.requestTimeout * 1000);
    }

    /* Set SSL verification option */
    options.strictSSL = !!this.config.sslVerification;

    /* Ensure a correct request method */
    if (!options.method) {
      throw new KhipuException("Method cannot be empty!");
    }

    if (!methods.isValid(options.method)) {
      throw new KhipuException("Method is not recognized!", options.method);
    }

    /* Set user agent */
    options.headers['User-Agent'] = this.config.userAgent;

    /* Set request debugging */
    request.debug = !!this.config.debug;

    var hash = crypto.createHmac('sha256', this.config.secret);

    hash.update(options.method + '&' + encodeURIComponent(options.baseUrl + options.uri));

    /* Add query string parameters to the hash */
    if (is.object(options.qs)) {
      options.qs = utils.sortObject(options.qs);
      hash.update('&' + qs.stringify(options.qs));
    }

    /* Add form parameters to the hash */
    if (is.object(options.form)) {
      options.form = utils.sortObject(options.form);
      hash.update('&' + qs.stringify(options.form));
    }

    options.headers.Authorization = this.config.receiverId + ':' + hash.digest('hex');

    /* Make the request */
    request(options, function (err, res, body) {
      if (err) {
        var code = res ? res.statusCode : 'NOCODE';
        var headers = res ? res.headers : {};

        return callback(new KhipuException(err.message, code, headers, body));
      }

      if (body) {
        try {
          body = JSON.parse(body);
        } catch (ex) {
          return callback(new KhipuException("Malformed response body!", ex.message, res.headers, body));
        }

        if (res.statusCode < 200 || res.statusCode > 299) {
          return callback(new KhipuException(body.message, res.statusCode, res.headers, body));
        }
      }

      callback(err, body);
    });
  }

}

module.exports = KhipuClient;
