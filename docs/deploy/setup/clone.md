---
sidebar_position: 2
---

# Clone the repositories

To clone the repository with the submodules:

```bash
$ git clone --recurse-submodules https://gitlab.com/metahkg/metahkg.git
# you must clone the submodules

$ cd metahkg

$ git checkout dev
# (or master)

$ git submodule foreach git checkout dev
# check out a branch (dev or master)

$ git submodule foreach git pull 
# update the submodules
```

## Pull submodules after clone

If you didn't use the --recurse-submodules flag when cloning, or you need to pull a new submodule, you can do this:

```bash
$ git pull --recurse-submodules
# pull with submodules

$ git submodule foreach git checkout dev
# check out a branch (dev or master)

$ git submodule foreach git pull 
# update the submodules
```
