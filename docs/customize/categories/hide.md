---
sidebar_position: 6
---

# Hide / Unhide Category

If you hide a category:

- its threads are not visible in [category 1](./category1)

If the user is not logged in:

- it is hidden in the sidebar
- they cannot access any threads in the category, and their comments (can check if the thread exists though)

## Default Hidden Categories

By default, category 8 (Adult) is hidden.

## Hide / Unhide

### Log in to mongodb

```bash
mongosh mongodb://<username>:<password>@localhost:30000/metahkg
```

### List the categories

```mongodb
db.category.find().pretty()
```

Find the id of the one you want to hide / unhide.
If the object has `hidden: true`, it is hidden.
Otherwise, it is not.

### Hide

:::warning Warning
DO NOT hide [category 1](./category1), or the output might not be as expected!
:::

```mongodb
db.category.updateOne({ id: <id> }, { $set: { hidden: true } })
```

### Unhide

```mongodb
db.category.updateOne({ id: <id> }, { $unset: { hidden: true } })
```
