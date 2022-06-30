---
sidebar_position: 2
---

# Register mode

You can set up register mode to restrict the registration of users. By default, any one with a valid email can register.

## Modes

### Normal

Anyone with a email can register.

### Invite

:::warning Not Implemented
This feature has not been implemented yet on the frontend. Do not use until then.
:::

`register=invite`

Anyone with an invite code can sign up.

To add invite codes:

```javascript
metahkg > db.invite.insertOne({ code: "<code>" });
```

### None

`register=none`

No one can sign up.

## Configure register mode

### Docker

```bash
nano docker/.env
```

```bash
# docker/.env

# ...

# find the line `signupmode`

register=<mode>
```

### Metahkg-server

```bash
nano metahkg-server/.env
```

```bash
# metahkg-server/.env

# ...

# find the line `signupmode`

register=<mode>
```
