(function() {
    const app = angular.module("UserApp", [])
    app.controller("UserController", function($http, $scope) {

        $http({
            method: 'GET',
            url: 'http://localhost:8080/api/users'
            // url: 'https://userpersistancelayer.herokuapp.com/api/users',
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
                    // url:"https://userpersistancelayer.herokuapp.com/api/users",
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
                    url: '/api/deleteuser/' + user._id,
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

        $scope.showModal = false;

        $scope.open = function() {
            $scope.showModal = true;
        };

        $scope.ok = function(emailid, new_forename, new_surname, id) {
            $scope.showModal = false;
            console.log(emailid, new_forename, new_surname, id)
            const new_user = {
            	emailid,
            	id,
            	new_surname,
            	new_forename
            }

            $http.put("/api/update_user/"+id ,new_user).then(function (res) {
            	console.log(res)
            }, function (err) {
            	console.log(err)
            })
        	


        };



        // $scope.updateUser = function (user) {
        // 	// body...
        // 	$http.patch(baseUrl + '/users/' + currentUserEmail,data, config).success(success).error(error)
        // }

    })
})();