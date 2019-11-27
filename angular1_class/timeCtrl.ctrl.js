module.controller("timeCtrl", TimeCtrl)

// DI dependency injection - IOC
function TimeCtrl($scope, $rootScope) {

  $scope.id = ''
  $scope.name = ''
  $scope.ph = ''
  $scope.getClass = function () {
    if ($scope.id == '')
      return 'missing'
    return 'ok'
  }
}