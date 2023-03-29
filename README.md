# eslint-config-la-react

A collection of configs for Eslint, Prettier and Stylelint

## Setup

Install the library

```bash
npm install --save-dev @liveauctioneers/eslint-config-la-react
```

Install dependencies

```bash
npm install --save-dev babel-eslint@^10.0.3 eslint@^6.8.0 eslint-config-prettier@^6.10.0 eslint-plugin-flowtype@^4.6.0 eslint-plugin-import@^2.20.1 eslint-plugin-jest@^23.7.0 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react@^7.18.3 eslint-plugin-react-hooks@^2.3.0 prettier@^1.19.1 stylelint@^13.1.0 stylelint-config-prettier@^8.0.1 stylelint-config-standard@^20.0.0 stylelint-config-styled-components@^0.1.1 stylelint-processor-styled-components@^1.9.0
```

## Usage

### Eslint

```js
module.exports = {
    extends: ['@liveauctioneers/eslint-config-la-react'],
    globals: {
        __DEVELOPMENT__: true,
        __DISABLE_SSR__: true,
        webpackIsomorphicTools: true,
    },
};
```

### Prettier

```js
module.exports = require(require
    .resolve('@liveauctioneers/eslint-config-la-react')
    .replace('index.js', '.prettierrc.js'));
```

### Stylelint

```js
module.exports = require(require
    .resolve('@liveauctioneers/eslint-config-la-react')
    .replace('index.js', '.stylelintrc.js'));
```
