---
sidebar_position: 1
---

# Backup

## Tools

We use mongodump and mongorestore to backup and restore the database.

- [install tutorial](/docs/deploy/setup/requirements#mongodb-shell-and-database-tools)

## Using mongodump to backup the whole database

```bash
mongodump --uri=mongodb://<username>:<password>@localhost:<port> -d=metahkg -o=./metahkg-backup
```

Store the folder ./metahkg-backup in a SECURE LOCATION!

I'd recommend you to zip and encrypt it before uploading it to a cloud storage.

## Shred

Shred the backup if you no longer need it.

### Install secure-delete

```bash
sudo apt install secure-delete
# ubuntu

pacman -Sy secure-delete
# arch (with blackarch installed)
```

### Use srm

```bash
srm -r ./metahkg-backup
```

It overwrites 38 times so might take some time.
