import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    "parser": "@typescript-eslint/parser",
    extends: [js.configs.recommended, "eslint:recommended", "plugin:@typescript-eslint/recommended"],
    files: ['**/*.{ts,tsx}'],
    // globals: globals.browser,
    // plugins: {
    //   'react-hooks': reactHooks,
    //   'react-refresh': reactRefresh,
    // },
    rules: {
      // ...reactHooks.configs.recommended.rules,
      // 'react-refresh/only-export-components': [
      //   'warn',
      //   { allowConstantExport: true },
      // ],
      "sort-imports":
        [
          "error",
          {
            "ignoreCase": true,
            "ignoreDeclarationSort": true
          }
        ],
    },
  },
)
