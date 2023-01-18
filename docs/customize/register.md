---
sidebar_position: 2
---

# Register

## Modes

You can set up register mode to restrict the registration of users. By default, any one with a valid email can register.

### Normal

Anyone with a email can register. You may restrict the allowed domains (see [Domains](#Domains)).

### Invite

:::warning Not Implemented
This feature has not been implemented yet on the frontend. Do not use until then.
:::

`REGISTER_MODE=invite`

Anyone with an invite code can sign up.

To add invite codes:

```mongodb
db.invite.insertOne({ code: "<code>" });
```

### None

`REGISTER_MODE=none`

No one can register.

### Configure register mode

```bash
nano docker/.env
```

```bash title=docker/.env
# ...

# find the line `REGISTER_MODE`

REGISTER_MODE=<mode>
```

## Domains

You could whitelist specific domains in a way that only emails from these domains are allowed for registration.

### Configure register domains

```bash
nano docker/.env
```

```bash title=docker/.env
# ...

# find the line `REGISTER_DOMAINS`

REGISTER_DOMAINS=<domains>
```

Here, `REGISTER_DOMAINS` should be domains separated with a comma, no spaces.
If `REGISTER_DOMAINS` is not set (empty) then any emails can register.

### Examples

- metahkg.org
- metahkg.org,gmail.com
- dev.metahkg.org,metahkg.org
- ""
