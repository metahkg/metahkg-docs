---
sidebar_position: 4
---

# Remove Category

## Log into mongodb

```bash
mongosh mongodb://<username>:<password>@localhost:30000/metahkg
```

## List the categories

```mongodb
db.category.find().pretty()
```

Find the id of the one you want to remove.

## Remove

:::warning Warning
DO NOT remove [category 1](./category1), or the output might not be as expected!
:::

```mongodb
db.category.deleteOne({ id: <id> })
```
