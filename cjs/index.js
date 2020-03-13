'use strict';
module.exports = _ => ({
  get: _.get.bind(_),
  set(key, value) {
    _.set(key, value);
    return value;
  }
});
