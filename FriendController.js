app.controller('FriendController', function($scope){
    $.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json', function(){
        console.log('got the data');
    })
    $scope.name = 'Cali Fornia';
    $scope.location = 'New Port Beach, California, United States';
    $scope.status = 'I hate the snow. I wish I was on the beach right now!!!';
    $scope.friendCount = '1,367';
    $scope.pictureURL = 'https://scontent-a.xx.fbcdn.net/hprofile-ash3/833_10200838803828124_1233160321_a.jpg';
});