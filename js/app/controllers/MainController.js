function MainController($scope) {
  $scope.temporality = {
    time: '15:51',
    year: '2016',
    month: 'March',
    day: '13'
  };
}

angular
  .module('app')
  .controller('MainController', MainController);
