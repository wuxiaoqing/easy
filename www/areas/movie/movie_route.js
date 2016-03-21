/*
* @Author: Administrator
* @Date:   2016-03-07 15:13:47
* @Last Modified by:   Administrator
* @Last Modified time: 2016-03-15 00:25:07
*/

'use strict';
angular.module('movie.route', ['movie.controller'])
    .config([
            '$stateProvider',
            '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                // setup an abstract state for the tabs directive
                $stateProvider
                    .state('tab.movie', {
                        url: '/movie',
                        views: {
                            'tab-movie': {
                                templateUrl: 'areas/movie/movie.html',
                                controller: 'MovieCtrl'
                            }
                        }
                    })
 }
            ]);
