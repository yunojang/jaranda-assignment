import { userListStorage } from 'store';

export function isInclude(type, value) {
  const exp = { 'number': /\d/, 'string': /[A-Za-z]/, 'special': /[!?@#$%^&*()=;]/ }

  if (exp[type] === undefined) {
    return;
  }

  return exp[type].test(value);
}

export function onlyNumber(value) {
  const exp = /^\d{0,}$/;

  return exp.test(value);
}

export function minLen(count, value) {
  return value.length >= count;
}

export function maxLen(count, value) {
  return value.length <= count;
}

export function validPassword(value) {
  return isInclude('number', value) && isInclude('string', value) && isInclude('special', value) && minLen(8, value)
}

export function validCardSection(value) {
  return onlyNumber(value) && maxLen(4, value);
}

export function validCardNumber(value) {
  return onlyNumber && value.length === 16;
}

export function existUsername(name) {
  const list = userListStorage.load();
  return list.some(item=>item.userName === name);
}