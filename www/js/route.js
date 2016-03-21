/*
 * @Author:
 * @Date:   2016-03-14 22:07:16
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-03-18 13:20:15
 */

'use strict';
angular.module('route', [
        'tab.route',
        'in_theaters.route',
        'music.route',
        'movie.route',
        'account.route'
    ])
    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/in_theaters');

    });
