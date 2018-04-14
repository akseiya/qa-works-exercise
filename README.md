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

## Highlights

### Why WDIO?

Because I have only _reviewed_ test suites in WDIO so far. My impression was that
of little flexibility and but a few particularly impressive advantages over pure
Selenium, particularly when it comes to situations requiring extra parallelism
or any other customisation in e.g. how Cucumber is run.

### Why all the shellscripts, do you have too much time?

In my last position I took part in several QA candidate interviews and code
exercise reviews. I noticed that most of my colleagues were considerably
unhappy when the test suite didn't run out of the box. While I didn't want to
shoulder the cost of dockerisation right now, I also didn't want to cause
such disappointment.
