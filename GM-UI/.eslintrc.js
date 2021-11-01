// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                vue: 'never',
            },
        ],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': [
            'error',
            {
                optionalDependencies: ['test/unit/index.js'],
            },
        ],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'indent': 'off',
        'vue/script-indent': [
            'error',
            4,
            {
                'baseIndent': 1
            }
        ],
        // 强制使用一致的换行风格
        "linebreak-style": [1, "unix"],
        "semi": 0,
    }
}