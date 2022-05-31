---
sidebar_position: 5
---

# Rename Category

## Log into mongodb

```bash
mongosh mongodb://<username>:<password>@localhost:30000/metahkg
```

## List the categories

```javascript
metahkg> db.category.find().pretty()
```

Find the id of the one you want to rename.

## Rename

**_WARNING:_** If you wish to rename [category 1](./category1), please use an appropriate name (e.g. `General`).

```javascript
metahkg> db.category.updateOne({ id: <id> }, { $set: { name: "<new-category-name>" } })
```
