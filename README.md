# QA Works exercise

## Pre-requisites

The test is implemented with [Webdriver.io][wdio] without portability handling,
which means following prerequisites:
- Linux host machine with Curl and Java JDK 1.8
- Node.js 6.11.2
- working Internet connection

[wdio]: http://webdriver.io
[getnode]: https://nodejs.org/en/download/

## Running

Use the provided [`run.sh`][runsh] script.

[runsh]: ./run.sh

## Nitpicking

While the technical challenge includes acceptance criteria for itself,
the test to be implemented lacks them.

- When can we say that the user has, indeed, succeeded in contacting QA Works?
- When viewing the main page on a desktop device with HD screen, I can see
  that nice big _NEED SOME QA ADVICE?_ straight away; in Chrome's mobile mode
  it needs some scrolling to show up - I did however assume that these checks
  belong in visual tests with, say, Applitools - not in functional features
  with a webdriver.

Scenario provided mixes an action with its expected results (`When` before
<nobr>a `Then`</nobr>). I took the liberty to split them while investigating
an obscure error message from WDIO miscommunicating with Cucumber.

Data table does not follow usual Gherkin conventions*, although it can be used and
its format does make sense for a single example with multiple inputs.

*) I actually did enounter advice to use something like below instead, even for
   a single input set:
   ```
   | name     | subject         | email                | message                                   |
   | j.Bloggs | test automation | j.Bloggs@qaworks.com | please contact me I want to find out more |
   ```

Email address used as input is within `qaworks.com` domain. I assume that, when
used for an initial contact form, any email from within `qaworks.com` is
considered a test account and does not skew traffic stats.

## Highlights

### Why WDIO?

Because I have only _reviewed_ test suites in WDIO so far. My impression was that
of little flexibility* and but <nobr>a few</nobr> particularly impressive
advantages over pure Selenium. I did not, however, properly explore WDIO's
capabilities for cross-browser testing with equal(?) treatment of desktop and
mobile platforms.

*) e.g. when it comes to situations requiring extra parallelism which means
customer commands to start Cucumber.js

#### _I have made a huge mistake_

Currently WDIO doesn't seem exactly on top of changes in Cucumber.js:
- Cucumber.js installed by WDIO deprecates `defineSupportCode` and prescribes
  importing Gherkin verbs directly; however, attempting
  ```js
  const { Given, When, Then } = require('cucumber');
  ```
  has resulted, for me, with
  ```
  ERROR: Cannot read property 'split' of undefined
  phantomjs
  ```
  which I have, after some investigation, tracked to `{ Given, When, Then}`
  being an empty object after the import. Restoring the old fashion of
  importing Cucumber interface restored WDIO's ability to run tests.

### Why all the shellscripts, do you have too much time?

In my last position I took part in several QA candidate interviews and code
exercise reviews. I noticed that most of my colleagues were considerably
unhappy when the test suite didn't run out of the box. While I didn't want to
shoulder the cost of dockerisation right now, I also didn't want to cause
such disappointment.
