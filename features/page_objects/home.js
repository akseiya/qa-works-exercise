const { Page } = require('./common');
const wdio = browser;

const pry = require('pryjs')

class HomePage extends Page {
    static url() { return '/' } // baseUrl is in wdio config file
    static contactFormInput(which) {
        const inputsSelectors = {
            name: 'form input[name="your-name"]',
        };
        if (!inputsSelectors[which])
            throw new Error(`Uknown contact form input: ${which}`);
        const input = wdio.element(inputsSelectors[which]);
        // eval(pry.it);
        return input;
    }
    static sendEnquiry() {
        wdio.click('#qaworks-enquiry');
    }
}

module.exports = { HomePage };
