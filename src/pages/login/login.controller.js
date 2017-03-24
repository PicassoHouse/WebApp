
export default class LoginController {

    constructor($state, Api) {
        "ngInject";
        this.$state = $state;
        this.Api = Api;
        this.message = "This is the Login Page";
    }

    login () {
        localStorage.setItem("token", "any token");
        this.$state.go('app.dashboard');
    }
}