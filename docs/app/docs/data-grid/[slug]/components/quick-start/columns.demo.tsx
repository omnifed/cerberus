import { OverflowMenuHorizontal } from '@carbon/icons-react'
import { Format, IconButton, Tag, TagProps, Text } from '@cerberus-design/react'
import { VStack } from 'styled-system/jsx'
import { columnHelper } from './helper.demo'

export const columns = [
  // A. "ID" Column that can be pinned and sorted
  columnHelper.accessor('id', {
    header: 'ID',
    width: 80,
    features: {
      pinning: 'left',
      sort: true,
    },
    cell: ({ value }) => <Text>#{value}</Text>,
  }),

  // B. Derived Accessor (Function)
  // We combine First + Last name for sorting/filtering, but render custom UI
  columnHelper.accessorFn((row) => `${row.firstName} ${row.lastName}`, {
    id: 'fullName',
    header: 'Employee',
    width: 200,
    features: {
      sort: true,
      filter: { operator: 'contains' },
    },
    cell: ({ row, value }) => (
      <VStack alignItems="flex-start" gap="2">
        <Text textStyle="body-md">{value}</Text>
        <Text color="page.text.100" textStyle="label-sm">
          {row.email}
        </Text>
      </VStack>
    ),
  }),

  // C. Deep Accessor (Nested Object) using a plain text string for the cell
  columnHelper.accessorFn((row) => row.department.name, {
    id: 'department',
    header: 'Department',
    width: 150,
    features: { sort: true },
  }),

  // D. Formatting (Numeric Sort, String Display)
  columnHelper.accessor('salary', {
    header: 'Salary',
    width: 120,
    features: { sort: true }, // ✅ Sorts numerically (100 before 500)
    // We format the visual ONLY. The underlying data remains a number.
    cell: ({ value }) => (
      <Format.Number value={value} style="currency" currency="USD" />
    ),
  }),

  // E. Status Badge
  columnHelper.accessor('status', {
    header: 'Status',
    width: 100,
    cell: ({ value }) => {
      const palette: Record<string, TagProps['palette']> = {
        active: 'success',
        inactive: 'page',
        on_leave: 'info',
      }
      return (
        <Tag palette={palette[value]}>
          {value.replace('_', ' ').toUpperCase()}
        </Tag>
      )
    },
  }),

  // F. Display Column (Right Pinned Actions)
  columnHelper.display({
    id: 'actions',
    header: '',
    width: 60,
    features: {
      pinning: 'right',
    },
    cell: () => (
      <IconButton ariaLabel="View more options">
        <OverflowMenuHorizontal />
      </IconButton>
    ),
  }),
]
