
export default class AccessHistoryController {

    constructor(Api, toastr) {
        "ngInject";

        //injections
        this.Api = Api;
        this.toastr = toastr;

        //datas
        this.historys = this.Api.one('reports').all('accesshistory').getList().$object;
    }
}