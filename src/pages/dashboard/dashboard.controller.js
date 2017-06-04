
export default class DashboardController {

    constructor(Api, toastr) {
        "ngInject";
        //DI
        this.Api = Api;
        this.toastr = toastr;

        //data
        this.isHomeLocked = false;
        this.loadHome();

        this.rooms = Api.all("rooms").getList().$object;
    }

    loadHome() {
        this.Api.one("house").get()
            .then(res => {this.isHomeLocked = res.isLocked })
            .catch(err =>  console.log(err));
    }

    switchLightStatus(room) {
        this.Api.all("house").customPOST({}, "turnlighton", {
            room_id : room.room_id,
            on : room.isLightOn
        }, {});
    }

    lockHome(lock) {
        this.Api.all("house").customPOST({}, "lockHouse", { lock }, {});
    }

    openGarage(open) {
        this.Api.all("house").customPOST({}, "openGarage", { open }, {});
    }

    openWindows(open) {
        this.Api.all("house").customPOST({}, "openWindows", { open }, {});
    }
}