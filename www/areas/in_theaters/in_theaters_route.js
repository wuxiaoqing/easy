/*
 * @Author: Administrator
 * @Date:   2016-03-14 22:43:40
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-03-21 00:03:28
 */

'use strict';
angular.module('in_theaters.route', ['in_theaters.controller','in_theaters.service'])
    .config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

            // setup an abstract state for the tabs directive
            $stateProvider
                .state('tab.in_theaters', {
                    url: '/:category',
                    views: {
                        'tab-inTheaters': {
                            templateUrl: 'areas/in_theaters/in_theaters.html',
                            controller: 'InTheatersCtrl'
                        }
                    }
                })

        }
    ]);
