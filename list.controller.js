(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('listCtrl', listCtrl);

    /* @ngInject */
    function listCtrl($scope) {
        var vm = this;
        vm.articles = [];
        $scope.$on('savePostEvent', addPostToArticles);

        ////////////////

        function addPostToArticles(event, data){
          vm.articles.push(data);
        }

    }
})();