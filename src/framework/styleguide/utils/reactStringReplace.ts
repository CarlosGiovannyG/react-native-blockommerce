import isRegExp from 'lodash.isregexp';
import escapeRegExp from 'lodash.escaperegexp';
import isString from 'lodash.isstring';
import flatten from 'lodash.flatten';

/**
 * Given a string, replace every substring that is matched by the `match` regex
 * with the result of calling `fn` on matched substring. The result will be an
 * array with all odd indexed elements containing the replacements. The primary
 * use case is similar to using String.prototype.replace except for React.
 *
 * React will happily render an array as children of a react element, which
 * makes this approach very useful for tasks like surrounding certain text
 * within a string with react elements.
 *
 * Example:
 * matchReplace(
 *   'Emphasize all phone numbers like 884-555-4443.',
 *   /([\d|-]+)/g,
 *   (number, i) => <strong key={i}>{number}</strong>
 * );
 * // => ['Emphasize all phone numbers like ', <strong>884-555-4443</strong>, '.'
 *
 * @param {string} str
 * @param {regexp|str} match Must contain a matching group
 * @param {function} fn
 * @return {array}
 */
function replaceString(str: string, match: string, fn) {
  let curCharStart = 0;
  let curCharLen = 0;

  if (str === '') {
    return str;
  } else if (!str || !isString(str)) {
    throw new TypeError(
      'First argument to react-string-replace#replaceString must be a string'
    );
  }

  let re: string | RegExp = match;

  if (!isRegExp(re)) {
    re = new RegExp('(' + escapeRegExp(re) + ')', 'gi');
  }

  const result = str.split(re);

  // Apply fn to all odd elements
  for (let i = 1, length = result.length; i < length; i += 2) {
    curCharLen = result[i].length;
    curCharStart += result[i - 1].length;
    result[i] = fn(result[i], i, curCharStart);
    curCharStart += curCharLen;
  }

  return result;
}

export default function reactStringReplace(source, match, fn) {
  if (!Array.isArray(source)) source = [source];

  return flatten(
    source.map(function (x) {
      return isString(x) ? replaceString(x, match, fn) : x;
    })
  );
}
