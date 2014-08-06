'use strict';

angular.module('mean.mean-socket').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('Mean socket help page', {
            url: '/meansocket/help',
            templateUrl: 'mean-socket/views/index.html'
        });
    }
]);
