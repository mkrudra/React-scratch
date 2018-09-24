export function clone(oldObject, newObject) {
  return { ...oldObject,
    ...newObject
  };
}
export function isEmpty(obj) {
  let isEmpty = false;
  const type = typeof obj;

  isEmpty = isEmpty || !obj;
  isEmpty = isEmpty || (type === 'undefined'); // if it is undefined
  isEmpty = isEmpty || (obj === null); // if it is null
  isEmpty = isEmpty || (type === 'string' && (obj === '')); // if the string is empty
  isEmpty = isEmpty || (obj === false || obj === 0); // if boolean value returns false
  isEmpty = isEmpty || (Array.isArray(obj) && obj.length === 0); // if array is empty
  isEmpty = isEmpty || (type === 'object' && Object.keys(obj).length === 0); // if object is empty

  return isEmpty;
}

export function isEmail(value) {
  return value.match(/^[a-zA-Z0-9!#$%&'*+\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/);
}

// check if the value is integer or float
export function isNumber(value, integerOnly = true) {
  if (integerOnly) {
    return value.match(/^\s*[+-]?\d+\s*$/);
  }

  return value.match(/^\s*[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/);
}

// check if the strinc contains alphabets (spaces) only
export function isAlphabet(value, allowSpaces = true) {
  if (allowSpaces) {
    return value.match(/^[a-zA-Z\s]+$/);
  }

  return value.match(/^[a-zA-Z]+$/);
}

export function getObjectValue(obj, key, defaultValue = null) {
  let enumerator = obj;
  let property = key;

  if (isEnumerable(enumerator) && keyExists(property, enumerator)) {
    return enumerator[property];
  }

  const dotLastIndex = property.lastIndexOf('.');

  if (dotLastIndex >= 0) {
    const withoutLastKey = property.substr(0, dotLastIndex);
    enumerator = getObjectValue(enumerator, withoutLastKey, defaultValue);
    property = property.substr(dotLastIndex + 1);
  }

  if (isEnumerable(enumerator)) {
    return (keyExists(property, enumerator) ? enumerator[property] : defaultValue);
  }
  return defaultValue;
}

export function isEnumerable(obj) {
  let isEnumerable = false;

  if (Array.isArray(obj) || (obj instanceof Object)) {
    isEnumerable = true;
  }

  return isEnumerable;
}

export const httpStatusCodes = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
}

export function getObjectValueIfEmpty(obj, key, defaultValue = null) {
  const value = getObjectValue(obj, key);

  if (isEmpty(value)) {
    return defaultValue;
  }
  return value;
}


export function keyExists(key, obj) {
  if ((Array.isArray(obj) && key in obj) ||
    (obj instanceof Object && Object.prototype.hasOwnProperty.call(obj, key))) {
    return true;
  }

  return false;
}

export function toBuffer(ab) {
  var buffer = new Buffer(ab.byteLength);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buffer.length; ++i) {
    buffer[i] = view[i];
  }
  return buffer;
}


export function checkValidity(value, rules) {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = !isEmpty(value) && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid
  }

  return isValid;
}