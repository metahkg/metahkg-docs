---
sidebar_position: 4
---

# Updating to a newer version

You should check for updates regularly. (For bug fixes and feature updates.)

## Pull the repositories

```bash
$ git pull origin dev 
# or master depending on your current branch

$ git submodule foreach git pull
# pull the submodules
```

## Rebuild docker

### From Source

```bash
$ yarn docker
# build and start the containers

$ yarn docker:clean
# remove unused images (encountering an error is fine)
```

### Prebuilt images

```bash
$ yarn docker:prebuilt
# pull the docker images and deploy
```
