---
sidebar_position: 1
---
# Introduction

stable: [metahkg.org](https://metahkg.org)

dev build: [dev.metahkg.org](https://dev.metahkg.org)

[![React](https://badges.aleen42.com/src/react.svg)](http://reactjs.org/)
[![Nodejs](https://badges.aleen42.com/src/node.svg)](https://nodejs.org)
[![Typescript](https://badges.aleen42.com/src/typescript.svg)](https://www.typescriptlang.org/)

[![Gitlab](https://badges.aleen42.com/src/gitlab.svg)](https://gitlab.com/metahkg/metahkg)
[![Github](https://badges.aleen42.com/src/github.svg)](https://github.com/metahkg/metahkg)
[![License](https://img.shields.io/gitlab/license/metahkg/metahkg)](https://gitlab.com/metahkg/metahkg/-/tree/master/LICENSE.md)

[![Telegram](https://patrolavia.github.io/telegram-badge/chat.svg)](https://t.me/+WbB7PyRovUY1ZDFl)
[![Discord](https://img.shields.io/discord/992390401740775555)](https://discord.gg/yrf2v8KGdc)

## About

This is the Metahkg documentation. You can learn about how to deploy, use the api, and develop Metahkg.

## Repos

This repository contains four sub-repositories:

- metahkg-web
- metahkg-server
- metahkg-links
- metahkg-api

Projects on the same branch should follow a same major version. Note that there might be delays, make sure to pull new changes from the sub-repositories, as this repository is not frequently updated.

## Versioning

All sub-projects here follow a same versioning, major.minor.patch.

Packages with the same minor version are fully compatibile.
Packages with the same major but not minor version are highly compatibile.
Packages with different major versions have few to no compatibility.

e.g. metahkg-server v2.5.1 would be fully compatibile with metahkg-api v2.5.x and metahkg-web v2.5.x, and vice versa.

## Branches

`dev` branch is the development branch, where new features and versions are developed.
`master` branch is a maintained snapshot (bug fixes only) of the `dev` branch, and would be updated to a different snapshot after some development in the `dev` branch.

If you with to contribute, please develop base on the `dev` branch. See [CONTRIBUTING.md](https://gitlab.com/metahkg/metahkg/-/blob/dev/CONTRIBUTING.md) for more information.

[metahkg.org](https://metahkg.org) runs the latest `master` branch code, while [dev.metahkg.org](https://dev.metahkg.org) runs the latest `dev` branch code. They are updated to use the latest docker images every hour.

## Api docs

See [here](/docs/category/api) for the api docs.

## Metahkg Api Client

See [gitlab.com/metahkg/metahkg-api](https://gitlab.com/metahkg/metahkg-api) for the typescript api client.

# Getting Started

Get started by trying a [deployment](./deploy).

### What you'll need

See [requirements](./deploy/setup/requirements) for more information.
