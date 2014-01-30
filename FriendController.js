app.controller('FriendController', function($scope, $http){
   	$http.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json')
   		.success(function(data){
        	$scope.friends = data.results;
    });

    $scope.name = 'Cali Fornia';
    $scope.current_location = 'New Port Beach, California, United States';
    $scope.status = 'I hate the snow. I wish I was on the beach right now!!!';
    $scope.friend_count = '1,367';
    $scope.pic_square = 'https://scontent-a.xx.fbcdn.net/hprofile-ash3/833_10200838803828124_1233160321_a.jpg';
});