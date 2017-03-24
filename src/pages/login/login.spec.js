'use strict';

describe('picassohouse.dashboard module', () => {

    beforeEach(module('picassohouse.dashboard'));

    describe('dashboard controller', () => {

        it('should to be defined', inject(($controller) => {
            const dashboardCtrl= $controller('DashboardCtrl');
            expect(dashboardCtrl).toBeDefined();
        }));

    });
});