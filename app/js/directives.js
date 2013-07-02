'use strict';

/* Directives - Directives let you specify how your page should be structured for the data available in a given scope.
   They manipulate the DOM.
   ngRepeat is the most common of these. Also ngShow and ngSwitch and ngClass.
   You can write your own directives such as appVersion below
*/


angular.module('habitApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
