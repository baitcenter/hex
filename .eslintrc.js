/* eslint-env node */

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'arrow-parens': [2, 'always'],
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    camelcase: [2, { properties: 'never' }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, { after: true, before: false }],
    'comma-style': [2, 'last'],
    'consistent-this': [2, '_this'],
    curly: ['error', 'multi-line'],
    'dot-notation': 2,
    'eol-last': 2,
    indent: [2, 2, { SwitchCase: 1 }],
    'key-spacing': [2, { beforeColon: false, afterColon: true, mode: 'minimum' }],
    'keyword-spacing': [2, {}],
    'linebreak-style': [2, 'unix'],
    'lines-around-comment': [2, { beforeLineComment: true, allowBlockStart: true, allowObjectStart: true }],
    'no-empty': [2, { allowEmptyCatch: true }],
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-with': 2,
    'one-var': [2, 'never'],
    'quote-props': [2, 'as-needed'],
    quotes: [2, 'single', { avoidEscape: true }],
    semi: [2, 'always'],
    'semi-spacing': [2, { before: false, after: true }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, { words: false, nonwords: false }],
    'wrap-iife': 2,
    yoda: [2, 'never'],
    'ember/no-jquery': 'error'
  },
  overrides: [

    // node files
    {
      files: [
        '.template-lintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js'
      ],
      excludedFiles: [
        'addon/**',
        'addon-test-support/**',
        'app/**',
        'tests/dummy/app/**'
      ],
      parser: 'espree',
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here
      })
    }
  ]
};
