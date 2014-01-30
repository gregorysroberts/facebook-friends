app.controller('FriendController', function($scope, $http){
   	$http.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json')
   		.success(function(data){
        	$scope.friends = data.results;
        	angular.forEach($scope.friends, function(friend){
        		friend.friend_count = parseInt(friend.friend_count, 10);
        	});
    });

   	var attribute 

});