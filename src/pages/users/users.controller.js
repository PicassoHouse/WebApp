
export default class UsersController {

    constructor($state, $uibModal, Api, toastr) {
        "ngInject";

        //dependencies
        this.$state = $state;
        this.Api = Api;
        this.toastr = toastr;
        this.$uibModal = $uibModal;

        //pproperties
        this.users = []; 
        this.userModel = {
            username: '',
            displayName: '',
            password : '',
            role: 'guest',
            auth_code : ''
        };

        //initialize
        this.loadUsers();
    }

    loadUsers() {
        this.Api.all("users").getList().then((users) => {
            this.users = users;
        }).catch(err => this.toastr.error(err));
    }

    deleteUser(user) {
        const confirm = this.$uibModal.open({
            animation: true,
            templateUrl: 'userModalConfirmDelete.html',
            controller: 'UserConfirmDeleteCtrl',
            controllerAs : '$ctrlDialog',
            bindToController : true,
            resolve: {
                user : user
            }
        });

        confirm.result.then(() => {
            user.remove()
                .then(() => {
                    this.users = this.users.filter(el => el != user);
                    this.toastr.success('Usuário removido com sucesso!');
                }).catch(err => this.toastr.error('Não foi possível remover usuário!'));
        });
    }

    addUser(userModel) {
        this.Api.all('users').post(userModel).then(res => {
                this.toastr.success("Usuário salvo com sucesso!");
                this.$state.reload('app.users');
            })
            .catch(err => this.toastr.error(err));
    }

}