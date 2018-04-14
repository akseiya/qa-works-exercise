const clog = (item) => console.log(JSON.stringify(item,null,4));

const { defineSupportCode } = require('cucumber');
const { HomePage } = require('../page_objects/home');

defineSupportCode(({Given,When,Then}) => {
    Given(/I am on the QAWorks Site$/, () => {
        HomePage.open();
    });

    When(/I fill the contact form with the following information:$/, (dataTable) => {
        dataTable.rawTable.forEach((item) => {
            const [input, content] = item;
            HomePage.contactFormInput(input).setValue(content);
        })
    });

    Then(/I should be able to contact QAWorks/, () => {
        console.log('I am the serpent king. I can do anything.');
    });
});

