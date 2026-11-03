export default function memoize(func) {
  let computedData = {};

  return function memoizedFunction(input) {
    const key = (typeof input === 'string') ? `string${input}` : `numeric${input}`;
    const cacheVal = computedData[key];
    if (cacheVal) {
      return cacheVal;
    }
    const result = func(input);
    computedData[key] = result;
    return result;
  };
}