export const throttle = (callback, wait) => {
  let waiting = true;

  return function () {
    if (waiting) {
      callback();
      waiting = false;
      setTimeout(() => {
        waiting = true;
      }, wait);
    }
  };
};

export const debounce = (callback, wait) => {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, wait);
  };
};
