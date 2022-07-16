---
sidebar_position: 2
---

# Api wrapper

We maintain an api wrapper as an axios client for accessing the api.
Authorization is managed.

## Versions

Latest version is compatible with the master branch of [metahkg-server](https://gitlab.com/metahkg/metahkg-server).

Dev version compatible with dev branch.

## Installing

### Latest

```bash
yarn add metahkg-api@latest
```

### Dev

```bash
yarn add metahkg-api@dev
```

## Usage

```typescript
import Api from "metahkg-api";

const api = Api({
    // choose a server or leave blank for /
    baseUrl: "https://metahkg.org",
    // user jwt token, leave blank if not logged in
    token: "<token>",
    // action to do upon new token received in headers
    setToken: (token: string) => {
        // set token
        localStorage.setItem("token", token);
    },
});
```
