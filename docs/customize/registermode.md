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

```mongodb
db.invite.insertOne({ code: "<code>" });
```

### None

`register=none`

No one can register.

## Configure register mode

```bash
nano docker/.env
```

```bash title=docker/.env
# ...

# find the line `register`

register=<mode>
```
