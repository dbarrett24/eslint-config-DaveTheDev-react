/**
 * A shared stylelint config
 *
 * @see https://stylelint.io/user-guide/configuration
 * @see https://www.styled-components.com/docs/tooling#stylelint
 */
module.exports = {
    processors: [
        [
            'stylelint-processor-styled-components',
            {
                ignoreFiles: ['**/*.css', '**/*.less', '**/*.sass', '**/*.scss'],
            },
        ],
    ],
    customSyntax: '@stylelint/postcss-css-in-js',
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-standard',
        'stylelint-config-styled-components',
        'stylelint-config-prettier',
    ],
    plugins: ['stylelint-declaration-strict-value'],
    rules: {
        'value-keyword-case': null,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['content', 'else', 'if', 'include', 'mixin', 'extend'],
            },
        ],
        'declaration-block-trailing-semicolon': null,
        'font-family-no-missing-generic-family-keyword': null,
        'no-descending-specificity': null,
        'no-missing-end-of-source-newline': null,
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global'],
            },
        ],
        'scale-unlimited/declaration-strict-value': [
            ['/color$/', 'fill', 'stroke'],
            {
                ignoreVariables: true,
                ignoreFunctions: false,
                ignoreValues: ['/\\$dummyValues?/', 'inherit', 'unset', 'transparent', 'none'],
            },
        ],
    },
};