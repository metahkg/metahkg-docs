---
sidebar_position: 2
---

# Restore

We can use mongorestore to restore the whole database.

::warning Caution
Make sure your new database is empty before restoring!
::

```bash
mongorestore -d=metahkg --uri=mongodb://<username>:<password>@localhost:<port>
```
