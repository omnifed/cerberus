'use client'

import { DateFormatter, Format, Text } from '@cerberus-design/react'
import { VStack } from 'styled-system/jsx'
import { Employee } from '../quick-start/data.demo'
import { columnHelper } from '../quick-start/helper.demo'

export const columns = [
  columnHelper.accessor('lastLogin', {
    header: 'Last Login',
    features: {
      sort: {
        comparator: (a: Employee['lastLogin'], b: Employee['lastLogin']) =>
          new Date(a).getTime() - new Date(b).getTime(),
      },
    },
    cell: ({ value }) => {
      const formatter = new DateFormatter('en-US', {
        dateStyle: 'short',
        timeZone: 'America/New_York',
      })
      return (
        <Text textStyle="label-md">{formatter.format(new Date(value))}</Text>
      )
    },
  }),

  columnHelper.accessorFn((row) => `${row.firstName} ${row.lastName}`, {
    id: 'fullName',
    header: 'Employee',
    minWidth: 300,
    features: {
      sort: true,
    },
    cell: ({ row, value }) => (
      <VStack alignItems="flex-start" gap="0">
        <Text textStyle="body-md">{value}</Text>
        <Text color="page.text.100" textStyle="label-sm">
          {row.email}
        </Text>
      </VStack>
    ),
  }),

  columnHelper.accessorFn((row) => row.department.name, {
    id: 'department',
    header: 'Department',
    features: { sort: true },
  }),

  columnHelper.accessor('salary', {
    header: 'Salary',
    width: 135,
    features: { sort: true },
    cell: ({ value }) => (
      <Format.Number value={value} style="currency" currency="USD" />
    ),
  }),
]
