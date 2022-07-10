---
sidebar_position: 2
---

# Cloning

## Clone the repository

To clone the repository with the submodules:

```bash
git clone --recurse-submodules https://gitlab.com/metahkg/metahkg.git
# you must clone the submodules

cd metahkg
```

### Master

```bash
git checkout master

git submodule foreach git checkout master

git submodule foreach git pull 
# update the submodules
```

### Dev

```bash
git checkout dev

git submodule foreach git checkout dev

git submodule foreach git pull 
# update the submodules
```

## Pull submodules after clone

If you didn't use the --recurse-submodules flag when cloning, or you need to pull a new submodule, you can do this:

```bash
git submodule update --init --recursive
# pull with submodules

git submodule foreach git checkout dev
# check out a branch (dev or master)

git submodule foreach git pull
# update the submodules
```
