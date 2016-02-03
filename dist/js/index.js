/**
 * Created by taox on 15-12-16.
 */
requirejs.config({
    baseUrl: 'js',
    paths: {
        angular: 'angular.min'
    }
});

require(['angular'], function () {
    angular.module('index-app', [])
        .controller('homeCtrl', ['$scope', function ($scope) {
            $scope.stopPropagation = function (e) {
                e.stopPropagation();
            };
            $scope.closeModal = function () {
                $scope.showUpload=false;
                $scope.showChart=false;
            };
            //控制mask中各自modal的状态。
            $scope.closeMask = function(){
                $scope.isLog=false;
                $scope.closeLog=false;      //登陆
                $scope.isReg=false;
                $scope.closeReg=false;      //注册
                $scope.showSmp=false;       //注册声明
                $scope.isMask=false;        //mask

                $scope.closeReset1 = false;
                $scope.isReset1 = false;    //选择验证方式
                $scope.closeReset2 = false;
                $scope.isReset2 = false;    //手机验证
                $scope.closeReset3 = false;
                $scope.isReset3 = false;    //邮箱验证步骤1
                $scope.closeReset4 = false;
                $scope.isReset4 = false;    //邮箱验证步骤2
                $scope.closeReset5 = false;
                $scope.isReset5 = false;    //重置密码
                $scope.closeReset6 = false;
                $scope.isReset6 = false;    //重置成功
                $scope.closeOauth1 = false;
                $scope.isOauth1 = false;    //第三方登陆绑定新账号
                $scope.closeOauth2 = false;
                $scope.isOauth3 = false;    //绑定已有账号

            }
        }]
    );
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function () {
        angular.bootstrap($html, ['index-app']);
    });
});

