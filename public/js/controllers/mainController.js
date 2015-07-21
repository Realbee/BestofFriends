var mainController = angular.module('mainController', ['mainRouter'])

.controller('mainController', function($scope) {

    $scope.guys = [{
        name: "Atolagbe Bisoye Lateef",
        image: "../images/photo4.jpg"
    }, {
        name: "Hassan Semiu Ayomon",
        image: "../images/photo5.jpg"
    }, {
        name: "Oyebanji Lateef Abolarinwa",
        image: "../images/photo4.jpg"
    }, {
        name: "Giwa Omotolani Saheed",
        image: "../images/photo2.jpg"
    }, {
        name: "Falaju Idowu Francis",
        image: "../images/photo2.jpg"
    }, {
        name: "Awotedu Opeyemi Eedris",
        image: "../images/photo5.jpg"
    }, {
        name: "Orowole Kolawole Inumidun",
        image: "../images/photo1.jpg"
    }, {
        name: "Rhaman Saheed Adewale",
        image: "../images/photo3.jpg"
    }, {
        name: "Tijani Olayiwola",
        image: "../images/photo1.jpg"
    }, {
        name: "Lawal Sunday Simon",
        image: "../images/photo3.jpg"
    }];

});
