# Comment

## Type

```typescript
type Comment =
  /** if the comment is removed **/
  | { id: number; removed: true }
  | {
      /** comment id */
      id: number;
      /** comment user */
      user: User;
      /** the comment (in stringified html) */
      comment: string;
      /** the comment converted to plain text */
      text: string;
      /** date string */
      createdAt: string;
      /** shortened link */
      slink?: string;
      /** number of downvotes */
      D?: number;
      /** number of upvotes */
      U?: number;
      /** quoted comment */
      quote?: Comment;
      /** id of replies *//
      replies?: number[];
    };
```

### References

- [User](./user)

### Values

#### Removed

| Value | Description | Type | Schema |
| ----- | ----------- | ---- | ------ |
| id    | thread id   | `integer` | > 0 |
| removed | if the comment is removed | `true` | - |

#### Not Removed

| Value | Description | Type | Schema |
| ----- | ----------- | ---- | ------ |
| id    | thread id   | `integer` | > 0 |
| user  | comment user | `User` | - |
| comment | comment (in stringified html) | `string` | - |
| text | comment converted to plain text | `string` | - |
| createdAt | date string | `date iso string` | - |
| slink | shortened link | `string \| undefined` | `https://${LINKS_DOMAIN}/${id}` |
| D | number of downvotes | `integer` | - |
| U | number of upvotes | `integer` | - |
| quote | quoted comment | `Comment \| undefined` | - |
| replies | id of replies | `integer[]` | each id is > 0 |
