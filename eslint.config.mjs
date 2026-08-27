import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
    {
        ignores: ['dist/', 'node_modules/'],
    },

    js.configs.recommended,

    ...tseslint.configs.recommended,

    ...vue.configs['flat/recommended'],

    {
        files: ['**/*.{ts,vue}'],

        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
            },
            globals: globals.browser,
        },

        rules: {
            'no-console': 'warn',
            'no-debugger': 'warn',

            'vue/multi-word-component-names': 'off',
        },
    },

    eslintConfigPrettier,
)
