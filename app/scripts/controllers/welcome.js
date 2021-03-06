// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("welcomeCtrl", [
  "$scope", function($scope) {
    $scope.$on("$viewContentLoaded", function() {
      return $scope.$emit("pageChange", "welcome");
    });
    $scope.$watch("email + password", function() {
      return $scope.isLoginValid = $scope.email && $scope.password;
    });
    $scope.isLoginBox = false;
    $scope.isLoging = false;
    $scope.isReging = false;
    $scope.toggleLogin = function() {
      return $scope.isLoginBox = !$scope.isLoginBox;
    };
    $scope.loginSubmit = function() {
      return $scope.isLoging = true;
    };
    $scope.regSubmit = function() {
      return $scope.isReging = true;
    };
    return false;
  }
]);
