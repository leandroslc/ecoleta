Não sabe falar inglês? Leia a [versão em português](docs/pt-br/README.md).

<h1 align="center">
  <img src="docs/logo.svg" />
  <br>
  Ecoleta
</h1>

<p align="center">
  A REST API, web and mobile application to assist the correct disposal of recyclable items. 🌳
</p>
<p align="center">
  <em>
    Built during the <u>Next Level Week #1</u> by <a href="https://rocketseat.com.br/">Rocketseat</a>. 🚀
  </em>
</p>

<div align="center">
  <a href="https://github.com/leandroslc/ecoleta/actions?query=workflow%3ABuild">
    <img src="https://github.com/leandroslc/ecoleta/workflows/Build/badge.svg" alt="Build status" />
  </a>
  <a href="https://codecov.io/gh/leandroslc/ecoleta">
    <img src="https://codecov.io/gh/leandroslc/ecoleta/branch/master/graph/badge.svg" />
  </a>
  <a href="https://lerna.js.org/">
    <img src="https://img.shields.io/badge/Maintained%20with-lerna-cc00ff.svg" alt="Maintained with lerna" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-32a867.svg" alt="MIT License" />
  </a>
  <img src="https://img.shields.io/badge/NLW-%231-32a867.svg" alt="NLW #1" />
</div>

## :book: Purpose
Differently from the original project (which is great for a week :smile:), this repository is a playground environment which includes improved resources and tools, like:

- Package maintenance with [Lerna](https://lerna.js.org).
- Dependency management with [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces).
- Linters: [stylelint](https://stylelint.io), [eslint](https://eslint.org), [prettier](https://prettier.io), [lintstaged](https://github.com/okonet/lint-staged).
- Git hooks with [husky](https://github.com/typicode/husky).
- Database integration using [TypeORM](https://typeorm.io).
- Tests using [Jest](https://jestjs.io), including [test coverage](https://codecov.io/gh/leandroslc/ecoleta).
- Continuous Integration with [GitHub Actions](https://github.com/leandroslc/ecoleta/actions).

## :rocket: Quick Start
- Install [Node](https://nodejs.org) and [Yarn](https://classic.yarnpkg.com).

> At the root of the repository:
- Run the commands `yarn` and `yarn bootstrap`.
- Prepare the development database by running `yarn migrate`.
- And run the command `yarn start:{project}` to start one of the aplications listed below.

## :briefcase: Projects

Name                               | Description         |
:--------------------------------- | :------------------ |
&#9745; [api](/packages/api)       | API                 |
&#9744; [web](/packages/web)       | Web application     |
&#9744; [mobile](/packages/mobile) | Mobile application  |
