# Create Thread

[Definition](../../)

## Examples

:::info
The exmaples assume you can access the api at `/api`.
:::

### Metahkg Api

Also see [usage in metahkg-web](https://gitlab.com/metahkg/metahkg-web/-/blob/2.7.0-dev/src/pages/create.tsx#L107).

```typescript
api.threads
    .create({
        comment: "<p>comment #1</p>",
        rtoken: "<recaptcha token>",
        title: "thread title",
        category: 1,
    })
    .then(console.log)
    .catch(console.error);
```

### Fetch Api

```typescript
await fetch("/api/thread/create", {
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer <token>",
    },
    body: JSON.stringify({
        comment: "<p>hi</p>",
        rtoken: "<recaptcha token>",
        title: "hi",
        category: 1,
    }),
    method: "POST",
    mode: "cors",
});
```
