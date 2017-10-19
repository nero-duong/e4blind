var app = angular.module("myApp", []);
//khai bao gia tri mac dinh bang inject value
app.value("giatrimacdinh", 15);

app.controller("myController", function($scope, giatrimacdinh){
    $scope.num = giatrimacdinh;
    $scope.nero_template;
    $scope.learnFun = function () {
        $scope.nero_template = ""+$scope.myVarBook + "/" + $scope.myVarUnit;
        console.log($scope.myVarBook + "/" + $scope.myVarUnit);
    }
});
/*Dinh nghia mot directive*/
app.directive("myDirective", function () {
    return{
        restrict: "EA",
        scope: false,
        template: "<div><h3>Start template</h3></div>"
    };
});
