import { prismaMock } from "./singleton";

test('no tes error', () => {
  jest.spyOn(prismaMock.user, 'findUnique');
})
