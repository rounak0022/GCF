var app = angular.module('studentApp', []);

app.controller('studentController',function($scope){
    $scope.student = {
        name: 'Rounak',
        branch: 'Computer Science',
        college: 'Parul University'
    };
});