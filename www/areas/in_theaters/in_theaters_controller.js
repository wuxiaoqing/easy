angular.module('in_theaters.controller', ['in_theaters.service'])
  .controller('InTheatersCtrl', [
    '$scope',
    'GlobalVariable',
    'InTheatersFty',
    '$stateParams',
    function ($scope, GlobalVariable,InTheatersFty,$stateParams) {
      $scope.title = GlobalVariable.PARTNAME[0];
      $scope.subjects = [];
      $scope.title = 'easy';
      $scope.message = '';

      var promise = InTheatersFty.movieData();
       promise.then(function(result){
          $scope.subjects = result.subjects;
          $scope.title= result.title;
       }).catch(function(error){
        throw new error;
       })



    }
  ])

