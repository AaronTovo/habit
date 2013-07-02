'use strict';

/* Services
   code that you want to re-use or that you want to abstract from the controller which communicates directly with the view.

   For service() v factory() v value() v constant() see http://iffycan.blogspot.com/2013/05/angular-service-or-factory.html
   I THINK that...
     A factory creates an object w $get() defined as the 2nd param - that ctor is put in _providerCache and invoked each time
     A service adds an instance of the class to _providerCache and that instance is re-used each time like a singleton.
*/


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('habitApp.services', [])

.value('version', '0.2')

  /**
   * Services that persists and retrieves habits from localStorage
   * NOTE: "Factory" is just a label given to any function that returns a new instance of an object.
   */
.factory('habitStorage', function () {
  var restFuncs = {};

  var STORAGE_ID = 'habit-app-test';

  restFuncs = {
    get : function() {
      return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    },
    put : function(habits) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(habits));
    }
  }

  return restFuncs;
});
