// var adminUrl = "http://localhost/lllbackend/";
var adminUrl = "http://wohlig.co.in/lllbackend/";
// var adminUrl = "http://localhost/lllbackend/";
// var adminUrl = "http://192.168.0.122/lllbackend/";
var adminJson = adminUrl+"index.php/json/";

angular.module('starter.services', [])

.factory('MyServices', function($http) {


    return {
       getheader: function(value) {
        value = parseInt(value);
        var return2 = "";
        switch (value) {
          case 1:
            this.headermenu = "views/page-header/lovehead.html";
            return2 = "put-me-love";
            break;
          case 2:
            this.headermenu = "views/page-header/liehead.html";
            return2 = "put-me-lie";
            break;
          case 3:
            this.headermenu = "views/page-header/lusthead.html";
            return2 = "put-me-lust";
            break;
          case 4:
            this.headermenu = "views/page-header/confessionhead.html";
            return2 = "put-me-confess";
            break;
          case 5:
            this.headermenu = "views/page-header/sexperthead.html";
            return2 = "put-me-sexpert";
            break;
          case 6:
            this.headermenu = "views/page-header/querieshead.html";
            return2 = "put-me-query";
            break;
          case 7:
            this.headermenu = "views/page-header/goopshead.html";
            return2 = "put-me-goops";
            break;
          default:
            this.headermenu = "views/page-header/lovehead.html";
            return2 = "put-me-love";
            break;
        }
        return return2;
      },
      getnav: function() {
        return navigation;
      },
      getCategories: function(callback) {
        $http.get(adminJson + 'getCategories').success(callback);
      },
      getArticle: function(id,callback) {
        $http.get(adminJson + 'getArticle?id='+id).success(callback);
      },
      getCategoryArticles: function(id,callback) {
        $http.get(adminJson + 'getCategoryArticles?id='+id).success(callback);
      },
      sendSubsribe:function(email,callback) {
        $http.get(adminJson + 'addSubscriber?email='+email).success(callback);
      },
      makeactive: function(menuname) {
        for (var i = 0; i < navigation.length; i++) {
          if (navigation[i].name == menuname) {
            navigation[i].classis = "active";
          } else {
            navigation[i].classis = "";
          }
        }
        return menuname;
      },
    };
});
