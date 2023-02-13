---
sidebar_position: 2
---

# Deploy

After [setting up environment](/docs/category/set-up-environment), you can now deploy Metahkg using docker.

## Volumes

Firstly, please create the directories for the volumes:

```bash
cd docker
mkdir certs images imageproxy imgpush
```

## Options

In addition to the default config, you can add additional options:

- `vpn`: use protonvpn for network requests
- `express`: add mongo-express, see [#mongo-express](#mongo-express)
- `prebuilt`: use prebuilt images (this is recommended), see [#use-prebuilt-images](#use-prebuilt-images)

### vpn

Use protonvpn for network requests.
Uses [protonvpn-docker](https://github.com/tprasadtp/protonvpn-docker).

Please config the required [environment variables](./setup/env.md):

- `PROTONVPN_USERNAME`
- `PROTONVPN_PASSWORD`
- `PROTONVPN_SERVER`
- `PROTONVPN_TIER`

### mongo-express

If you want to add [mongo-express](https://github.com/mongo-express/mongo-express), make sure you have set `MONGO_EXPRESS_PORT` in .env (see [environmental variables](./setup/env.md)).

After you deploy metahkg, you can access the mongo-express gui at `localhost:${MONGO_EXPRESS_PORT}`.

The username as password are `$MONGO_USER` and `$MONGO_PASSWORD` as you configured in [environmental variables](./setup/env.md).

### Use prebuilt images

:::warning Image update delays
The images are built on gitlab ci/cd and are pushed a few minutes after each commit. If you find the api and web app incompatible, try to redeploy a few minutes later.
:::

:::warning Warning
DO NOT use prebuilt images if you set `env=dev` in [environmental variables](./setup/env.md) as it is NOT supported.
:::

:::tip Nginx container
The nginx container is still built locally since it is just some copying of files.
:::

The use of prebuilt images is recommended for production. Images would be pulled from our [gitlab container registry](https://gitlab.com/groups/metahkg/-/container_registries) instead of being built locally.

#### Tags

New images are built every commit.

Some tags are maintained:

- `latest`
- major versions (e.g. `5`)
- minor versions (e.g. `5.0`)

There are also tags with the name being the commit hash. They are used for testing purpose only.

It is recommended to use `latest` or major versions. Minor versions may not be available in every sub-project.

For all of the docker images, see the [gitlab container registry](https://gitlab.com/groups/metahkg/-/container_registries).

#### Environment

If you want to use prebuilt images, you must set two environment variables as listed in [environmental variables](./setup/env.md).

- `branch`: `master` or `dev`
- `version`: see [tags](#tags)

## Commands

### Default configuration

```bash
yarn docker
```

### Prebuilt

```bash
yarn docker:prebuilt
```

### With additional options

Add the additional options straightly according to the order in [options](#options).

#### Examples

#### VPN

```bash
yarn docker:vpn
```

#### VPN, Prebuilt

```bash
yarn docker:vpn:prebuilt
```

#### with mongo-express

```bash
yarn docker:express
```

#### mongo-express, prebuilt

```bash
yarn docker:express:prebuilt
```

#### VPN, express, prebuilt

```bash
yarn docker:vpn:express:prebuilt
```

## Other commands

### Stop and remove containers

```bash
yarn docker:down
```

### Logs

```bash
yarn docker:logs
```

## Next steps

Metahkg web and server are now accessible at `localhost:${PORT}` (by default, `localhost:3002`). To complete the metahkg installation and make your instance public, please [configure nginx](/docs/category/configure-nginx).
