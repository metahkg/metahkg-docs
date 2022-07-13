---
sidebar_position: 2
title: v2.7 (dev)
---

# Metahkg Api

Metahkg's api is a rest api written in fastify/typescript. The database used is MongoDB.
Json is returned on every request.

## Errors

An error code would be returned if the request failed.

The response json would be:

```typescript
{
    error: string;
}
```

## Authorization

We support authorization based on json web token.

Please configure the `Authorization` header to be `Bearer <token>`.

You can get a token by logging in or after you have verified your account.

The token expires in 7 days.

### Refresh Token

A new token is generated upon any request if it has been two days since the last token was generated.

The response header `token` would be the new token.

## Api wrapper

You can use the metahkg api wrapper to use the metahkg api easily.
Authorization is managed.

```bash
yarn add metahkg-api@2.7.0-dev
```

```typescript
import Api from "metahkg-api";

const api = Api({
    // choose a server or leave blank for /
    baseUrl: "https://metahkg.org",
    // user jwt token, leave blank if not logged in
    token: "eyfcsgbsaabbdwqjog",
    // action to do upon new token received in headers
    setToken: (token: string) => {
        // set token
        localStorage.setItem("token", token);
    },
});
```

## Routes

- /api
  - /thread
    - [GET /:id](./routes/thread) (get thread)
