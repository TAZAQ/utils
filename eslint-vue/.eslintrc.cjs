/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'standard',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  "rules": {
    indent: ['error', 2],

    // JS rules
    "spaced-comment": 0,
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }],
    "object-shorthand": ["error", "always", { "avoidExplicitReturnArrows": true }],
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "never", "prev": "empty", "next": "return" },
      { "blankLine": "always", "prev": "*", "next": "function" },
      { "blankLine": "never", "prev": "empty", "next": "function" }
    ],
    "lines-between-class-members": ["error", "always"],
    "arrow-parens": ["error", "always"],
    "no-else-return": "warn",
    "object-curly-spacing": ["error", "always"],
    "no-console": ["error", { "allow": ["warn", "error", "info", "debug"] }],

    // vue rules
    "vue/component-name-in-template-casing": ["error", "kebab-case", { "registeredComponentsOnly": false }],
    "vue/no-unused-vars": "warn",
    "vue/no-v-html": "off",

    // jest rules
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",

    // typescript rules
    "@typescript-eslint/array-type": ["error", { "default": "array-simple", "readonly": "array-simple" }],
    "@typescript-eslint/class-literal-property-style": ["error", "fields"],
    "@typescript-eslint/explicit-member-accessibility": ["warn", { "accessibility": "no-public" }],
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
        "delimiter": "semi",
        "requireLast": true
      },
      "singleline": {
        "delimiter": "semi",
        "requireLast": false
      },
      "multilineDetection": "brackets"
    }],
    "@typescript-eslint/member-ordering": ["error", {
      "classes": [
        "public-static-field",
        "protected-static-field",
        "private-static-field",

        "public-static-method",
        "protected-static-method",
        "private-static-method",

        "public-instance-field",
        "protected-instance-field",
        "private-instance-field",

        "constructor",

        "public-instance-method",
        "protected-instance-method",
        "private-instance-method"
      ]
    }],
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/prefer-for-of": ["warn"],
    "@typescript-eslint/no-var-requires": ["off"]
  }
}
