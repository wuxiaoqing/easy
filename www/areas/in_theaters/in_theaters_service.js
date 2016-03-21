/*
 * @Author: Administrator
 * @Date:   2016-03-14 22:43:40
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-03-21 00:12:40
 */
(function(angular) {

    angular.module('in_theaters.service', ['serveic.http'])
        .factory('InTheatersFty',['$q','HttpService','$stateParams',
          function($q,HttpService,$stateParams){
           return {
            movieData: function(){
      var deferred = $q.defer();
                 HttpService.jsonp('http://api.douban.com/v2/movie/' + $stateParams.category,{count:3},function(data){
                  // console.log(data)
                   if(data){
                    deferred.resolve(data);
                  }else{
                     deferred.reject(data);
                  }
                })
              return deferred.promise;
         }
           }
        }])


})(angular);
//   var data = {
//          "count": '3',
//        "start": 0,
//       "total": 20,
//      "subjects": [
//     {
//       "rating": {
//         "max": 10,
//         "average": 9.3,
//         "stars": "50",
//         "min": 0
//       },
//       "genres": [
//         "喜剧",
//         "动作",
//         "动画"
//       ],
//       "title": "疯狂动物城",
//       "casts": [
//         {
//           "alt": "http://movie.douban.com/celebrity/1017930/",
//           "avatars": {
//             "small": "https://img3.doubanio.com/img/celebrity/small/4815.jpg",
//             "large": "https://img3.doubanio.com/img/celebrity/large/4815.jpg",
//             "medium": "https://img3.doubanio.com/img/celebrity/medium/4815.jpg"
//           },
//           "name": "金妮弗·古德温",
//           "id": "1017930"
//         },
//         {
//           "alt": "http://movie.douban.com/celebrity/1013760/",
//           "avatars": {
//             "small": "https://img1.doubanio.com/img/celebrity/small/18772.jpg",
//             "large": "https://img1.doubanio.com/img/celebrity/large/18772.jpg",
//             "medium": "https://img1.doubanio.com/img/celebrity/medium/18772.jpg"
//           },
//           "name": "杰森·贝特曼",
//           "id": "1013760"
//         },
//         {
//           "alt": "http://movie.douban.com/celebrity/1049501/",
//           "avatars": {
//             "small": "https://img3.doubanio.com/img/celebrity/small/1410696326.11.jpg",
//             "large": "https://img3.doubanio.com/img/celebrity/large/1410696326.11.jpg",
//             "medium": "https://img3.doubanio.com/img/celebrity/medium/1410696326.11.jpg"
//           },
//           "name": "伊德里斯·艾尔巴",
//           "id": "1049501"
//         }
//       ],
//       "collect_count": 223228,
//       "original_title": "Zootopia",
//       "subtype": "movie",
//       "directors": [
//         {
//           "alt": "http://movie.douban.com/celebrity/1286985/",
//           "avatars": {
//             "small": "https://img1.doubanio.com/img/celebrity/small/1457505519.94.jpg",
//             "large": "https://img1.doubanio.com/img/celebrity/large/1457505519.94.jpg",
//             "medium": "https://img1.doubanio.com/img/celebrity/medium/1457505519.94.jpg"
//           },
//           "name": "拜伦·霍华德",
//           "id": "1286985"
//         },
//         {
//           "alt": "http://movie.douban.com/celebrity/1324037/",
//           "avatars": {
//             "small": "https://img1.doubanio.com/img/celebrity/small/1456810684.78.jpg",
//             "large": "https://img1.doubanio.com/img/celebrity/large/1456810684.78.jpg",
//             "medium": "https://img1.doubanio.com/img/celebrity/medium/1456810684.78.jpg"
//           },
//           "name": "瑞奇·摩尔",
//           "id": "1324037"
//         },
//         {
//           "alt": "http://movie.douban.com/celebrity/1304069/",
//           "avatars": {
//             "small": "https://img3.doubanio.com/img/celebrity/small/1456810614.66.jpg",
//             "large": "https://img3.doubanio.com/img/celebrity/large/1456810614.66.jpg",
//             "medium": "https://img3.doubanio.com/img/celebrity/medium/1456810614.66.jpg"
//           },
//           "name": "杰拉德·布什",
//           "id": "1304069"
//         }
//       ],
//       "year": "2016",
//       "images": {
//         "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2315672647.jpg",
//         "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2315672647.jpg",
//         "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2315672647.jpg"
//       },
//       "alt": "http://movie.douban.com/subject/25662329/",
//       "id": "25662329"
//     },
//     {
//       "rating": {
//         "max": 10,
//         "average": 8,
//         "stars": "40",
//         "min": 0
//       },
//       "genres": [
//         "剧情",
//         "惊悚",
//         "冒险"
//       ],
//       "title": "荒野猎人",
//       "casts": [
//         {
//           "alt": "http://movie.douban.com/celebrity/1041029/",
//           "avatars": {
//             "small": "https://img3.doubanio.com/img/celebrity/small/470.jpg",
//             "large": "https://img3.doubanio.com/img/celebrity/large/470.jpg",
//             "medium": "https://img3.doubanio.com/img/celebrity/medium/470.jpg"
//           },
//           "name": "莱昂纳多·迪卡普里奥",
//           "id": "1041029"
//         },
//         {
//           "alt": "http://movie.douban.com/celebrity/1049489/",
//           "avatars": {
//             "small": "https://img3.doubanio.com/img/celebrity/small/5110.jpg",
//             "large": "https://img3.doubanio.com/img/celebrity/large/5110.jpg",
//             "medium": "https://img3.doubanio.com/img/celebrity/medium/5110.jpg"
//           },
//           "name": "汤姆·哈迪",
//           "id": "1049489"
//         },
//         {
//           "alt": "http://movie.douban.com/celebrity/1313116/",
//           "avatars": {
//             "small": "https://img1.doubanio.com/img/celebrity/small/1361026097.22.jpg",
//             "large": "https://img1.doubanio.com/img/celebrity/large/1361026097.22.jpg",
//             "medium": "https://img1.doubanio.com/img/celebrity/medium/1361026097.22.jpg"
//           },
//           "name": "多姆纳尔·格里森",
//           "id": "1313116"
//         }
//       ],
//       "collect_count": 76084,
//       "original_title": "The Revenant",
//       "subtype": "movie",
//       "directors": [
//         {
//           "alt": "http://movie.douban.com/celebrity/1054403/",
//           "avatars": {
//             "small": "https://img3.doubanio.com/img/celebrity/small/570.jpg",
//             "large": "https://img3.doubanio.com/img/celebrity/large/570.jpg",
//             "medium": "https://img3.doubanio.com/img/celebrity/medium/570.jpg"
//           },
//           "name": "亚利桑德罗·冈萨雷斯·伊纳里多",
//           "id": "1054403"
//         }
//       ],
//       "year": "2015",
//       "images": {
//         "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2323258429.jpg",
//         "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2323258429.jpg",
//         "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2323258429.jpg"
//       },
//       "alt": "http://movie.douban.com/subject/5327268/",
//       "id": "5327268"
//     },
//     {
//       "rating": {
//         "max": 10,
//         "average": 5.1,
//         "stars": "25",
//         "min": 0
//       },
//       "genres": [
//         "喜剧",
//         "爱情"
//       ],
//       "title": "女汉子真爱公式",
//       "casts": [
//         {
//           "alt": "http://movie.douban.com/celebrity/1275620/",
//           "avatars": {
//             "small": "https://img1.doubanio.com/img/celebrity/small/1423139667.58.jpg",
//             "large": "https://img1.doubanio.com/img/celebrity/large/1423139667.58.jpg",
//             "medium": "https://img1.doubanio.com/img/celebrity/medium/1423139667.58.jpg"
//           },
//           "name": "赵丽颖",
//           "id": "1275620"
//         },
//         {
//           "alt": "http://movie.douban.com/celebrity/1031500/",
//           "avatars": {
//             "small": "https://img1.doubanio.com/img/celebrity/small/39883.jpg",
//             "large": "https://img1.doubanio.com/img/celebrity/large/39883.jpg",
//             "medium": "https://img1.doubanio.com/img/celebrity/medium/39883.jpg"
//           },
//           "name": "张翰",
//           "id": "1031500"
//         },
//         {
//           "alt": "http://movie.douban.com/celebrity/1320526/",
//           "avatars": {
//             "small": "https://img1.doubanio.com/img/celebrity/small/49339.jpg",
//             "large": "https://img1.doubanio.com/img/celebrity/large/49339.jpg",
//             "medium": "https://img1.doubanio.com/img/celebrity/medium/49339.jpg"
//           },
//           "name": "童菲",
//           "id": "1320526"
//         }
//       ],
//       "collect_count": 2481,
//       "original_title": "女汉子真爱公式",
//       "subtype": "movie",
//       "directors": [
//         {
//           "alt": "http://movie.douban.com/celebrity/1352793/",
//           "avatars": {
//             "small": "https://img1.doubanio.com/img/celebrity/small/1451286288.54.jpg",
//             "large": "https://img1.doubanio.com/img/celebrity/large/1451286288.54.jpg",
//             "medium": "https://img1.doubanio.com/img/celebrity/medium/1451286288.54.jpg"
//           },
//           "name": "郭大雷",
//           "id": "1352793"
//         }
//       ],
//       "year": "2016",
//       "images": {
//         "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2324372895.jpg",
//         "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2324372895.jpg",
//         "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2324372895.jpg"
//       },
//       "alt": "http://movie.douban.com/subject/26345736/",
//       "id": "26345736"
//     }
//       ],
//        "title": "正在上映的电影-北京"
// };
/*angular.module('goodsList.service', [])
  .factory('GoodsListFty', function ($http, $q) {
    return {
      // 刷新列表商品列表
      refreshGoodsList: function (message) {
        var obj_goodsListData = [
          {
            name: '澳贝琳 2015秋冬新款韩版修身显瘦中长款毛呢大衣女外套  8615  灰色 L',
            price: '198',
            haoping: '99',
            buy: '81',
            productId: "1",
            src: 'img/goodsList/goods1.jpg'
          },
          {
            name: '素念 毛呢大衣 女 2015秋装新款修身  连帽长袖毛呢外套女中长款呢子 大衣女欧美 藏青兰 L',
            price: '288',
            haoping: '100',
            buy: '253',
            productId: "2",
            src: 'img/goodsList/goods2.jpg'
          },
          {
            name: '玫芭2015秋冬新款韩版时尚中长款毛呢外套修身毛呢大衣女BJ8008  土黄 L',
            price: '269',
            haoping: '99',
            buy: '155',
            productId: "3",
            src: 'img/goodsList/goods3.jpg'
          },
          {
            name: '轻舞飘絮 毛呢外套女秋冬款2015秋款女装韩版修身毛呢大衣女6868 粉色 L',
            price: '288',
            haoping: '100',
            buy: '733',
            productId: "4",
            src: 'img/goodsList/goods4.jpg'
          },
          {
            name: '时竟 2015秋装新款OL通勤A版格子中长款修身毛呢大衣W8928 灰格 L',
            price: '289',
            haoping: '100',
            buy: '773',
            productId: "5",
            src: 'img/goodsList/goods5.jpg'
          },
          {
            name: '伊芙丽2015冬装新款直筒中长款羊毛呢子外套大衣6580927051 大红 S',
            price: '499',
            haoping: '100',
            buy: '6',
            productId: "6",
            src: 'img/goodsList/goods6.jpg'
          },
          {
            name: '辉华恋2015秋装新款宽松型韩版简约中长款长袖立领毛呢大衣WD001 玫紫色 M',
            price: '229',
            haoping: '99',
            buy: '215',
            productId: "7",
            src: 'img/goodsList/goods7.jpg'
          },
          {
            name: 'Ochirly欧时力新女装廓形长款西装式毛呢外套大衣1144341860 大红120 S',
            price: '1323',
            haoping: '69',
            buy: '19',
            productId: "8",
            src: 'img/goodsList/goods8.jpg'
          },
          {
            name: '烟花烫2015秋季新款欧根纱拼色呢子外套裙摆毛呢大衣女中长款厚 从卉 玫红色杂点 M现货',
            price: '368',
            haoping: '69',
            buy: '28',
            productId: "9",
            src: 'img/goodsList/goods9.jpg'
          }
        ];

        var deferred = $q.defer();
        deferred.resolve(obj_goodsListData);
        return deferred.promise;
      },
      //下拉加载更多列表商品列表
      loadMoreGoodsList: function (message) {
        var obj_goodsListData = [
          {
            name: '澳贝琳 2015秋冬新款韩版修身显瘦中长款毛呢大衣女外套  8615  灰色 L',
            price: '198',
            haoping: '99',
            buy: '81',
            src: 'img/goodsList/goods1.jpg'
          },
          {
            name: '素念 毛呢大衣 女 2015秋装新款修身  连帽长袖毛呢外套女中长款呢子 大衣女欧美 藏青兰 L',
            price: '288',
            haoping: '100',
            buy: '253',
            src: 'img/goodsList/goods2.jpg'
          },
          {
            name: '玫芭2015秋冬新款韩版时尚中长款毛呢外套修身毛呢大衣女BJ8008  土黄 L',
            price: '269',
            haoping: '99',
            buy: '155',
            src: 'img/goodsList/goods3.jpg'
          },
          {
            name: '轻舞飘絮 毛呢外套女秋冬款2015秋款女装韩版修身毛呢大衣女6868 粉色 L',
            price: '288',
            haoping: '100',
            buy: '733',
            src: 'img/goodsList/goods4.jpg'
          },
          {
            name: '时竟 2015秋装新款OL通勤A版格子中长款修身毛呢大衣W8928 灰格 L',
            price: '289',
            haoping: '100',
            buy: '773',
            src: 'img/goodsList/goods5.jpg'
          },
          {
            name: '伊芙丽2015冬装新款直筒中长款羊毛呢子外套大衣6580927051 大红 S',
            price: '499',
            haoping: '100',
            buy: '6',
            src: 'img/goodsList/goods6.jpg'
          },
          {
            name: '辉华恋2015秋装新款宽松型韩版简约中长款长袖立领毛呢大衣WD001 玫紫色 M',
            price: '229',
            haoping: '99',
            buy: '215',
            src: 'img/goodsList/goods7.jpg'
          },
          {
            name: 'Ochirly欧时力新女装廓形长款西装式毛呢外套大衣1144341860 大红120 S',
            price: '1323',
            haoping: '69',
            buy: '19',
            src: 'img/goodsList/goods8.jpg'
          },
          {
            name: '烟花烫2015秋季新款欧根纱拼色呢子外套裙摆毛呢大衣女中长款厚 从卉 玫红色杂点 M现货',
            price: '368',
            haoping: '69',
            buy: '28',
            src: 'img/goodsList/goods9.jpg'
          }
        ];

        var deferred = $q.defer();
        deferred.resolve(obj_goodsListData);
        return deferred.promise;
      },
      getData: function(){
        var deferred = $q.defer();

        return deferred.promise;
      },
      getAllData: function () {

        console.log("6");
        var deferred = $q.defer();

        setTimeout(function () {
          deferred.resolve("返回的数据")
          console.log("5");
        }, 5000)

        ////$http的get请求方式
        //$http.get('localhost:8080').success(function(data,status,config,headers){
        //    deferred.resolve(data);
        //}).error(function(data,status,headers,config){
        //    deferred.reject(data);
        //})
        //$http.get('localhost:8080').success(function(data,status,config,headers){
        //  deferred.resolve(data);
        //}).error(function(data,stattus,headers,config){
        //deferred.reject()})

        return deferred.promise;

        // $http的post请求方式
        //$http.post('localhost:8080',{typeNumber:1}).success(function(data,status,headers,config){
        //
        //}).error(function(data,status,headers,config){
        //
        //})

        // jquery的请求方式
        //$.get('localhost:8080',function(){
        //
        //})
      },
      deleteById: function () {
        console.log("deleteById方法");

        //var deferred = $q.defer();
        //var url = Global.SERVER_PATH+"/WXPlatformServlet?method=mobileUserUndoTaskList&message="+message+"&loginName="+$window.localStorage['loginName']+"&platform="+Global.PLATFORM+"&module=bill&callback=JSON_CALLBACK";
        //$http.jsonp(url).success(function (data, status, headers, config) {
        //  deferred.resolve(data);
        //}).error(function (data,status, headers, config) {
        //  deferred.reject(data);
        //});
        //return deferred.promise;
      }
    }
  });*/
