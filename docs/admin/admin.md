# Administrators

Administrators have great power, including

- edit threads
- delete threads
- edit comments
- delete comments
- create categories
- edit categories
- delete categories
- mute users
- unmute users

All of these are available through the api, but most haven't been implemented on the frontend yet.
See the latest [api docs](https://docs.metahkg.org/docs/category/api) for more information.

## Make a user admin

To make a user (including yourself) admin, you must edit the database.
The user must have an account first.

Please take note of the user's id or username.

### Log in to mongodb

```bash
mongosh mongodb://<username>:<password>@localhost:30000/metahkg
```

### Edit the user

#### Using id

```mongodb
db.users.updateOne({ id: <id> }, { $set: { role: "admin" } })
```

#### Using username

```mongodb
db.users.updateOne({ name: <username> }, { $set: { role: "admin" } })
```

## Dismiss as admin

### Log in to mongodb

```bash
mongosh mongodb://<username>:<password>@localhost:30000/metahkg
```

### Edit the user

#### Using id

```mongodb
db.users.updateOne({ id: <id> }, { $set: { role: "user" } })
```

#### Using username

```mongodb
db.users.updateOne({ name: <username> }, { $set: { role: "user" } })
```
