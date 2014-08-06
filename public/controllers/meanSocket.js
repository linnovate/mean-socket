'use strict';

angular.module('mean.mean-socket').controller('MeanSocketController', ['$scope', '$state', 'Global', 'MeanSocket',
	function($scope, $state, Global, MeanSocket) {
		$scope.global = Global;
		$scope.package = {
			name: 'mean-socket'
		};
	
		$scope.socketAfterSend = function(message) {
			$scope.message = {};
		};

		$scope.socketAfterJoin = function(channel, messages) {
			$scope.activeChannel = channel;
			$scope.messages = messages;
		};

		$scope.socketAfterGet = function(message) {
			$scope.messages.push(message);
		};

		$scope.socketAfterGetChannels = function(channels) {
			$scope.channels = channels;
		};

		$scope.createNewChannel = function(channel) {
			$scope.activeChannel = channel;
			$scope.newChannel = '';
		};
		// $scope.channel = {
		// 	name: ''
		// };

		// // 			// //App info
		// // // $scope.channels = [];
		// $scope.listeningChannels = [];
		// // // $scope.activeChannel = null;
		// // // $scope.userName = $scope.global.user._id;
		// // // $scope.messages = [];

		// // // ///////////////////////////////////////////////////////////////////////
		// // // ///////////////////////////////////////////////////////////////////////
		// // // //Socket.io listeners
		// // // ///////////////////////////////////////////////////////////////////////
		// // // ///////////////////////////////////////////////////////////////////////

		// // // MeanSocket.on('channels', function channels(channels) {
		// // // 	console.log('channels', channels);

		// // // 	console.log(channels);
		// // // 	$scope.channels = channels;
		// // // 	$scope.channels = channels;
		// // // });

		// // // MeanSocket.on('message:received', function messageReceived(message) {
		// // // 	$scope.messages.push(message);
		// // // });

		// // // MeanSocket.emit('user:joined', {
		// // // 	name: $scope.global.user._id
		// // // });

		// // // MeanSocket.on('user:joined', function(user) {
		// // // 	console.log('user:joined');
		// // // 	$scope.messages.push(user);
		// // // });

		// $scope.listenChannel = function listenChannel(channel) {
		// 	MeanSocket.on('messages:channel:' + channel, function messages(messages) {
		// 		alert(channel)
		// 		MeanSocket.activeChannel = channel;
		// 		$scope.afterJoin({
		// 			messages: messages,
		// 			channel: channel
		// 		});
		// 	});

		// 	MeanSocket.on('message:channel:' + channel, function message(message) {
		// 		console.log('got message: ', message);
		// 		console.log(channel, MeanSocket.activeChannel)
		// 		if (channel === MeanSocket.activeChannel) {
		// 			$scope.meanSocketAfterGet({
		// 				message: message
		// 			});
		// 		}
		// 	});

		// 	MeanSocket.on('message:remove:channel:' + channel, function(removalInfo) {

		// 	});

		// 	if ($scope.listeningChannels.indexOf(channel) === -1)
		// 		$scope.listeningChannels.push(channel);

		// };

		// // Join

		// $scope.joinChannel = function joinChannel(channel) {
		// 	alert(channel);
		// 	//Listen to channel if we dont have it already.
		// 	if ($scope.listeningChannels.indexOf(channel) === -1) {
		// 		$scope.listenChannel(channel);
		// 	}

		// 	MeanSocket.emit('channel:join', {
		// 		channel: channel,
		// 		name: $scope.global.user._id
		// 	});
		// };

		// //Auto join the defaultChannel
		// console.log(typeof MeanSocket.activeChannel)
		// if (typeof MeanSocket.activeChannel === 'undefined')
		// 	$scope.joinChannel('mean');

		// // $scope.$watch('joinToChannel', function() {
		// // 	if ($scope.joinToChannel)
		// // 		$scope.joinChannel($scope.joinToChannel);
		// // });
	}
]);