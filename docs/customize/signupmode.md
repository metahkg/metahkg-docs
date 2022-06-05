---
sidebar_position: 2
---

# Sign up mode

You can set up sign up mode to restrict the sign up of users. By default, any one with a valid email can sign up.

## Modes

### Normal

Anyone with a email can sign up.

### Invite

:::warning Not Implemented
This feature has not been implemented yet on the frontend. Do not use until then.
:::

`signupmode=invite`

Anyone with an invite code can sign up.

To add invite codes:

```javascript
metahkg > db.invite.insertOne({ code: "<code>" });
```

### None

`signupmode=none`

No one can sign up.

## Configure sign up mode

### Docker

```bash
nano docker/.env
```

```bash
# docker/.env

# ...

# find the line `signupmode`

signupmode=<mode>
```

### Metahkg-server

```bash
nano metahkg-server/.env
```

```bash
# metahkg-server/.env

# ...

# find the line `signupmode`

signupmode=<mode>
```
