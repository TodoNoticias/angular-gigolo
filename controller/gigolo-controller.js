var App = angular.module('GigoloApp', [])

App.controller('Login', ['$scope', '$http', '$rootScope', '$timeout', function ($scope, $http, $rootScope, $timeout) {

    /*
     * Inicializo la variable que contiene la url del avatar default
     */
    $scope.user_img = "images/avatar.png";

    $scope.save = function (user, $event) {

        /*
         * sobrescribo la variable con la url de twitter y le paso el "user.name"
         */
        $scope.user_img = 'https://twitter.com/' + user.name + '/profile_image?size=original';

        /*
        * Creo un array con los datos del usuario
         */
        var userData = {
            user_name: user.name,
            user_status: 'online'
        };

        /*
         *  Recibo el elemento en el cual se ejecuta el evento click y lo convierto en un "angular.element"
         *  para luego agregarle el atributo disabled.
         */

        angular.element($event.currentTarget).attr('disabled', 'disabled')

        /*
         * Hago un set de los datos del usuario en el $rootScope para tenerlos disponibles siempre
         */
        $rootScope.user = userData;


        $http({
            url: 'php-scripts/save.php',
            method: 'POST',
            data: JSON.stringify(userData),
            headers: {'content-type': 'application/json'}
        }).success(function (data) {
            $timeout(function () {
                $rootScope.isLogged = Boolean(data);
                $rootScope.executeTimer();
            }, 3000)
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

            console.log('response ---> ', response);
            console.log('data[$scope.currentIndex].answer ---> ', data[$scope.currentIndex].answer);

            if (response === data[$scope.currentIndex].answer) {
                $scope.currentIndex++;

            } else {
                $rootScope.fail = true;
                $rootScope.user.user_status = 'lose';
                update_usr($rootScope.user);
                $rootScope.stopTimer();
            }

            $rootScope.win = $scope.questions.length == $scope.currentIndex ? true : false;

            if ($rootScope.win) {
                $rootScope.stopTimer();
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
        });
    }
}]).directive('animateGigolo',function(){
    return {
        restrict: 'EAC',
        require: '?ngModel',
        link: function($scope, $element) {
            console.log('$element -->', $element);
        }
    };
});

App.controller('Timer', ['$scope', '$rootScope', '$interval', function ($scope, $rootScope, $interval) {

    $scope.cent = 0;
    $scope.seg = 0;
    $scope.min = 0;
    var interval;

    $scope.onTimeout = function () {
        $scope.cent++;

        if ($scope.cent == 99) {
            $scope.cent = 0;
            $scope.seg++;
            $scope.seg = ($scope.seg).toString().length < 2 ? '0' + $scope.seg : $scope.seg
        }
        if ($scope.seg == 60) {
            $scope.seg = 0
            $scope.min++
        }
    }

    $rootScope.executeTimer = function () {
        interval = $interval($scope.onTimeout, 10);
    }

    $rootScope.stopTimer = function () {
        $interval.cancel(interval);
        $rootScope.user_time = $scope.min + ':' + $scope.seg + ':' + $scope.cent
    }
}]);


App.controller('LoggedUsers',['$scope', '$http', '$interval', function ($scope, $http, $interval) {

    $interval(function(){
        $http.get('php-scripts/get-users.php').success(function (data) {
            $scope.loggedUsers = data;
        });
    },1000);

}]);
