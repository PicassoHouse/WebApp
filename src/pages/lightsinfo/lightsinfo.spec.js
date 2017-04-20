'use strict';

describe('picassohouse.lightsinfo module', () => {

    beforeEach(module('picassohouse.lightsinfo'));

    describe('lightsinfo controller', () => {

        it('should to be defined', inject(($controller) => {
            const ctrl = $controller('LightsInfoController');
            expect(ctrl).toBeDefined();
        }));

    });
});