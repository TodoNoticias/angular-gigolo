var App = angular.module('GigoloApp', [])

App.controller('Login', ['$scope', '$http', '$rootScope', '$timeout', function ($scope, $http, $rootScope, $timeout) {
    $scope.user_img = "images/avatar.png";

    $scope.save = function (user) {
        $scope.user_img = 'https://twitter.com/' + user.name + '/profile_image?size=original';

        var data = {
            user_name: user.name,
            user_image: $scope.user_img,
            user_status: 1
        };

        $rootScope.user = data;

        $http({
            url: 'php-scripts/save.php',
            method: 'POST',
            data: JSON.stringify(data),
            headers: {'content-type': 'application/json'}
        }).success(function (data) {
            $timeout(function () {
                $rootScope.isLogged = Boolean(data);
            }, 2000)
        });
    }
}]);


App.controller('Question', ['$scope', '$http', '$rootScope', '$timeout', function ($scope, $http, $rootScope, $timeout) {

    $http.get('json/questions.json').success(function (data) {

        $scope.questions = data;
        $scope.currentIndex = 0;
        $rootScope.fail = false;
        $rootScope.win = false;
        $rootScope.isUpdated = false;

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.response = function (response) {
            if (response === data[$scope.currentIndex].answer) {
                $scope.currentIndex++;
                $rootScope.win =  $scope.questions.length == $scope.currentIndex ? true : false;
                $rootScope.user.user_time = $scope.time;
                update_usr($rootScope.user);


            } else {
                $rootScope.fail = true;
                $rootScope.user.user_status = 0;
                update_usr($rootScope.user);
            }
        }
    });

    function update_usr(data){
        console.log('Esta es la data que llea ---> ',data)

        $http({
            url: 'php-scripts/update.php',
            method: 'POST',
            data: JSON.stringify(data),
            headers: {'content-type': 'application/json'}
        }).success(function (data) {
            $rootScope.isUpdated = true;
        });
    }
}]);