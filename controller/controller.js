var App =  angular.module('GigoloApp',[])

App.controller('Login',['$scope','$http',function($scope,$http){

    $scope.save = function(user) {
        var user_img = 'https://twitter.com/'+user.name+'/profile_image?size=original';

        var data = {
            user_name:user.name,
            user_image:user_img,
            user_status:true
        };

       $http({
            url:'php-scripts/save.php',
            method:'POST',
            data:JSON.stringify(data),
            headers:{'content-type':'application/json'}
        }).success(function(data){

        });
    }
}]);