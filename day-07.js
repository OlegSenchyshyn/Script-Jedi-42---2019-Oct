// https://www.codewars.com/kata/error-throwing-error-handling-number-2/train/javascript

function validateMessage(msg) {
  if (msg === null) {
    throw ReferenceError('Message is null!');
  }
  if (msg === '' || msg.length > 255) {
    throw RangeError(`Message contains ${msg.length} characters!`);
  }
  if (typeof msg !== 'string') {
    throw TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  }
  if (msg.includes('<') && msg.includes('>')) {
    return false;
  } else {
    return true;
  }
}
