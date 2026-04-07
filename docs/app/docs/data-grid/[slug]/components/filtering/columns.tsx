'use client'

import { Edit } from '@carbon/icons-react'
import { Format, IconButton, Text } from '@cerberus-design/react'
import { HStack, VStack } from 'styled-system/jsx'
import { columnHelper } from '../quick-start/helper.demo'

export const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    width: 80,
    features: {
      pinning: {
        defaultPosition: 'left',
      },
      sort: true,
      filter: true,
    },
    cell: ({ value }) => <Text>#{value}</Text>,
  }),

  columnHelper.accessorFn((row) => `${row.firstName} ${row.lastName}`, {
    id: 'fullName',
    header: 'Employee',
    minWidth: 300,
    features: {
      sort: true,
      filter: (row, colId, val) => {
        console.log({ row, colId, val })
        return true
      },
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
    features: { sort: true, filter: true },
  }),

  columnHelper.accessor('salary', {
    header: 'Salary',
    width: 135,
    features: { sort: true },
    cell: ({ value }) => (
      <Format.Number value={value} style="currency" currency="USD" />
    ),
  }),

  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    width: 125,
    cell: () => (
      <HStack justify="center" w="full">
        <IconButton ariaLabel="View more options">
          <Edit />
        </IconButton>
      </HStack>
    ),
  }),
]
