app.controller('FriendController', function($scope, $http){
   	$http.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json')
   		.success(function(data){
        	$scope.friends = data.results;
    });

});