[**Country Project**](../README.md) • **Docs**

***

[Country Project](../README.md) / ReadonlyCity

# Type Alias: ReadonlyCity

> **ReadonlyCity**: `Readonly`\<[`City`](../interfaces/City.md)\>

Read-only city information that cannot be modified

## Example

```typescript
const paris: ReadonlyCity = {
 name: "Paris",
 country: "France"
};
paris.name = "Paris2"; // Error: Cannot modify readonly property
```

## Defined in

script.ts:83
