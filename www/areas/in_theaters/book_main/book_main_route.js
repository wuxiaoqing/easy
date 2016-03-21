/*
 * @Author: Administrator
 * @Date:   2016-03-18 00:16:09
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-03-18 00:18:12
 */

'use strict';
angular.module('book_main_route', ['book_main_controller'])
    .config(['$stateRoute', function($stateRoute) {
        .state('book.recommend', {
            url: '/recommend',
            views: {
                'book-recommend': {
                    templateUrl: 'areas/book/book_main/book_main.html'
                    controller: 'BookRecommendCtrl'
                }
            }
        })
    }])
