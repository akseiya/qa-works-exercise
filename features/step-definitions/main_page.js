import defineSupportCode from 'cucumber';
import HomePage from '../page_objects/home'

defineSupportCode(( { Given, Then } ) => {

    Given(/I am on the QAWorks Site$/, () => {
        HomePage.open();
    })

});