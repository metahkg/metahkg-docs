---
sidebar_position: 2
---

# Deploy

After [setting up environment](/docs/category/set-up-environment), you can now deploy Metahkg using docker.

## Options

You can:

- build images from source (default)
- build images from source, and bundle with [mongo-express](https://github.com/mongo-express/mongo-express) (a mongodb gui)
- use prebuilt images (no need to wait for building, but less customizations)
- use prebuilt images, and bundle with [mongo-express](https://github.com/mongo-express/mongo-express) (a mongodb gui)

## Mongo-express

If you want to bundle with [mongo-express](https://github.com/mongo-express/mongo-express), make sure you have set `MONGO_EXPRESS_PORT` in .env (see [environmental variables](./setup/env.md)).

After you deploy metahkg, you can access the mongo-express gui at `localhost:${MONGO_EXPRESS_PORT}`.

The username as password are `$MONGO_USER` and `$MONGO_PASSWORD` as you configured in [environmental variables](./setup/env.md).

## Build from source

### Normal

```bash
yarn docker
# build and start the containers
```

### With mongo-express

```bash
yarn docker:express
```

## Use prebuilt images

:::warning Warning
The images are built on gitlab ci/cd and are pushed a few minutes after each commit. If you find the api and web app incompatible, try to redeploy a few minutes later.
:::

:::tip Tags
New images are built every commit.

Some tags are maintained:

- latest
- major versions (e.g. 5)
- minor versions (e.g. 5.0)

There are also tags with the name being the commit hash. They are used for testing purpose only.
:::

:::tip Nginx container
The nginx container is still built locally since it is just some copying of files.
:::

You can use prebuilt images so you don't need to waste time building (given that your machine might crash due to high memory usage).

### Environment

Please add `branch=master` or `branch=dev` to docker/.env if you haven't to configure which branch of images you would like to use.

### Normal

```bash
yarn docker:prebuilt
# pull the docker images and deploy
```

### With mongo-express

```bash
yarn docker:express-prebuilt
```

## Metahkg is now deployed locally

Metahkg is at localhost:3000 (if you didn't alter the port). To enable metahkg links and/or make your instance public, please [configure nginx](/docs/category/configure-nginx).
