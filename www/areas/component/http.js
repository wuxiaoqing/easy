/*
* @Author: Administrator
* @Last Modified by:   Administrator
* @Last Modified time: 2016-03-21 18:52:28
*/

'use strict';
// 由于默认angular提供的异步请求对象不支持自定义回调函数名
  // angular随机分配的回调函数名称不被豆瓣支持
//定义jsonp模块，改变angular中jsonp回调函数名的问题；豆瓣API 回调函数名字不支持带“。”的函数名
(function(angular){
  var http =  angular.module('serveic.http',[]);
  http.service('HttpService',['$window','$document',function($window,$document){
      //定义jsonp，参数：URL，data，callback
      this.jsonp = function(url,data,callback){
        //定义一个不会重复的回调函数名
        var fnSuffix = Math.random().toString().replace('.','');
        var cbFuncName = 'my_json_cb_' + fnSuffix;
        //将会调函数挂载到全局函数下,并将回调函数附这个函数
        window[cbFuncName] = callback;

        //获取调用数据的地址
        //查看url中是否已经含有？
        var querystring = url.indexOf('?') == -1 ? '?' : '&';
        for(var key in data){
          querystring += key + '='+data[key] + '&';
        }
        querystring+= 'callback=' + cbFuncName;
        //console.log(querystring);
        //创建script标签；
        var scriptElement = $document[0].createElement('script');
        scriptElement.src= url + querystring;
        $document[0].body.appendChild(scriptElement);
}

  }])
})(angular);
//
//
/*(function(angular){
  var http = angular.module('service.http',[]);
  http.service('HttpService',[$window,$document,function($window,$document){
    //定义jsonp函数
    this.jsonp = function(url,data,callback){
      var fnSuffix = MAth.random().toString().replace('.','');
      var cbFuncName = 'my_json_cb_' + fnSuffix;
      $window[cbFuncName] = callback;
      var querystring = url.indexOf('?') == -1 ? '?' : '&';
      for(var key in data){
        querystring +=key + '='+ data[key]+'&';
      }
      querystring += 'callback' + cbFuncName;
      var scriptElement = $document[0].createElement('script');
      scriptElement.src= url + querystring;
      $document[0].body.appendChild(scriptElement);
    }
  }])
})(angular);*/
