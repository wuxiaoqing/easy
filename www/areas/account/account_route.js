/*
* @Author: Administrator
* @Date:   2016-03-14 22:51:34
* @Last Modified by:   Administrator
* @Last Modified time: 2016-03-15 00:24:46
*/

'use strict';
angular.module('account.route', ['account.controller'])
    .config([
            '$stateProvider',
            '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                // setup an abstract state for the tabs directive
                $stateProvider
                    .state('tab.account', {
                        url: '/account',
                        views: {
                            'tab-account': {
                                templateUrl: 'areas/account/account.html',
                                controller: 'AccountCtrl'
                            }
                        }
                    })
 }
            ]);
