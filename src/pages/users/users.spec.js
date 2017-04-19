'use strict';

describe('picassohouse.users module', () => {

    beforeEach(module('picassohouse.users'));

    describe('users controller', () => {

        it('should to be defined', inject(($controller) => {
            const usersCtrl= $controller('UsersController');
            expect(usersCtrl).toBeDefined();
        }));

    });
});