// getLocation :: Task Location
exports.getLocation = () => {
  return new Promise((res, rej) => {
    res(window.location);
  });
};

// getQuery :: Location -> Json
exports.getQuery = (location) => {
  var queryString = require("query-string");
  var parsed = queryString.parse(location.search);
  return parsed;
};
