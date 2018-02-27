'use strict';

/**
 * configuration module.
 * @module lib/configuration
 */

var os = require('os');

const PACKAGE = require('../package.json');
const PLATFORM = os.platform() + ' ' + os.arch() + ' ' + os.release();
const API_VERSION = PACKAGE.apiVersion;
const VERSION = PACKAGE.version;
const NAME = PACKAGE.name;

var defaultConfiguration = null;

class KhipuConfiguration {

  constructor(receiverId, secret) {
    /**
     * Array to store API key(s).
     * @type {String[]}
     */
    this.apiKeys = [];

    /**
     * Array to store API prefix (e.g. Bearer).
     * @type {String[]}
     */
    this.apiKeyPrefixes = [];

    /**
     * HTTP basic authentication username.
     * @type {?String}
     */
    this.username = null;

    /**
     * HTTP basic authentication password.
     * @type {?String}
     */
    this.password = null;

    /**
     * Default API HTPP request headers.
     * @type {Object}
     */
    this.defaultHeaders = {};

    /**
     * Host URI.
     * @type {!String}
     */
    this.host = 'https://khipu.com/api/2.0';

    /**
     * HTTP request timeout in seconds. Defaults to 0 (no timeout).
     * @type {!Number}
     */
    this._requestTimeout = 0;

    /**
     * HTTP request user agent.
     * @type {!String}
     */
    this._userAgent = NAME + ' v' + VERSION + ', API v' + API_VERSION;

    /**
     * Debug method.
     * @type {Boolean}
     */
    this._debug = false;

    /**
     * Temp folder location. Defaults to the OS's temp folder.
     * @type string
     */
    this.tempFolderPath = os.tmpdir();

    /**
     * Indicates if SSL verification should be enabled (true) or disabled (false).
     *
     * This is useful if the host uses a self-signed SSL certificate.
     *
     * @type {Boolean}
     */
    this.sslVerification = true;

    /**
     * Stores the receiver ID.
     * @type {String}
     */
    this.receiverId = receiverId;

    /**
     * Stores the receiver's secret.
     * @type {String}
     */
    this.secret = secret;

  }

  /** Debug **/
  get debug() {
    return this._debug;
  }

  /**
   * Sets debug flag.
   *
   * @param {Boolean} debug Debug flag.
   *
   * @return {KhipuConfiguration}
   */
  set debug(debug) {
    if (typeof debug === 'function') {
      this._debug = debug;
      return;
    }

    if (typeof debug === 'boolean') {
      this._debug = console.log;
      return;
    }

    throw new Error('Debug must be a [Boolean] or [Function]!');
  }

  /** User Agent **/
  get userAgent() {
    return this._userAgent;
  }

  /**
   * Sets the API client's user agent.
   *
   * @param {String} userAgent The user agent of the API client.
   */
  set userAgent(value) {
    if (typeof value !== 'string') {
      throw new Error('User-Agent must be a string!');
    }

    this._userAgent = value;
  }

  /** Request Timeout **/
  get requestTimeout() {
    return this._requestTimeout;
  }

  /**
   * Sets the HTTP request timeout value.
   *
   * @param {Number} seconds Number of seconds before timing out. Set to 0 for no timeout.
   */
  set requestTimeout(value) {
    if (typeof value !== Number || value < 0) {
      throw new Error("Timeout value must in seconds and a non-negative number!");
    }

    this._requestTimeout = value;
  }

  /**
   * Sets API key.
   *
   * @param {String} apiKeyIdentifier API key identifier (authentication scheme).
   * @param {String} key API key or token.
   *
   * @return {KhipuConfiguration}
   */
  addApiKey(apiKeyIdentifier, key) {
    this.apiKeys[apiKeyIdentifier] = key;
  }

  /**
   * Gets API key or token.
   *
   * @param {String} apiKeyIdentifier API key identifier (authentication scheme).
   *
   * @return {String}
   */
  getApiKey(apiKeyIdentifier) {
    return this.apiKeys[apiKeyIdentifier];
  }

  /**
   * Sets the prefix for API key (e.g. Bearer).
   *
   * @param {String} apiKeyIdentifier API key identifier (authentication scheme).
   * @param {String} prefix API key prefix, e.g. Bearer.
   *
   * @return {KhipuConfiguration}
   */
  setApiKeyPrefix(apiKeyIdentifier, prefix) {
    this.apiKeyPrefixes[apiKeyIdentifier] = prefix;
  }

  /**
   * Gets API key prefix.
   *
   * @param {String} apiKeyIdentifier API key identifier (authentication scheme).
   *
   * @return {String}
   */
  getApiKeyPrefix(apiKeyIdentifier) {
    return this.apiKeyPrefixes[apiKeyIdentifier];
  }

  /**
   * Adds a default header.
   *
   * @param {String} headerName Header name (e.g. Token).
   * @param {String} headerValue Header value (e.g. 1z8wp3).
   *
   * @return {ApiClient}
   */
  addDefaultHeader(headerName, headerValue) {
    if (typeof headerName !== 'string') {
      throw new Error('Header name must be a string.');
    }

    this.defaultHeaders[headerName] = headerValue;
  }

  /**
   * Deletes a default header.
   *
   * @param {String} headerName The header to delete.
   *
   * @return {KhipuConfiguration}
   */
  deleteDefaultHeader(headerName) {
    delete this.defaultHeaders[headerName];
  }

  /**
   * Gets the current platform.
   *
   * @return {String}
   */
  static get platform() {
    return NAME + ' v' + VERSION + ', API v' + API_VERSION + ' @ ' + PLATFORM;
  }

  /**
   * Gets the default configuration instance.
   *
   * @return {KhipuConfiguration}
   */
  static getDefault() {
    if (!(defaultConfiguration instanceof KhipuConfiguration)) {
      defaultConfiguration = new KhipuConfiguration();
    }

    return defaultConfiguration;
  }

  /**
   * Sets the detault configuration instance.
   *
   * @param {KhipuConfiguration} config An instance of the KhipuConfiguration Class.
   */
  static setDefault(config) {
    if (!(config instanceof KhipuConfiguration)) {
      throw new Error('The config argument must be an instance of [KhipuConfiguration]');
    }

    defaultConfiguration = config;
  }

  /**
   * Gets essential report information for debugging.
   *
   * @return {String}
   */
  static toDebugReport() {
    return "Khipu Node.js SDK Debug Report:\n" +
      "  Platform: " + PLATFORM + "\n" +
      "  Node.js Version: " + process.version + "\n" +
      "  SDK API Version: " + API_VERSION + "\n" +
      "  Temp Folder Path: " + this.getDefault().tempFolderPath + "\n";
  }

}

module.exports = KhipuConfiguration;
