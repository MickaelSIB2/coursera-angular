(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunch = '';
    $scope.message = '';
    $scope.colour = '';

    $scope.checkIfTooMuch = function () {
      var aLunchItems = $scope.lunch.split(',');
      // Removing empty items in the list
      aLunchItems.forEach(function (item, index) {
        if (item.trim().length === 0) {
          aLunchItems.splice(index, 1);
        };
      });
      // Calculating the length and updating the message
      var lunchSize = aLunchItems.length;
      if (lunchSize === 0) {
        $scope.colour = 'red';
        $scope.message = 'Please enter data first';
      } else {
        $scope.colour = 'green';
        $scope.message = lunchSize <= 3 ?
          'Enjoy!' : 'Too much!';
      }

      return true;
   }
 }

})();
