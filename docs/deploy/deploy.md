---
sidebar_position: 2
---

# Deploy

After [setting up environment](/docs/category/set-up-environment), you can now deploy Metahkg using docker.

We support:

- building images from source (default)
- using prebuilt images

## Build from source

```bash
$ yarn docker
# build and start the containers
```

## Using prebuilt images

:::warning Warning
The images are built on gitlab ci/cd and are pushed a few minutes after each commit. If you find the api and web app incompatible, try to redeploy a few minutes later.
:::

:::tip Tags
The images follow a rolling release (new images are built every commit). There is ONLY ONE TAG (latest) that is maintained. Other than latest, there are tags with the name being the commit hash. They are used for testing purpose only.
:::

:::tip Nginx container
The nginx container is still built locally since it is just some copying of files.
:::

You can use prebuilt images so you don't need to waste hardware building (given that your machine might crash due to high memory usage).

### Environment

Please add `branch=master` or `branch=dev` to docker/.env if you haven't to configure which branch of images you would like to use.

### Start

```bash
$ yarn docker:prebuilt
# pull the docker images and deploy
```

## Metahkg is now deployed locally

Metahkg is at localhost:3000 (if you didn't alter the port). To enable metahkg links and/or make your instance public, please [configure nginx](/docs/category/configure-nginx).
