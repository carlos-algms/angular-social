'use strict';

/**
 * @ngdoc function
 * @name angularTinySocialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTinySocialApp
 */
angular.module('angularTinySocialApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
