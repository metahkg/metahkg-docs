---
sidebar_position: 1
---

# Syntax

## Types

```typescript
interface Category {
    id: number, // integer
    name: string,
    hidden?: boolean
}
```

## Hidden

**_See [hide](../hide) for more information._**

If you hide a category:

- its posts are not visible in [category 1](../category1)

And if the user is not signed in:

- they cannot view the content of its posts
- it is hidden in the sidebar
- they cannot directly query the list of posts in the category
- they can find the posts in search, but cannot view the comments

## Example

```javascript
{
    id: 8, // id is 8
    name: "Adult",
    hidden: true // category is hidden
}
```
