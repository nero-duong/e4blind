$(document).ready(function () {

});

var app = angular.module('myApp', ['cfp.hotkeys']);
app.controller('myController',['$scope', '$http', '$log', function($scope,$http, $log){

    /*learnFun()*/
    $scope.learnFun =  function () {
        $scope.viewSubject = "template/view-subject.html";

    }
}]);
app.controller('unitController', ['$scope', 'hotkeys', function ($scope, hotkeys) {
    $scope.item = 0;
    $scope.showStart = true;
    $scope.showLearn = false;
    $scope.showMore = false;
    $scope.showAlpha = false;
    $scope.showBuild = false;
    $scope.showReview = false;
    $scope.showAbout = false;
    $scope.learnFun = false;

    //create the hot key
    hotkeys.add({
        combo:'ctrl+b',
        description: 'select book',
        callback:function () {
            // $scope.learnFun();
            $log.info($scope.item);
        }
    });
    hotkeys.add({
        combo:'right',
        description: 'select book',
        callback:function () {
            $scope.myClickNext();
        }
    });
    hotkeys.add({
        combo:'left',
        description: 'select book',
        callback:function () {
            $scope.myClickPrev();
        }
    });
    /*hotkey Enter*/
    hotkeys.add({
        combo:'enter',
        description: "select subject",
        callback:function(){
            $http({
                method: 'POST',
                url: 'getUnit.php'
            }).then(function (response) {
                $scope.item = response.data;
                $log.info(response.statusText);
            });
        }
    });
    /*hotkey Tab*/
    hotkeys.add({
        combo:'tab',
        description: "tab",
        callback:function (e) {
            e.preventDefault();
        }
    });
    /*hotkey esc*/
    hotkeys.add({
        combo:'esc',
        description:"",
        callback:function () {
            close();
        }
    });
    $scope.count = 0;
    $scope.myClick = function (items) {
        $scope.item = items;
        // $scope.myClickNext();
        // $scope.myClickPrev();
        if($scope.item == 6)
        {
            // $scope.item = 0;
            $scope.showStart = true; /*(0)*/
            $scope.showLearn = false; /*(1)*/
            $scope.showMore = false; /*(2)*/
            $scope.showAlpha = false; /*(3)*/
            $scope.showBuild = false; /*(4)*/
            $scope.showReview = false; /*(5)*/
            $scope.showAbout = false; /*(6)*/

        }
        else
        {
            // $scope.item++;
            switch ($scope.item){
                case 0:{
                    $scope.showStart = true; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }
                case 1:{
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = true; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }/*end case: 1*/
                case 2:{
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = true; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }/*end case 2*/

                case 3:{
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = true; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }   /*end case 3*/

                case 4:
                {
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = true; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }/*end case 4*/

                case 5:{
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = true; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }   /*end case 5*/

                case 6:{
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = true; /*(6)*/
                    break;
                }   /*end case 6*/
            }/*end switch*/

        }/*end else*/
    }

    //function myKeyPress()
    // $scope.myKeyPress = function(event){
    //     if(event.which == 39){
    //         $scope.myClickNext();
    //     }
    //     if(event.which == 37){
    //         $scope.myClickPrev();
    //     }
    //     if(event.which == 9){
    //         $scope.myClickBack();
    //     }
    // }

    $scope.myClickBack = function () {
        if($scope.item == 0){
            $scope.item = -1;
            $scope.showStart = false;
        }
        else
        {
            $scope.item = 0;
            $scope.showStart = true;
            $scope.showLearn = false;
            $scope.showMore = false;
            $scope.showAlpha = false;
            $scope.showBuild = false;
            $scope.showReview = false;
            $scope.showAbout = false;
        }

    }
    $scope.myClickPrev = function () {
        if($scope.item == 0){
            $scope.item = 6;
            $scope.showStart = false;
            $scope.showLearn = false;
            $scope.showMore = false;
            $scope.showAlpha = false;
            $scope.showBuild = false;
            $scope.showReview = false;
            $scope.showAbout = true;

        }
        else{
            $scope.item--;
            switch ($scope.item){
                case 0:{
                    $scope.showStart = true;
                    $scope.showLearn = false;
                    $scope.showMore = false;
                    $scope.showAlpha = false;
                    $scope.showBuild = false;
                    $scope.showReview = false;
                    $scope.showAbout = false;
                    break;
                }
                case 1:{
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = true; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }/*end case: 1*/
                case 2:{
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = true; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }/*end case 2*/
                case 3:{
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = true; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }   /*end case 3*/

                case 4:
                {
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = true; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }/*end case 4*/

                case 5:{
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = true; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }   /*end case 5*/

                case 6:{
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = true; /*(6)*/
                    break;
                }   /*end case 6*/
            }/*end switch*/
        }
    }
    $scope.myClickNext = function () {
        if($scope.item == 6)
        {
            $scope.item = 0;
            $scope.showStart = true; /*(0)*/
            $scope.showLearn = false; /*(1)*/
            $scope.showMore = false; /*(2)*/
            $scope.showAlpha = false; /*(3)*/
            $scope.showBuild = false; /*(4)*/
            $scope.showReview = false; /*(5)*/
            $scope.showAbout = false; /*(6)*/

        }
        else
        {
            $scope.item++;
            switch ($scope.item){
                case 0:{
                    $scope.showStart = true; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }
                case 1:{
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = true; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }/*end case: 1*/
                case 2:{
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = true; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }/*end case 2*/

                case 3:{
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = true; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }   /*end case 3*/

                case 4:
                {
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = true; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }/*end case 4*/

                case 5:{
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = true; /*(5)*/
                    $scope.showAbout = false; /*(6)*/
                    break;
                }   /*end case 5*/

                case 6:{
                    $scope.showStart = false; /*(0)*/
                    $scope.showLearn = false; /*(1)*/
                    $scope.showMore = false; /*(2)*/
                    $scope.showAlpha = false; /*(3)*/
                    $scope.showBuild = false; /*(4)*/
                    $scope.showReview = false; /*(5)*/
                    $scope.showAbout = true; /*(6)*/
                    break;
                }   /*end case 6*/
            }/*end switch*/

        }/*end else*/
    }
}]);
app.controller('neroController', ['$scope', function ($scope) {
    $scope.nero = "van deo";
}]);