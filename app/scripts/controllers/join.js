'use strict';

/**
 * @ngdoc function
 * @name pnChatApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the pnChatApp
 */
angular.module('pnChatApp')
  .controller('JoinCtrl',['$scope', '$rootScope', '$location', 'PubNub', function($scope, $rootScope, $location, PubNub) {
    $scope.data = {
    	username: 'User_' + Math.floor(Math.random() * 1000)
    };

    $scope.join = function(){
    	console.log('Joining...');
    	var _ref, _ref1;
    	$rootScope.data || ($rootScope.data = {});
    	$rootScope.data.username = (_ref = $scope.data) != null ? _ref.username : void 0;
        $rootScope.data.city = (_ref1 = $scope.data) != null ? _ref1.city : void 0;
        $rootScope.data.uuid = Math.floor(Math.random() * 1000000) + '__' + $scope.data.username;

    	console.log($rootScope);

    	PubNub.init({
    		subscribe_key: 'sub-c-81e4bfea-18e8-11e7-aca9-02ee2ddab7fe',
    		publish_key: 'pub-c-d48e75e5-5334-41a7-9e1c-8575cd52e4d0',
    		uuid: $rootScope.data.uuid
    	});
    	return $location.path('/main');
    }
  }]);
