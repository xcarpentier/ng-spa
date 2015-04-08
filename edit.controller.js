(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('editCtrl', editCtrl);

    /* @ngInject */
    function editCtrl($scope) {
        var vm = this;
        vm.post = {};
        vm.addPost = addPost;
        vm.numberOfCar = numberOfCar;

        ////////////////

        function addPost(post){
          post.createdAt = new Date().getTime();
          post.titleLength = numberOfCar(post.title);
          post.contentLength = numberOfCar(post.content);
          $scope.$emit('postEvent', post);
          $scope.post = {};
          $scope.form.$setPristine();
          $scope.form.$setUntouched();
        }

        function numberOfCar(text){
            return text ? (text + '').length : 0;
        }
    }
})();