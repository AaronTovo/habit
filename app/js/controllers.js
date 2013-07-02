'use strict';

/* Controllers - setup any model objects that the views need, in our case 'habits' and such
               - $scope holds the objects that are available to both the view and controller.
*/

angular.module('habitApp.controllers', ['habitApp.services']).

  // list params in quotes. this array w/params is not absolutely necessary but adding the function without the array will
  controller('habitListCtrl', ['$scope', '$location', 'habitStorage', function($scope, $location, habitStorage) {
    var habits = $scope.habits = habitStorage.get();
    $scope.newHabit = '';

    console.log('test in list ctrl');

    $scope.addHabit = function() {
      console.log('test in addhabit');

      var newHabit = $scope.newHabit.trim();
      if (!newHabit.length) {
        return;
      }
      $scope.habits.push({
        name: newHabit
      });
      habitStorage.put(habits);
      $scope.newHabit = '';
    }

  }])
  .controller('habitDetailCtrl', ['$scope', '$routeParams', 'habitStorage', function($scope, $routeParams, habitStorage) {
    $scope.habits = habitStorage.get();

    console.log('test in detail ctrl with habits = ' + $scope.habits[0].name + ' rp = ' + $routeParams.habitName);
  }]);