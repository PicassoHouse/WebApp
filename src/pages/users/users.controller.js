
export default class UsersController {

    constructor(Api, toastr) {
        "ngInject";

        //dependencies
        this.Api = Api;
        this.toastr = toastr;

        //pproperties
        this.users = []; 

        //initialize
        this.loadUsers();
    }

    loadUsers() {
        this.Api.all("users").getList().then((users) => {
            this.users = users;
        }).catch(err => this.toastr.error(err));
    }

    deleteUser(user) {
        user.remove()
            .then((res) => {
                this.users = this.users.filter(el => el != user);
                this.toastr.success('Usuário removido com sucesso!');
            }).catch(err => this.toastr.error('Não foi possível remover usuário!'));
    }

}