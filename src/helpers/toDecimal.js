import isNumber from 'lodash/isNumber';
/**
 * 1234 | toDecimal
 * 12.34
 *
 * 1234 | toDecimal(0)
 * 12
 *
 * 1234 | toDecimal(1)
 * 34
 * @param {String}  str
 * @param {number|null} type 返回类型
 * @param {number} digits 小数位数
 * @return {string|*}
 */
const toDecimal = (str, type = null, digits = 2) => {
  if (!str) return str;
  str = String(str);
  let integer = str.substr(0, str.length - digits);
  if (!integer) integer = 0;
  if (type === 0) return integer;

  const decimal = str.substr(-digits, digits).padStart(digits, '0');
  if (type === 1) return decimal;

  if (type === 3 && str.length >= 7) return `${str / 1000000}万`;

  if (isNumber(type) && type >= 2) return +`${integer}.${decimal}`;

  return `${integer}.${decimal}`;
};

// eslint-disable-next-line no-extend-native
Number.prototype.toDecimal = function(type = null, digits = 2) {
  return toDecimal(this, type, digits);
};

