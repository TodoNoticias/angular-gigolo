var App = angular.module('GigoloApp', [])

App.controller('Login', ['$scope', '$http','$rootScope','$timeout',function ($scope, $http,$rootScope,$timeout) {

    $scope.save = function (user) {
        $scope.user_img = 'https://twitter.com/' + user.name + '/profile_image?size=original';

        var data = {
            user_name: user.name,
            user_image: $scope.user_img,
            user_status: true
        };

        $http({
            url: 'php-scripts/save.php',
            method: 'POST',
            data: JSON.stringify(data),
            headers: {'content-type': 'application/json'}
        }).success(function (data) {
            $rootScope.isLogged = Boolean(data);
        });
    }
}]);


App.controller('Answers',['$scope', '$http','$rootScope',function ($scope, $http,$rootScope) {




}]);