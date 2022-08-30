function getDescendantProp(obj: any, desc: any) {
  var arr = desc.split('.');
  while (arr.length) {
    obj = obj[arr.shift()];
  }
  return obj;
}

const addVarToString = (match: string, item: any) =>
  item[match.replace('{', '').replace('}', '')];
const keysRegEx = /\{(.*?)\}/gm;

const replaceStringForVars = (str: string) =>
  str.replace(keysRegEx, (match: string) => addVarToString(match, palette));

//
var propPath = replaceStringForVars(`primary.{type}`);
var result = getDescendantProp(palette, propPath);
