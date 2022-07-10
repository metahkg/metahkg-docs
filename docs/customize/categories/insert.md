---
sidebar_position: 3
---

# Insert Category

## Log into mongodb

```bash
mongosh mongodb://<username>:<password>@localhost:30000/metahkg
```

## Check for categories

```mongodb
db.category.find().pretty()
```

Use an id that does not exist yet in the next step.

## Insert

### Normal

```mongodb
db.category.insertOne({ id: <newid>, name: "<new-category-name>" })
```

### [Hidden](./hide)

```mongodb
db.category.insertOne({ id: <newid>, name: "<new-category-name>", hidden: true })
```

Refresh the app and you should now see the new category in the sidebar.
