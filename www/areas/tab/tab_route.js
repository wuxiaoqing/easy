/*
* @Author: Administrator
* @Date:   2016-03-14 22:20:56
* @Last Modified by:   Administrator
* @Last Modified time: 2016-03-15 00:25:50
*/

'use strict';
angular.module('tab.route',['tab.controller'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider,$urlRouterProvider){
  // setup an abstract state for the tabs directive
   $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'areas/tab/tab.html'
  })
}])
