This repo is to demonstrate a Typescript error when attempting to mock PrismaClient using `mockDeep` from `jest-mock-extended`


## STR
1. yarn
2. tsc mock-deep.test.ts

```
mock-deep.test.ts:7:29 - error TS2615: Type of property 'AND' circularly references itself in mapped type '{ [K in keyof { AND?: Enumerable<UserScalarWhereWithAggregatesInput>; OR?: Enumerable<UserScalarWhereWithAggregatesInput>; NOT?: Enumerable<...>; id?: number | IntWithAggregatesFilter; email?: string | StringWithAggregatesFilter; name?: string | StringNullableWithAggregatesFilter; }]: Or<...> extends 1 ? { ...; }[K]...'.

7   const spyEmployeeExists = jest.spyOn(prismaMock.user, 'findUnique');
                              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

mock-deep.test.ts:7:29 - error TS2615: Type of property 'NOT' circularly references itself in mapped type '{ [K in keyof { AND?: Enumerable<UserScalarWhereWithAggregatesInput>; OR?: Enumerable<UserScalarWhereWithAggregatesInput>; NOT?: Enumerable<...>; id?: number | IntWithAggregatesFilter; email?: string | StringWithAggregatesFilter; name?: string | StringNullableWithAggregatesFilter; }]: Or<...> extends 1 ? { ...; }[K]...'.

7   const spyEmployeeExists = jest.spyOn(prismaMock.user, 'findUnique');
                              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

mock-deep.test.ts:7:29 - error TS2615: Type of property 'OR' circularly references itself in mapped type '{ [K in keyof { AND?: Enumerable<UserScalarWhereWithAggregatesInput>; OR?: Enumerable<UserScalarWhereWithAggregatesInput>; NOT?: Enumerable<...>; id?: number | IntWithAggregatesFilter; email?: string | StringWithAggregatesFilter; name?: string | StringNullableWithAggregatesFilter; }]: Or<...> extends 1 ? { ...; }[K]...'.

7   const spyEmployeeExists = jest.spyOn(prismaMock.user, 'findUnique');
                              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

```
