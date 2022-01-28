module.exports = {
  extends: ['airbnb'],
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    'one-var': 'off',
    'no-var': 'off',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'padded-blocks': 'off',
    'arrow-body-style': 'off',
    'no-spaced-func': 'off',
    'func-call-spacing': 'off',
    'no-unexpected-multiline': 'off',
    'prefer-destructuring': 'warn',
    'react/jsx-closing-bracket-location': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'react/jsx-filename-extension': 'off',
    'linebreak-style': 0,
    'import/prefer-default-export': 'warn',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
