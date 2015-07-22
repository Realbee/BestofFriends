var getData = angular.module('getData', ['ngResource'])

.factory("profile", function($resource) {
  return $resource("/api/Profiles/:memberId");
});