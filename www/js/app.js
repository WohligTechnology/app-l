// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.lust', {
    url: '/lust',
    views: {
      'menuContent': {
        templateUrl: 'templates/lust.html',
        controller: 'LoveCtrl'
      }
    }
  })
  .state('app.lie', {
    url: '/lie',
    views: {
      'menuContent': {
        templateUrl: 'templates/lie.html',
        controller: 'LoveCtrl'
      }
    }
  })
  .state('app.goops', {
    url: '/goops',
    views: {
      'menuContent': {
        templateUrl: 'templates/goops.html',
        controller: 'LoveCtrl'
      }
    }
  })
  .state('app.confessions', {
    url: '/confessions',
    views: {
      'menuContent': {
        templateUrl: 'templates/confessions.html',
        controller: 'LoveCtrl'
      }
    }
  })
  .state('app.love-quiery', {
    url: '/love-quiery',
    views: {
      'menuContent': {
        templateUrl: 'templates/love-quiery.html',
        controller: 'LoveQuieryCtrl'
      }
    }
  })
  .state('app.detail', {
    url: '/detail/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/detail.html',
        controller: 'DetailCtrl'
      }
    }
  })
  .state('app.sexpert', {
    url: '/sexpert',
    views: {
      'menuContent': {
        templateUrl: 'templates/sexpert.html',
        controller: 'LoveCtrl'
      }
    }
  })

  .state('app.love', {
      url: '/love',
      views: {
        'menuContent': {
          templateUrl: 'templates/love.html',
          controller: 'LoveCtrl'
        }
      }
    })
  .state('app.query-detail', {
      url: '/query-detail',
      views: {
        'menuContent': {
          templateUrl: 'templates/query-detail.html',
          controller: 'QueryDetailCtrl'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})
.filter('cut', function() {
  return function(value, wordwise, max, tail) {
    if (!value) return '';

    max = parseInt(max, 10);
    if (!max) return value;
    if (value.length <= max) return value;
    value = value.substr(0, max);
    if (wordwise) {
      var lastspace = value.lastIndexOf(' ');
      if (lastspace != -1) {
        value = value.substr(0, lastspace);
      }
    }

    return value + (tail || ' …');
  };
})
.filter('serverimage', function() {
  return function(image) {
    if (image && image !== null) {
      return adminUrl + "uploads/" + image;
    } else {
      return "img/default.png";
    }
  };
})
