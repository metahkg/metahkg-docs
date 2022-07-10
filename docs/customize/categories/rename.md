---
sidebar_position: 5
---

# Rename Category

## Log into mongodb

```bash
mongosh mongodb://<username>:<password>@localhost:30000/metahkg
```

## List the categories

```mongodb
db.category.find().pretty()
```

Find the id of the one you want to rename.

## Rename

:::warning Warning
If you wish to rename [category 1](./category1), please use an appropriate name (e.g. `General`).
:::

```mongodb
db.category.updateOne({ id: <id> }, { $set: { name: "<new-category-name>" } })
```
