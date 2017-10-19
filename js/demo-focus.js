var app = angular.module("myApp", []).controller("myController", ['$scope', function ($scope) {
    $scope.focusinControl = function () {
        alert("hello");
    }
}]);
app.directive('focus', function($timeout, $parse){
    return{
        link: function($scope, element, attrs){
         var model = $parse(attrs.focus);
         $scope.$watch(model, function(value){
             if(value == true){
                 $timeout.neroFocus = function(){
                     element[0].focus();
                 };
             }
         });
        }
    };
});