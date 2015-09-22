var App = angular.module('GigoloApp', [])

App.controller('Login', ['$scope', '$http', '$rootScope', '$timeout', function ($scope, $http, $rootScope, $timeout) {
    $scope.user_img = "images/gigolo.jpg";

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
                $rootScope.executeTimer();
            }, 2000)
        });
    }
}]);

App.controller('Question', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {

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
                $rootScope.win = $scope.questions.length == $scope.currentIndex ? true : false;
                $rootScope.user.user_time = $rootScope.user_time;
                update_usr($rootScope.user);

            } else {
                $rootScope.fail = true;
                $rootScope.user.user_status = 0;
                $rootScope.user.user_time = $rootScope.user_time;
                update_usr($rootScope.user);
            }
        }
    });

    function update_usr(data) {
        $http({
            url: 'php-scripts/update.php',
            method: 'POST',
            data: JSON.stringify(data),
            headers: {'content-type': 'application/json'}
        }).success(function (data) {
            $rootScope.isUpdated = true;
            $rootScope.stopTimer();
        });
    }
}]);

App.controller('Timer', ['$scope', '$rootScope', '$interval', function ($scope,$rootScope, $interval) {

    $scope.cent = 0;
    $scope.seg = 0;
    $scope.min = 0;
    var interval;

    $scope.onTimeout = function(){
        $scope.cent++;

        if($scope.cent == 99){
            $scope.cent = 0;
            $scope.seg++;
            $scope.seg = ($scope.seg).toString().length < 2 ? '0'+$scope.seg : $scope.seg
        }
        if($scope.seg == 60){
            $scope.seg = 0
            $scope.min++
        }
    }

    $rootScope.executeTimer = function (){
       interval = $interval($scope.onTimeout,10);
    }

    $rootScope.stopTimer = function(){
        $interval.cancel(interval);
        $rootScope.user_time = $scope.min +':'+$scope.seg +':'+$scope.cent
    }
}]);
