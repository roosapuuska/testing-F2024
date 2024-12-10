# testing-F2024

[![Coverage Status](https://coveralls.io/repos/github/roosapuuska/testing-F2024/badge.svg?branch=main)](https://coveralls.io/github/roosapuuska/testing-F2024?branch=main)

# Tested functions

Tested functions:

- add.js
- capitalize.js
- ceil.js
- drop.js
- eq.js
- filter.js
- get.js
- isEmpty.js
- toString.js
- upperFirst.js

# Contents of this repository

Jest is our choice so the test folder can be found under `__tests__` folder with names of `__.test.js`.

# Installation guide

To reproduce and run tests on your own local machine, here is a list to follow:

First you should install [Node.JS](https://nodejs.org/en/).
We are ensuring with our testing pipeline that these tests work with versions 14, 16 and 18.

Then follow these steps:

1. Clone/download this repository
2. run `npm install`
3. (a) Run only tests `npm test`
4. (b) Run tests with coverage report `npm run test-cov`

The coverage report will be found from the `/coverage` folder.  
If you open the `coverage/index.html` you will find a collection from all the tests and their coverages.

# Technologies

Tests are created with [Jest framework](https://jestjs.io/). Here is the [documentation](https://jestjs.io/docs/getting-started) for this framework.

Pipeline is created with [GitHub Actions](https://docs.github.com/en/actions) and coverage report is posted with [Coveralls](https://docs.coveralls.io/)
