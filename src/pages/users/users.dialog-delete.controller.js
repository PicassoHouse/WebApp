
export default class UserConfirmDeleteCtrl {

    constructor($scope, $uibModalInstance, user) {
        "ngInject";

        //DI
        this.$scope = $scope;
        this.$uibModalInstance = $uibModalInstance;

        //model
        this.user = user;
    }

    ok() {
        this.$uibModalInstance.close();
    }

    cancel() {
        this.$uibModalInstance.dismiss('cancel');
    }
}