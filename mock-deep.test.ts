import {mockDeep} from "jest-mock-extended";
import { PrismaClient } from '@prisma/client'

test('no tes error', () => {
  const prismaMock = mockDeep<PrismaClient>();

  const spyEmployeeExists = jest.spyOn(prismaMock.user, 'findUnique');
})
