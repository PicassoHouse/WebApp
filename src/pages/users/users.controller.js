
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

}