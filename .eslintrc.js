module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true,
    typescript: true
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'airbnb-typescript/base', 'sql'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    'sql/format': [
      2,
      {
        ignoreExpressions: false,
        ignoreInline: true,
        ignoreTagless: true
      }
    ],
    'sql/no-unsafe-query': [
      2,
      {
        allowLiteral: false
      }
    ]
  }
};
