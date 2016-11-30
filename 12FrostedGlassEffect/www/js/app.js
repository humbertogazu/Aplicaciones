angular.module('starter', ['ionic', 'ionic.contrib.frostedGlass'])

.controller('PageCtrl', function($scope, $ionicFrostedDelegate, $ionicScrollDelegate){

	var messageOptions = [
	{ content: '<p>Hola Mundo!!!</p>'},
	{ content: '<p>Holi beto</p>'},
	{ content: '<img src="data:image/jpeg;base64,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" alt=""/>' },
	{ content: '<p>Hola Guapo</p>'},
	{ content: '<p>Holi beto</p>'}
	];

	var messageIter = 0;
	$scope.messages = messageOptions.slice(0, messageOptions.length);

	$scope.add = function(){
		var nextMessage = messageOptions[messageIter++ % messageOptions.length];

		$scope.messages.push(angular.extend({}, nextMessage));

		$ionicFrostedDelegate.update();
		$ionicScrollDelegate.scrollBottom(true);
	};
});