---
sidebar_position: 2
---

# Create thread

POST `/api/thread/create`

## Request Body

### Type

```typescript
interface CreateThreadRequest {
    comment: string;
    rtoken: string;
    title: string;
    category: number;
}
```

#### Values

| Value    | Description     | Type    | Schema | Required |
| -------- | --------------- | ------- | ------ | -------- |
| comment  | comment #1 html | string  | -      | true     |
| rtoken   | recaptcha token | string  | -      | true     |
| title    | thread title    | string  | -      | true     |
| category | thread category | integer | > 0    | true     |

## Response

### Type

```typescript
interface CreateThreadResponse {
    id: number;
}
```

#### Values

| Value | Description                           | Type    | Schema |
| ----- | ------------------------------------- | ------- | ------ |
| id    | thread id of the newly-created thread | integer | > 0    |

## Errors

- `400` Bad request.
- `401` Unauthorized.
- `404` Category not found.
- `429` Recaptcha token invalid.

## Examples

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
