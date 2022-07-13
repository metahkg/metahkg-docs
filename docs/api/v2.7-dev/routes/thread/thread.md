---
sidebar_position: 1
---

# Thread

`GET /api/thread/:id`

## Authorization

Required if accessing a thread in a [hidden category](../../../../customize/categories/hide).

## Request

### Params

| Param | Description | Type    | Default | Required |
| ----- | ----------- | ------- | ------- | -------- |
| id    | thread id   | integer | -       | true     |

### Query

| Query | Description                                                                                                                                                                       | Type                            | Schema         | Default                  | Required |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | -------------- | ------------------------ | -------- |
| page  | page number, ignored if start and end are both specified                                                                                                                                                                      | integer                         | > 0            | 1                        | false    |
| limit | limit of comments per page                                                                                                                                                        | integer                         | 1 - 50    | 25                       | false    |
| sort  | sort comments by score / time / latest. `"time"` means sorting acsendingly by created time, `"latest"` is desceningly, `"score"` is sorting descendingly by `upvotes - downvotes` | `"score" \| "time" \| "latest"` | -              | `"time"`                 | false    |
| start | starting from comment id                                                                                                                                                          | integer                         | > 0            | `(page - 1) * limit + 1` | false    |
| end   | ending at comment id                                                                                                                                                              | integer                         | x >= start > 0 | `page * limit`           | false    |

## Response

### Type

```typescript
interface {
    id: number;
    pin?: Comment;
    op: User;
    c: number;
    vote: number;
    slink?: string;
    title: string;
    category: number;
    lastModified: string;
    createdAt: string;
    conversation: (Comment & {score: number})[];
}
```

#### References

- [Comment](../types/comment)
- [User](../types/user)

#### Values

| Value        | Description                                                 | Type                            | Schema                                |
| ------------ | ----------------------------------------------------------- | ------------------------------- | ------------------------------------- |
| id           | thread id                                                   | `integer`                       | > 0                                   |
| pin          | pinned comment                                              | `Comment \| undefined`          | -                                     |
| op           | user creted the thread                                      | `User`                          | -                                     |
| c            | number of comments                                          | `integer`                       | > 0                                   |
| vote         | upvotes - downvotes                                         | `integer`                       | -                                     |
| slink        | shortened link                                              | `string \| undefined`           | `https://<metahkg links domain>/<id>` |
| title        | thread title                                                | `string`                        | -                                     |
| category     | thread category                                             | `integer`                       | > 0                                   |
| lastModified | last modified date                                          | `date iso string`               | -                                     |
| createdAt    | created date                                                | `date iso string`               | -                                     |
| conversation | array of comments, with score, which is upvotes - downvotes | `(Comment & {score: number})[]` | -                                     |

## Errors

- `400` Bad request
- `403` Permission denied
- `404` Not found

## Examples

### Metahkg Api

```typescript
// note that page is ignored if start and end is both specified
api.threads.get({ threadId: 1, page: 1, limit: 10, sort: "score", start: 1, end: 20 });
    .then(console.log)
    .catch(console.error);
```

### Fetch Api

```typescript
fetch("/api/thread/1?page=1&start=1&end=20&sort=score&limit=10", {
    "headers": {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
    "method": "GET",
    "mode": "cors"
});
```
