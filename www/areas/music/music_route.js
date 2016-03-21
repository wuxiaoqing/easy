/*
 * @Author: Administrator
 * @Date:   2016-03-14 22:43:43
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-03-15 00:25:15
 */

'use strict';
angular.module('music.route', ['music.controller'])
    .config([
            '$stateProvider',
            '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                // setup an abstract state for the tabs directive
                $stateProvider
                    .state('tab.music', {
                        url: '/music',
                        views: {
                            'tab-music': {
                                templateUrl: 'areas/music/music.html',
                                controller: 'MusicCtrl'
                            }
                        }
                    })
 }
            ]);
