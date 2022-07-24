---
sidebar_position: 2
---

# Api wrapper

We maintain an api wrapper as an axios client for accessing the api.
Authorization is managed.

## Versions

Latest version is compatible with the master branch of [metahkg-server](https://gitlab.com/metahkg/metahkg-server).

Dev version compatible with dev branch.

## Install

### Yarn

```bash
yarn add metahkg-api@3.3.1
```

### NPM

```bash
npm i metahkg-api@3.3.1
```

## Usage

```typescript
import Api from "metahkg-api";

const api = Api({
    // choose a server or leave blank for /
    baseUrl: "https://dev.metahkg.org",
    // user jwt token, leave blank if not logged in
    token: "<token>",
    // action to do upon new token received in headers
    setToken: (token: string) => {
        // set token
        localStorage.setItem("token", token);
    },
});
```
