var globalfunction = {};
angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicLoading) {
  // loader
  globalfunction.showLoading = function() {
    $ionicLoading.show({
      template: '<ion-spinner icon="android"></ion-spinner>'
    });
    $timeout(function() {
      $ionicLoading.hide();
    }, 5000);
  };
})

.controller('LoveCtrl', function($scope, $location, MyServices, $filter, $ionicLoading) {

    function getArticles(data) {
      // $scope.catColor = TemplateService.getheader(data.category.id);
      console.log(data);
      $scope.category = data.catgory;
      $scope.loveblog = data.article;
      _.each($scope.loveblog, function(n) {
        n.timestamp = moment(n.timestamp).toDate();
      });
      $scope.viewed = data.mostViewed;
      $ionicLoading.hide();
    }
    console.log($location.path());

    globalfunction.showLoading();
    switch ($location.path()) {
      case "/app/love":
        MyServices.getCategoryArticles(1, getArticles);
        console.log("Love");
        break;
      case "/app/lie":
        MyServices.getCategoryArticles(2, getArticles);
        console.log("Lie");
        break;
      case "/app/lust":
        MyServices.getCategoryArticles(3, getArticles);
        console.log("Lust");
        break;
      case "/app/confessions":
        MyServices.getCategoryArticles(4, getArticles);
        // $scope.template = TemplateService.changecontent("sexpert");
        console.log("confessions");
        break;
      case "/app/sexpert":
        MyServices.getCategoryArticles(5, getArticles);
        // $scope.template = TemplateService.changecontent("sexpert");
        console.log("sexpert");
        break;
      case "/app/queries":
        MyServices.getCategoryArticles(6, getArticles);
        $scope.template = TemplateService.changecontent("sexpert");
        console.log("queries");
        break;
      case "/app/goops":
        MyServices.getCategoryArticles(7, getArticles);
        console.log("goops");
        break;
    }
  })
  .controller('LieCtrl', function($scope, $location, MyServices, $filter) {

  })
  .controller('LustCtrl', function($scope, $location, MyServices, $filter) {

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
  .controller('HomeCtrl', function($scope, $stateParams, MyServices, $timeout, $ionicLoading) {
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
    // loader
    $scope.showloading = function() {
      $ionicLoading.show({
        template: '<ion-spinner class="spinner-positive"></ion-spinner>'
      });
      $timeout(function() {
        $ionicLoading.hide();
      }, 5000);
    };

  });
