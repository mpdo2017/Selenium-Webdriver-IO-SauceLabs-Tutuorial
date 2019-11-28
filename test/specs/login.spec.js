const loginPage = require('../pages/login.page');
const expect = require('chai').expect;

describe('Login', () =>{
    beforeEach(() => {
        browser.url('/');

    });

    it( 'should be able to login with the standard user',() => {
        loginPage.loginWithStandardUser();
        expect(browser.getUrl().to.include('/inventory.html'));
    });

    it('pageLoad and speedIndex has exceeded the baseline metrics', () =>{
        const performance = browser.execute('sauce:performance', {
            name: 'Login',
            metrics: ['speedIndex', 'load'],
        });
        const {result, details} = performance;

        const msg = 'Regression detected for metrics ' + JSON.stringify(details, null, 4);
        return expect(result, msg).to.equal('pass');
    });
});
