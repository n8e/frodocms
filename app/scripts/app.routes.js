(function() {
  angular.module('appRoutes', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html'
        })
        .when('/signup', {
          templateUrl: 'views/signup.html'
        })
        .when('/login', {
          templateUrl: 'views/login.html'
        })
        .when('/document', {
          templateUrl: 'views/user/document.html'
        })
        .when('/logout', {
          templateUrl: 'views/logout.html'
        })
        .when('/profile', {
          templateUrl: 'views/user/profile.html'
        })
        .when('/myDocuments', {
          templateUrl: 'views/user/view_my_documents.html',
          controller: 'AllDocumentsController',
          controllerAs: 'document',
          resolve: {
            documents: function(Document) {
              return Document.allDocuments();
            }
          }
        });
      $locationProvider.html5Mode(true);
    });
})();
