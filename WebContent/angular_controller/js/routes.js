'use strict';
//alert("hi");


var app = angular.module('tool', ['ngRoute']);

app.config(function($routeProvider) {
	
				$routeProvider.
				when('/hdfs', {
					templateUrl: 'hdfs.html',
					controller: 'hdfsController'
     
				}).
				when('/hbase', {
					templateUrl: 'hbase.html',
					controller: 'hbaseController'
     
				}).
				when('/ambari', {
					templateUrl: 'ambari.html',
					controller: 'ambariController'
     
				}).
				when('/hive', {
					templateUrl: 'hive.html',
					controller: 'hiveController'
     
				}).
				when('/zookeeper', {
					templateUrl: 'zookeeper.html',
					controller: 'zookeeperController'
     
				}).
				when('/tez', {
					templateUrl: 'tez.html',
					controller: 'tezController'
				}).
				when('/mapreduce', {
					templateUrl: 'mapreduce.html',
					controller: 'mapreduceController'
					}).
                otherwise({
                  redirectTo: '/hdfs',
                });
              
          }
);


app.controller('hdfsController',function($scope,$http){
	console.log("hello hdfs");
	$scope.uploadFile=function(){
		alert("angluar controller being attached");
		
	};
});


/*
 app.controller('hdfsController', ['$scope', 'fileUpload', function($scope, fileUpload){
    
    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = "/fileUpload";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };
    
}]);
myApp.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

myApp.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    }
}]);

 */
app.controller('hbaseController',function($scope,$http){
	console.log("hello hbase");
});

app.controller('ambariController',function($scope,$http){
});

app.controller('hiveController',function($scope,$http){
});

app.controller('zookeeperController',function($scope,$http){
});

app.controller('tezController',function($scope,$http){
});

app.controller('mapreduceController',function($scope,$http){
});
