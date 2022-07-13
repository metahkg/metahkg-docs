---
sidebar_position: 2
---

# User

## Type

```typescript
interface User {
    id: number;
    name: string;
    sex: "M" | "F";
    role: "user" | "admin";
}
```

### Values

| Value | Description | Type | Schema |
| ----- | ----------- | ---- | ------ |
| id | user id | `integer` | > 0 |
| name | username | `string` | 0 < length <= 15 |
| sex | user's sex (gender) | `"M" \| "F"` | - |
| role | user's role | `"user" \| "admin"` | - |
