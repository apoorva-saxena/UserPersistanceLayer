(function() {
    const app = angular.module("UserApp", [])
    app.controller("UserController", function($http, $scope) {

        $http({
            method: 'GET',
            url: 'http://localhost:8080/api/users'
        }).then(function successCallback(response) {
            $scope.users = response.data
        }, function errorCallback(response) {
            console.log(response)
        });

        $scope.addUser = function(email, forename, surname) {
            console.log(email, forename, surname)
            if (email && forename && surname) {
                const req = {
                    method: 'POST',
                    url: "http://localhost:8080/api/users",
                    headers: {
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    },
                    data: {
                        email: email,
                        forename: forename,
                        surname: surname
                    }
                }

                console.log(req)

                $http(req).then(function(req) {
                    console.log(req)
                    $scope.users.unshift(req.config.data)
                })
            }

        }

        $scope.deleteUser = function(user) {
            console.log(user)
            $http({
                    method: 'DELETE',
                    url: '/api/deleteusers/' + user._id,
                    data: {
                        id: user._id
                    },
                    headers: {
                        'Content-type': 'application/json;charset=utf-8'
                    }
                })
                .then(function(response) {
                	console.log(response.data)
                }, function(rejection) {
                    console.log(rejection.data);
                });
        }

    })
})();