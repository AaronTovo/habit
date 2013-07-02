'use strict';

/* Filters - change the way the data is displayed in your page */

angular.module('habitApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
