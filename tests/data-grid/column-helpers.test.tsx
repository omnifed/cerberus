import { describe, test, expect } from 'bun:test'
import { createColumnHelper } from '@cerberus-design/data-grid'

type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  age: number
  status: 'pending' | 'active' | 'inactive'
}

describe('createColumnHelper', () => {
  test('should provide a helpers object', () => {
    expect(createColumnHelper()).toMatchObject({
      accessor: (key: string, options: { header?: string } = {}) => ({
        id: key,
        ...options,
      }),
      accessorFn: (
        fn: (row: any) => any,
        options: { header?: string } = {},
      ) => ({
        accessorFn: fn,
        ...options,
      }),
      display: (value: any, options: { header?: string } = {}) => ({
        display: value,
        ...options,
      }),
    })
  })

  test('should return accessor data', () => {
    const helper = createColumnHelper<User>()
    const column = helper.accessor('id', { header: 'User' })
    expect(column).toMatchObject({
      id: 'id',
      accessor: (row: User) => row.id,
      header: 'User',
    })
  })

  test('should return accessorFn data', () => {
    const helper = createColumnHelper<User>()
    const column = helper.accessorFn(
      (row: User) => `${row.firstName} ${row.lastName}`,
      {
        id: 'id',
        header: 'Full Name',
      },
    )
    expect(column).toMatchObject({
      id: 'id',
      accessor: (row: User) => `${row.firstName} ${row.lastName}`,
      header: 'Full Name',
    })
  })

  test('should return display data', () => {
    const helper = createColumnHelper<User>()
    const column = helper.display({
      id: 'firstName',
      header: 'First Name',
      cell: (props: { row: User }) => props.row.firstName,
    })
    expect(column).toMatchObject({
      accessor: () => undefined,
      cell: (props: { row: User }) => props.row.firstName,
      header: 'First Name',
      id: 'firstName',
    })
  })
})
