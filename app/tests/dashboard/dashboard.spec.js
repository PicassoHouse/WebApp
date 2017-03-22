'use strict';

describe('picassohouse.dashboard module', function () {

    beforeEach(module('picassohouse.dashboard'));

    describe('dashboard controller', function () {

        it('should to be defined', inject(function ($controller) {
            var dashboardCtrl = $controller('DashboardCtrl');
            expect(dashboardCtrl).toBeDefined();
        }));
    });
});