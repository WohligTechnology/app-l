angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  })
  .controller('LustCtrl', function($scope) {

  })
  .controller('LoveCtrl', function($scope) {

  })
  .controller('LieCtrl', function($scope) {

  })
  .controller('GoopsCtrl', function($scope) {

  })
  .controller('SexpertCtrl', function($scope) {

  })
  .controller('ConfessionsCtrl', function($scope) {

  })
  .controller('LoveQuieryCtrl', function($scope) {

  })
  .controller('DetailCtrl', function($scope) {

  })
  .controller('HomeCtrl', function($scope, $stateParams, MyServices, $timeout) {
  $scope.allCategory = [];

    function getArticles(data) {
      console.log(data.category.id);
      _.each(data.article, function(n) {
        n.timestamp2 = moment(n.timestamp).toDate();
      });
      $scope.allCategory[parseInt(data.category.id)] = data.article;
      console.log(data.article);
    }
    for (var i = 0; i < 7; i++) {
      $scope.allCategory.push([]);
      MyServices.getCategoryArticles(i + 1, getArticles);
    }
  });
