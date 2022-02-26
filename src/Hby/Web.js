// getLocation :: Task String
exports.getLocation = () => {
  return new Promise((res, rej) => {
    res(window.location.href);
  });
};
