---
sidebar_position: 4
---

# Remove Category

## Log into mongodb

```bash
mongosh mongodb://<username>:<password>@localhost:30000/metahkg
```

## List the categories

```javascript
metahkg> db.category.find().pretty()
```

Find the id of the one you want to remove.

## Remove

**_WARNING:_** DO NOT remove [category 1](./category1), or the output might not be as expected.

```javascript
metahkg> db.category.deleteOne({ id: <id> })
```
