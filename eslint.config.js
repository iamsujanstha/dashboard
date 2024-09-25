import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tsParser from '@typescript-eslint/parser' // Import the parser
import tseslint from '@typescript-eslint/eslint-plugin'

export default [
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['dist'], // Use 'ignores' to ignore certain directories
    languageOptions: {
      parser: tsParser, // Use the imported parser object
      ecmaVersion: 2020,
      globals: globals.browser, // Define globals here
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // Spread recommended rules for react-hooks
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
    },
  },
]
