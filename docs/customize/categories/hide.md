---
sidebar_position: 6
---

# Hide / Unhide Category

If you hide a category:

- its posts are not visible in [category 1](./category1)

And if the user is not signed in:

- they cannot view the content of its posts
- it is hidden in the sidebar
- they cannot directly query the list of posts in the category
- they can find the posts in search, but cannot view the comments

## Default Hidden Categories

By default, category 8 (Adult) is hidden.

## Hide / Unhide

### Log into mongodb

```bash
mongosh mongodb://<username>:<password>@localhost:30000/metahkg
```

### List the categories

```javascript
metahkg> db.category.find().pretty()
```

Find the id of the one you want to hide / unhide.
If the object has `hidden: true`, it is hidden.
Otherwise, it is not.

### Hide

**_WARNING:_** DO NOT hide [category 1](./category1), or the output might not be as expected!

```javascript
metahkg> db.category.updateOne({ id: <id> }, { $set: { hidden: true } })
```

### Unhide

```javascript
metahkg> db.category.updateOne({ id: <id> }, { $unset: { hidden: 1 } })
```
