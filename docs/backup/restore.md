---
sidebar_position: 2
---

# Restore

We can use mongorestore to restore the whole database.

**_WARNING:_** make sure your new database is empty before restoring!

```bash
mongorestore -d=metahkg --uri=mongodb://<username>:<password>@localhost:<port>
```
