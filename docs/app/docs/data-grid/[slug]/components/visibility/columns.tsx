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
      visibility: true,
    },
    cell: ({ value }) => <Text>#{value}</Text>,
  }),

  columnHelper.accessorFn((row) => `${row.firstName} ${row.lastName}`, {
    id: 'fullName',
    header: 'Employee',
    minWidth: 300,
    features: { filter: true, sort: true, pinning: true, visibility: true },
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
    features: { filter: true, visibility: true },
  }),

  columnHelper.accessor('salary', {
    header: 'Salary',
    width: 135,
    features: {
      visibility: {
        defaultHidden: true,
      },
    },
    cell: ({ value }) => (
      <Format.Number value={value} style="currency" currency="USD" />
    ),
  }),

  columnHelper.display({
    id: 'lastLogin',
    header: 'Last Login',
    features: { pinning: true, visibility: true },
    cell: (cell) => (
      <Text color="page.text.100" textStyle="mono-xs">
        <Format.RelativeTime value={new Date(cell.row.lastLogin)} />
      </Text>
    ),
  }),

  columnHelper.display({
    id: 'lastName',
    header: 'Last Name',
    features: { pinning: true, visibility: true },
    cell: (cell) => <Text textStyle="body-md">{cell.row.lastName}</Text>,
  }),

  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    width: 125,
    features: { pinning: true, visibility: true },
    cell: () => (
      <HStack justify="center" w="full">
        <IconButton ariaLabel="View more options">
          <Edit />
        </IconButton>
      </HStack>
    ),
  }),
]
