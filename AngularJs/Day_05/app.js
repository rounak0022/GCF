var app = angular.module("myApp", []);

app.controller("RegisterController", function ($scope) {

    $scope.student = {};

    $scope.submitted = false;

    $scope.register = function () {

        if ($scope.registerForm.$valid) {

            $scope.submitted = true;

            alert("Registration Successful!");

        }

    };

});

app.directive("passwordMatch", function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=passwordMatch"
        },
        link: function (scope, element, attributes, ngModel) {
            ngModel.$validators.passwordMatch = function (modelValue) {
                return modelValue === scope.otherModelValue;
            };
            scope.$watch("otherModelValue", function () {

                ngModel.$validate();

            });

        }

    };

});