'use strict';

module.exports = {
  /* Inner classes */
  Configuration: require('./configuration'),
  Exception: require('./exception'),
  Client: require('./client'),

  /* Clients */
  clients: {
    Payments: require('./clients/payments'),
    Banks: require('./clients/banks')
  },

  /* Constants */
  CURRENCIES: require('./constants/currencies'),
  METHODS: require('./constants/methods'),
  ERRORS: require('./constants/errors'),

  /* Convenience methods */

  /**
   * Sets the default configuration to the client.
   *
   * @param {Number} receiver - Your Khipu receiver ID.
   * @param {String} secret - Your Khipu secret key.
   */
  configure: function configure(receiver, secret) {
    this.Configuration.setDefault(new this.Configuration(receiver, secret));
    this.config = this.Configuration.getDefault();
  },

  /**
   * Retrieves a list of the available banks.
   *
   * @param {Function} callback - The callback method.
   */
  listBanks: function listBanks(callback) {
    var client = new this.clients.Banks();
    client.list(callback);
  },

  /**
   * Creates a new payment.
   *
   * @param {Object} data - The payment fields.
   * @param {Function} callback - The callback method.
   */
  createPayment: function createPayment(data, callback) {
    var client = new this.clients.Payments();
    client.create(data, callback);
  },

  /**
   * Obtains a payment by its ID.
   *
   * @param {String} id - The payment ID.
   * @param {Function} callback - The callback method.
   */
  getPaymentById: function getPaymentById(id, callback) {
    var client = new this.clients.Payments();
    client.getById(id, callback);
  },

  /**
   * Obtains a payment by its notification token.
   *
   * @param {String} id - The payment ID.
   * @param {Function} callback - The callback method.
   */
  getPaymentByNotificationToken: function getPaymentByNotificationToken(token, callback) {
    var client = new this.clients.Payments();
    client.getByNotificationToken(token, callback);
  },

  /**
   * Refunds a payment by its ID.
   *
   * @param {String} id - The payment's ID.
   * @param {Function} callback - The callback method.
   */
  refundPayment: function refundPayment(id, callback) {
    var client = new this.clients.Payments();
    client.refund(id, callback);
  },

  /**
   * Deletes a payment by its ID.
   *
   * @param {String} id - The payment's ID.
   * @param {Function} callback - The callback method.
   */
  deletePayment: function deletePayment(id, callback) {
    var client = new this.clients.Payments();
    client.delete(id, callback);
  }
};
