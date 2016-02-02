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
            }
        }]
    );
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function () {
        angular.bootstrap($html, ['index-app']);
    });
});

