/*
 * @Author: Administrator
 * @Date:   2016-03-18 00:15:54
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-03-18 00:18:49
 */

'use strict';
angular.module('book.controller', ['global'])
    .controller('BookRecommendCtrl', ['$scope', 'GlobalVariable', function($scope, GlobalVariable) {

        $scope.title = GlobalVariable.PARTNAME[0];
        console.log($scope.title)
        $scope.bookNavItems = [
            { id: 0, name: "推荐" },
            { id: 1, name: "热门" },
            { id: 2, name: "经典" },
            { id: 3, name: "技术" },
        ]
    }]);
