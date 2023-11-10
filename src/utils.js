export const debounce = (func, delay) => {
  let timeoutId;

  return (...args) => {
    const context = this;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};