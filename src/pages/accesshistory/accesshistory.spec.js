'use strict';

describe('picassohouse.accesshistory module', () => {

    beforeEach(module('picassohouse.accesshistory'));

    describe('accesshistory controller', () => {

        it('should to be defined', inject(($controller) => {
            const ctrl = $controller('AccessHistoryController');
            expect(ctrl).toBeDefined();
        }));

    });
});