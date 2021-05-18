import { mockDeep, mockReset, MockProxy } from 'jest-mock-extended'
import { PrismaClient } from '@prisma/client'
import prisma from './client'

jest.mock('./client', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}))

beforeEach(() => {
  mockReset(prismaMock)
})

const prismaMock = (prisma as unknown) as MockProxy<PrismaClient>

test('no tes error', () => {

  const spyEmployeeExists = jest.spyOn(prismaMock.user, 'findUnique');

  console.log({spyEmployeeExists})
})
