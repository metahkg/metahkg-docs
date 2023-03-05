---
sidebar_position: 4
---

# Updating to a newer version

You should check for updates regularly. (For bug fixes and feature updates.)

## Pull the repositories

### Master

```bash
git pull origin master

git submodule update --init --recursive
# update the submodules
```

### Dev

```bash
git pull origin dev

git submodule update --init --recursive
# update the submodules
```

## Migrate

Sometimes you need to migrate. A script would be available in metahkg-server.

```bash
cd metahkg-server
```

### Check for migrate script

Check for files in `src/migrate` that are in between your old and new versions.

### Install dependencies

```bash
yarn install
```

### .env

Add the following content to .env

```bash
# .env

MONGO_URI=mongodb://localhost:${MONGO_PORT}
```

Whereas `${MONGO_PORT}` is the port of the mongo instance as you set in [Environmental variables](./setup/env.md).

### Run script

Execute all the afore-mentioned scripts.

e.g.

```bash
yarn ts-node src/migrate/v6.5/v6.5.0.ts
```

## Redeploy docker

Rerun the command in [deploy](/docs/deploy).
