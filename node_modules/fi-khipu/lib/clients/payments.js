'use strict';

/**
 * payments module.
 * @module lib/client/banks
 * @see module:lib/configuration
 * @see module:lib/api-exception
 * @see module:lib/api-client
 */

const KhipuException = require('../exception');
const KhipuClient = require('../client');

const currencies = require('../constants/currencies');
const methods = require('../constants/methods');
const errors = require('../constants/errors');
const is = require('is_js');

class KhipuPayments {

  constructor(client) {
    this.client = client || new KhipuClient();
  }

  /**
   * Retrieves a payment by its notification token.
   */
  getByNotificationToken(token, callback) {
    var err;

    if (is.not.string(token)) {
      err = new KhipuException("The notification token must be a [String] or an [Array]!", errors.VALIDATION);
      return callback(err);
    }

    if (token.length !== 64) {
      err = new KhipuException("The notification token must have 64 characters!", errors.VALIDATION);
      return callback(err);
    }

    if (is.not.function(callback)) {
      err = new KhipuException("The callback must be a [Function]!", errors.VALIDATION);
      return callback(err);
    }

    var options = {
      method: methods.GET,
      uri: '/payments',
      qs: {
        notification_token: token
      }
    };

    this.client.request(options, callback);
  }

  /**
   * Retrieves a payment by its ID.
   */
  getById(id, callback) {
    var err;

    if (is.not.string(id)) {
      err = new KhipuException("The payment ID must be a [String]!", errors.VALIDATION);
      return callback(err);
    }

    if (!id.length) {
      err = new KhipuException("Invalid ID length!", errors.VALIDATION);
      return callback(err);
    }

    if (is.not.function(callback)) {
      err = new KhipuException("The callback must be a [Function]!", errors.VALIDATION);
      return callback(err);
    }

    var options = {
      method: methods.GET,
      uri: '/payments/' + encodeURIComponent(id)
    };

    this.client.request(options, callback);
  }

  /**
   * Creates a new payment.
   */
  create(payment, callback) {
    var err;

    if (is.not.object(payment)) {
      err = new KhipuException("The payment paramenter can only be an [Object]!", errors.VALIDATION);
      return callback(err);
    }

    payment.currency = currencies.CLP;

    if (is.not.string(payment.subject)) {
      err = new KhipuException("The payment subject can only be a [String]!", errors.VALIDATION);
      return callback(err);
    }

    if (is.not.string(payment.currency)) {
      err = new KhipuException("The payment currency can only be a [String] on ISO-4217 format!", errors.VALIDATION);
      return callback(err);
    }

    if (is.not.number(payment.amount)) {
      err = new KhipuException("The payment amount can only be a [Number]!", errors.VALIDATION);
      return callback(err);
    }

    if (is.not.function(callback)) {
      err = new KhipuException("The callback must be a [Function]!", errors.VALIDATION);
      return callback(err);
    }

    var options = {
      method: methods.POST,
      uri: '/payments',
      form: payment
    };

    this.client.request(options, callback);
  }

  /**
   * Deletes a payment by its ID.
   */
  delete(id, callback) {
    var err;

    if (is.not.string(id)) {
      err = new KhipuException("The payment ID must be a [String]!" , errors.VALIDATION);
      return callback(err);
    }

    if (!id.length) {
      err = new KhipuException("Invalid ID length!", errors.VALIDATION);
      return callback(err);
    }

    if (is.not.function(callback)) {
      err = new KhipuException("The callback must be a [Function]!", errors.VALIDATION);
      return callback(err);
    }

    var options = {
      method: methods.DELETE,
      uri: '/payments/' + encodeURIComponent(id)
    };

    this.client.request(options, callback);
  }

  /**
   * Refunds a payment by its ID.
   */
  refund(id, callback) {
    var err;

    if (is.not.string(id)) {
      err = new KhipuException("The payment ID must be a [String]!", errors.VALIDATION);
      return callback(err);
    }

    if (!id.length) {
      err = new KhipuException("Invalid ID length!", errors.VALIDATION);
      return callback(err);
    }

    if (is.not.function(callback)) {
      err = new KhipuException("The callback must be a [Function]!", errors.VALIDATION);
      return callback(err);
    }

    var options = {
      method: methods.POST,
      uri: '/payments/' + encodeURIComponent(id) + '/refunds'
    };

    this.client.request(options, callback);
  }

}

module.exports = KhipuPayments;
