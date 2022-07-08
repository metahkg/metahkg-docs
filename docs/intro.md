---
sidebar_position: 1
---
# Introduction

stable: [metahkg.org](https://metahkg.org)

dev build (probably daily): [dev.metahkg.org](https://dev.metahkg.org)

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

Metahkg is a collection of four repositories:

- metahkg-web
- metahkg-server
- metahkg-links
- metahkg-api

Projects on the same branch should follow a same major version. Note that there might be delays, make sure to pull new changes from the sub-repositories, as this repository is not frequently updated.

## Versioning

All projects follow a same versioning, based on metahkg-server's versioning, compatibility is guaranteed for a same major version.

e.g. metahkg-server v2.5.1 would be compatibile with metahkg-api v2.5.x and metahkg-web v2.5.x, and vice versa.

## Branches

Two (or one) major versions are maintained at each time, one at the master branch and another at the dev branch. The version at dev branch is in development, and rather unstable, while that in master branch is considered stable but will only receive bug fixes until the next major version is ready. All new features are developed in dev branch.

[metahkg.org](https://metahkg.org) runs the latest master branch code, while [dev.metahkg.org](https://dev.metahkg.org) runs the dev branch.

## Metahkg Api Wrapper

We have an api wrapper [here](https://gitlab.com/metahkg/metahkg-api) (in metahkg-api), for easily accessing the api. Please use the api wrapper with a same major version of metahkg-server.

## Getting Started

Get started by trying a [deployment](./deploy).

### What you'll need

See [requirements](./deploy/setup/requirements) for more information.
