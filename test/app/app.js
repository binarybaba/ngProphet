angular.module('foofoo', ['ngProphet'])
    .config(function($messageProvider){
        console.log("Config block");
        $messageProvider.setVal(false);

    })

.controller('foo', ['$scope','$message', function($scope, $message){
    $scope.go = function(message){
        $message.doStuff(message);
    }
}])