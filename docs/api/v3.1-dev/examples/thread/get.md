# Get Thread

[Definition](../../)

## Examples

:::info
The exmaples assume you can access the api at `/api`.
:::

### [Metahkg Api Wrapper](../../wrapper)

Also see [usage in metahkg-web](https://gitlab.com/metahkg/metahkg-web/-/blob/2.7.0-dev/src/components/conversation/functions/update.tsx#L31).

```typescript
// note that page is ignored if start and end is both specified
api.threads
    .get({ threadId: 1, page: 1, limit: 10, sort: "score", start: 1, end: 20 })
    .then(console.log)
    .catch(console.error);
```

### Axios

```typescript
import axios from "axios";

axios
    .get("/api/thread/1?page=1&start=1&end=20&sort=score&limit=10")
    .then(console.log)
    .catch(console.error);
```

### Fetch Api

```typescript
fetch("/api/thread/1?page=1&start=1&end=20&sort=score&limit=10", {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    method: "GET",
    mode: "cors",
});
```
