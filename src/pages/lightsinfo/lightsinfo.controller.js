
export default class AccessHistoryController {

    constructor(Api, toastr) {
        "ngInject";

        //injections
        this.Api = Api;
        this.toastr = toastr;

        //datas
        this.historys = this.Api.one('reports').all('lightshistory').getList().$object;
        
        // this.today = new Date();
        // this.currMonthInfo = this.Api.all('reports').one('currentmonthlightinfo').get().$object;
        // this.loadChartData();
    }

    // loadChartData() {
    //     this.series = ['Consumo'];
    //     this.colors = ['#ff8e72'];

    //     const onGetChartData = (res) => {
    //         this.labels = res.map(it => it.label);
    //         this.data = [res.map(it => it.value)];
    //     };

    //     this.Api.all('reports').all('monthlighthistory').getList()
    //         .then(onGetChartData)
    //         .catch(err => this.toastr.error('Ops! Ocorreu um erro ao buscar o relatório mensal!'));
    // }
}