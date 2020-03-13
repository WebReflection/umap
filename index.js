var umap = (function (exports) {
  'use strict';

  var index = (function (_) {
    return {
      get: _.get.bind(_),
      set: function set(key, value) {
        _.set(key, value);

        return value;
      }
    };
  });

  exports.default = index;

  return exports;

}({}).default);
