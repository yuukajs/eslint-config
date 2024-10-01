module.exports = {
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],

  parser: '@typescript-eslint/parser',

  plugins: [
    '@typescript-eslint',
    '@stylistic/ts'
  ],

  rules: {
    'array-callback-return': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'dot-notation': 'off',
    'generator-star-spacing': ['error', 'after'],
    'max-len': ['warn', 160],
    'multiline-ternary': 'off',
    'no-alert': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-ex-assign': 'off',
    'no-labels': 'off',
    'no-mixed-operators': 'off',
    'no-new': 'off',
    'no-use-before-define': 'off',
    'no-return-assign': 'off',
    'no-sequences': 'off',
    'no-useless-escape': 'off',
    'one-var': 'off',
    'operator-linebreak': ['error', 'before'],
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
    'valid-typeof': 'off',
    'yield-star-spacing': ['error', 'after'],

    // n
    'n/no-callback-literal': 'off',

    // typescript
    'import/export': 'off',
    '@typescript-eslint/array-type': 'error',

    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    'func-call-spacing': 'off',
    '@stylistic/ts/func-call-spacing': 'error',

    'keyword-spacing': 'off',
    '@stylistic/ts/keyword-spacing': 'error',

    '@typescript-eslint/no-explicit-any': 'off',

    'camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',

      // group selectors
      { selector: 'default', format: ['camelCase', 'UPPER_CASE'], leadingUnderscore: 'allow' },
      { selector: 'import', format: ['camelCase', 'UPPER_CASE', 'PascalCase'], leadingUnderscore: 'allow' },
      { selector: ['variableLike', 'memberLike'], format: ['camelCase', 'UPPER_CASE', 'PascalCase'], leadingUnderscore: 'allow' },
      { selector: ['typeLike'], format: ['PascalCase'] },

      // selectors
      { selector: ['function'], format: ['camelCase', 'PascalCase'], leadingUnderscore: 'allow' },
      { selector: ['enum'], format: ['UPPER_CASE', 'PascalCase'] },
      { selector: ['typeParameter'], format: ['PascalCase'] },
      { selector: ['objectLiteralProperty'], format: null },
      { selector: ['typeProperty'], format: null },
      { selector: ['typeMethod'], format: null },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
    'no-redeclare': 'off',

    // https://typescript-eslint.io/docs/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    'no-undef': 'off',

    'indent': ['warn', 2, { offsetTernaryExpressions: false, SwitchCase: 1 }],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/issues/239
    'no-inner-declarations': 'off',

    'no-useless-constructor': 'off',

    'quote-props': 'off',

    'semi': 'off',
    '@stylistic/ts/semi': ['error', 'never'],
    '@stylistic/ts/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],

    'space-before-function-paren': 'off',
    '@stylistic/ts/space-before-function-paren': ['error', { anonymous: 'always', asyncArrow: 'always', named: 'never' }],
    '@stylistic/ts/type-annotation-spacing': 'error',
  },

  overrides: [
    {
      files: ['**/test/**', '**/tests/**'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
}
