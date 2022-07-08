---
sidebar_position: 4
---

# Updating to a newer version

You should check for updates regularly. (For bug fixes and feature updates.)

## Pull the repositories

```bash
git pull origin dev 
# or master depending on your current branch

git submodule foreach git pull
# pull the submodules
```

## Migrate

Sometimes you need to migrate. A script would be available in metahkg-server.

```bash
cd metahkg-server
```

### Check for migrate script

```bash
version=$(node -e "console.log(require(\"./package.json\").version)")
filename="src/migrate/v$(node -e "console.log('${version}'.split('.').slice(0,2).join('.'))")/v${version}.ts"
if [ test -f "src/migrate/v$(node -e "console.log('${version}'.split('.').slice(0,2).join('.'))")/v${version}.ts" ]; then echo "Found migrate script"; else echo "No migrate script found"; fi
```

If migrate script is found, proceed, or else skip this and go to [rebuild docker](#rebuild-docker).

### Install dependencies

```bash
yarn install
```

### .env

Add the following content to .env

```bash
# .env

DB_URI=mongodb://localhost:${MONGO_PORT}
```

Whereas `${MONGO_PORT}` is the port of the mongo instance as you set in [Environmental variables](./setup/env.md).

### Run script

```bash
version=$(node -e "console.log(require(\"./package.json\").version)")
filename="src/migrate/v$(node -e "console.log('${version}'.split('.').slice(0,2).join('.'))")/v${version}.ts"
npx ts-node "${filename}"
```

## Rebuild docker

### Build from source

#### Normal

```bash
yarn docker
```

#### With mongo-express

```bash
yarn docker:express
```

### Prebuilt images

#### Normal

```bash
yarn docker:prebuilt
```

#### With mongo-express

```bash
yarn docker:express-prebuilt
```
