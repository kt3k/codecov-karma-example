# codecov-karma example

[![CircleCI](https://circleci.com/gh/kt3k/codecov-karma-example.svg?style=svg)](https://circleci.com/gh/kt3k/codecov-karma-example)
[![codecov.io](http://codecov.io/github/kt3k/codecov-karma-example/coverage.svg?branch=master)](http://codecov.io/github/kt3k/codecov-karma-example?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/kt3k/codecov-karma-example.svg)](https://greenkeeper.io/)

> An example repository for showing how to generate the codecov reports with Karma testing framework.

# How to make codecov report with karma (with circle-ci)

First, `git init` and `npm init` and then,

```sh
npm install --save-dev karma karma-coverage codecov
karma init
```

And then edit karma.conf.js and modify `preprocessor`, `reporters` and `coverageReporter` properties.
```js
  preprocessor: {
    'src/**/*.js': ['coverage']
  },

  reporters: ['progress', 'coverage'],

  coverageReporter: {
    reporters: [{type: 'lcov'}]
  }, 
```

***Note*** If you prefer to use `browserify` in testing, you should check `karma-browserify` and `browserify-istanbul` and don't use `coverage` preprocessor directly which doesn't work with `karma-browserify`.

And then add scripts to package.json
```json
  "scripts": {
    "test": "karma start karma.conf.js",
    "codecov": "codecov"
  },
```

And then edit `circle.yml` (for example).
```yml
test:
  post:
    - npm run codecov
```

And then turn on the repository setting on circle-ci UI and push the change to github and you'll see the coverage report on codecov.io website.
