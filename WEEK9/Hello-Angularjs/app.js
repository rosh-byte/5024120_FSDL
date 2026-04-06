var app = angular.module("myApp", []);

app.controller("MainController", function($scope) {

    // User Data
    $scope.user = {
        name: "",
        age: null
    };

    // Message
    $scope.message = "";

    $scope.generateMessage = function() {
        if ($scope.user.name && $scope.user.age) {
            $scope.message = "🔥 " + $scope.user.name + ", you're " + $scope.user.age + " and doing great!";
        } else {
            $scope.message = "⚠️ Please fill all details!";
        }
    };

    // Theme Toggle
    $scope.theme = "Light";

    $scope.toggleTheme = function() {
        if ($scope.theme === "Light") {
            document.body.classList.add("dark");
            $scope.theme = "Dark";
        } else {
            document.body.classList.remove("dark");
            $scope.theme = "Light";
        }
    };

    // Hobby List
    $scope.hobbies = [];

    $scope.addHobby = function() {
        if ($scope.newHobby) {
            $scope.hobbies.push($scope.newHobby);
            $scope.newHobby = "";
        }
    };

});