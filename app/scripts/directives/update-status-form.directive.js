'use strict';

(function () {

  angular.module('angularTinySocialApp')
    .directive('updateStatusForm', updateStatusFormDirective);


  /**
  * @ngInject
  */
  function updateStatusFormDirective() {

    return {
      restrict: 'E',
      templateUrl: 'views/directives/update-status-form.html',
      controller: UpdateStatusFormCtrl,
      controllerAs: 'updateStatus'
    };


    ////////////


    /**
     * @ngInject
     */
    function UpdateStatusFormCtrl($resource, $scope) {

      this.send = _send;
      this.formModel = {};
      this.failSendStatus = false;

      var resource;


      ///////////////


      var vm = this;


      function _send( form ) {
        vm.failSendStatus = false;

        if( form.$invalid ) {
          return;
        }

        resource = resource || $resource('/api/status');

        resource.save(vm.formModel).$promise
          .then(_prependStatuOnView)
          .catch(_notifyUser);
      }


      function _prependStatuOnView(res) {
        $scope.$emit('newsFeed-top', [res]);
        _resetForm($scope.form);
      }


      function _notifyUser() {
        vm.failSendStatus = true;
      }


      function _resetForm(form) {
        vm.failSendStatus = false;
        _resetModel();

        if (form) {
          form.$setPristine();
        }

      }


      function _resetModel() {
        angular.forEach(vm.formModel, function (value, index) {
          vm.formModel[index] = '';
        });
      }
    }

  }

})();
