
export default class DashboardController {

    constructor(Api, toastr) {
        "ngInject";
        this.message = "This is my Dashboard";
        // toastr.info("Do you know something?");
    }

    showAlert () {
        alert("My Alert");
    }
}