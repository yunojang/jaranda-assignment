export function samed(sample,value) {
  return sample === value;
}

export function isInclude(type,value) {
  const exp = {'number':/\d/,'string':/[A-Za-z]/, 'special':/[!?@#$%^&*()=;]/}

  if (exp[type] === undefined) {
    return;
  }
 
  return exp[type].test(value);
}

export function minLen(count,value) {
  return value.length >= count;
}

export function validPassword(value) {
  return isInclude('number',value) && isInclude('string',value) && isInclude('special',value) && minLen(8,value)
}