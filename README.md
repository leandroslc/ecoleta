Can't speak portuguese? Don't worry, read the [English version](docs/en/README.md).

<h1 align="center">
  <img src="docs/logo.svg" />
  <br>
  Ecoleta
</h1>

<p align="center">
  Uma API REST, aplicação web e <em>mobile</em> para facilitar o descarte correto de lixo reciclável. 🌳
</p>
<p align="center">
  <em>
    Construído durante a <u>Next Level Week #1</u> da <a href="https://rocketseat.com.br/">Rocketseat</a>. 🚀
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

## :book: Propósito
Diferentemente do projeto original, este repositório é um ambiente de prática que inclui recursos aprimorados e ferramentas, como:

- Manutenção de pacotes com [Lerna](https://lerna.js.org).
- Gerenciamento de dependências com [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces).
- _Linters_: [stylelint](https://stylelint.io), [eslint](https://eslint.org), [prettier](https://prettier.io), [lintstaged](https://github.com/okonet/lint-staged).
- Git _hooks_ com [husky](https://github.com/typicode/husky).
- Integração com banco de dados usando [TypeORM](https://typeorm.io).
- Testes usando [Jest](https://jestjs.io), incluindo [cobertura de testes](https://codecov.io/gh/leandroslc/ecoleta).
- Integração Contínua com [GitHub Actions](https://github.com/leandroslc/ecoleta/actions).

## :rocket: Início Rápido
- Instale o [Node](https://nodejs.org) e o [Yarn](https://classic.yarnpkg.com).
- Execute os comandos `yarn` e `yarn bootstrap` **na raiz do repositório**.
- Acesse um dos projetos em `packages/{projeto}` e execute o comando `yarn start` para iniciar o ambiente de desenvolvimento.

## :briefcase: Projetos

- [@ecoleta/api](/packages/api) | Backend.
