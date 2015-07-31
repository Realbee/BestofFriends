var app = angular.module('friendsApp', ['mainRouter', 'getData']);

app.controller('mainController', function($scope) {

  $scope.guys = [{
    memberId: "B",
    name: "Atolagbe Bisoye Lateef",
    image: "../images/bisoye.jpg"
  }, {
    memberId: "Nobest",
    name: "Hassan Semiu Ayomon",
    image: "../images/semiu.jpg"
  }, {
    memberId: "Simplylatino",
    name: "Oyebanji Lateef Abolarinwa",
    image: "../images/photo4.jpg"
  }, {
    memberId: "Molanny",
    name: "Giwa Omotolani Saheed",
    image: "../images/saheed.jpg"
  }, {
    memberId: "Franco",
    name: "Falaju Idowu Francis",
    image: "../images/franco.jpg"
  }, {
    memberId: "Drizzle",
    name: "Awotedu Opeyemi Eedris",
    image: "../images/drizzle.jpg"
  }, {
    memberId: "Okin",
    name: "Orowole Kolawole Inumidun",
    image: "../images/kola.jpg"
  }, {
    memberId: "Ceedurf",
    name: "Rhaman Saheed Adewale",
    image: "../images/wale.jpg"
  }, {
    memberId: "Ola",
    name: "Tijani Olayiwola",
    image: "../images/ola.jpg"
  }, {
    memberId: "Simon",
    name: "Lawal Sunday Simon",
    image: "../images/photo3.jpg"
  }];


  $scope.showProfile = function(status) {
    var viewProfile = status;

  };


});

app.controller('diaryController', function($scope) {

$scope.nothing = 'nothing is here';
});
