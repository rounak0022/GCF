var marks = angular.module('markApp', []);

marks.controller('markController', function($scope){
    $scope.calculate = function(){
        $scope.totalMarks = 
        Number($scope.maths) + 
        Number($scope.science) +
        Number($scope.english);

    };
});
