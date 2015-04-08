(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('mainCtrl', mainCtrl);

    /* @ngInject */
    function mainCtrl($log, $scope) {
        var vm = this;
        $scope.$on('postEvent', broadcastPost);

        ////////////////

        function broadcastPost(event, data){
          $scope.$broadcast('savePostEvent', data);
          event.stopPropagation();
        }
    }
})();