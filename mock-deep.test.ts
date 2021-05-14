import {mockDeep, MockProxy} from "jest-mock-extended";
import { PrismaClient } from '@prisma/client'
import { prismaMock } from "./singleton";

test('no tes error', () => {
  const prisma = mockDeep<PrismaClient>();

  const prismaMock2 = (prisma as unknown) as MockProxy<PrismaClient>

  jest.spyOn(prismaMock.user, 'findUnique');
})
