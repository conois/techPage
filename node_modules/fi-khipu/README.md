# Fi Khipu
Khipu payments API client for Node.js applications.

## Installation

```sh
npm install --save fi-khipu
```

## Usage

```js
var khipu = require('fi-khipu');
```

### Configuration
This module must be configured with your receiver ID and secret before using it:

```js
khipu.configure(receiverId, secret);
```

Any other configuration options can be done directly to the `config` property:

```js
khipu.config.sslVerification = false;
```

**A list with full configuration options will be added soon.**

### Simple usage
This module exposes convenient methods to perform the API calls:

#### List banks
This method is called with just a callback `Function` that will receive a `KhipuException` custom error object if any and a `bank` `Array` if any:

```js
khipu.listBanks(function callback(err, banks) {
  if (err) {
    throw err;
  }

  //...
});
```

#### Create a new payment
This method must be called with the payment `Object` and a callback `Function` that will receive a `KhipuException` custom error if any and the created payment information if any:

```js
var payment = {
  subject: 'Payment subject',
  amount: 100
  //...
};

khipu.createPayment(payment, function callback(err, payment) {
  if (err) {
    throw err;
  }

  //...
});
```

#### Get a payment by its ID
This method must be called with the payment ID `String` and a callback `Function` that will receive a `KhipuException` custom error if any and the requested payment information if any:
```js
var paymentId = 'Aa1...Jw1';

khipu.getPaymentById(paymentId, function (err, payment) {
  if (err) {
    throw err;
  }

  //...
});
```

#### Get a payment by its notification token
This method must be called with the payment's notification token `String` and a callback `Function` that will receive a `KhipuException` custom error if any and the requested payment information if any:
```js
var notificationToken = 'Aa1bB2...KhqJw1';

khipu.getPaymentByNotificationToken(notificationToken, function (err, payment) {
  if (err) {
    throw err;
  }

  //...
});
```

#### Delete a payment by its ID
This method must be called with the payment ID `String` and a callback `Function` that will receive a `KhipuException` custom error if any and the deleted payment information if any:
```js
var paymentId = 'Aa1...Jw1';

khipu.deletePayment(paymentId, function (err, payment) {
  if (err) {
    throw err;
  }

  //...
});
```

#### Refund a payment by its ID
This method must be called with the payment ID `String` and a callback `Function` that will receive a `KhipuException` custom error if any and the refunded payment information if any:
```js
var paymentId = 'Aa1...Jw1';

khipu.refundPayment(paymentId, function (err, payment) {
  if (err) {
    throw err;
  }

  //...
});
```

### KhipuException custom error
This is an extended `Error` `Object` with the following additional properties:
* **notice**: A short version of the error message that does not exposes request data.
* **headers**: The associated array headers as an `Object` if possible.
* **body**: The request response body as an `Object` if possible.
* **code**: The request response code if available.

## Testing
To test this module you must first clone the repository as the `test` folder is excluded from `npm` installations. After you've cloned the repository you must create a `config.json` inside the `test` folder with your `receiverId` and `secret`:
```json
{
  "receiverId": 10101,
  "secret": "30519b...d85c51"
}
```
This file is git-ignored to keep this data safe.

Each test will generate a `test/tests.log` file with additional information on the tests. This file is deleted and created again on each test.
