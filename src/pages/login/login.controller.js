
export default class LoginController {

    constructor($state, Api, toastr) {
        "ngInject";
        this.$state = $state;
        this.Api = Api;
        this.toastr = toastr;

        this.message = "This is the Login Page";
        this.credentials = {
            username : '',
            password : ''
        };
    }

    login () {
        this.Api.service("auth").post(this.credentials).then((res) => {
            if (!res.success) throw res.message;

            localStorage.setItem("token", res.access_token);
            this.$state.go('app.dashboard');
        }).catch(err => this.toastr.error(err));

    }
}