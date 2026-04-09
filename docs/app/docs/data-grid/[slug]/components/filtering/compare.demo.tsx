import { VStack } from '@/styled-system/jsx'
import { Text } from '@cerberus-design/react'
import { columnHelper } from '../quick-start/helper.demo'

export const columns = [
  columnHelper.accessorFn((row) => `${row.firstName} ${row.lastName}`, {
    id: 'fullName',
    header: 'Employee',
    minWidth: 300,
    features: {
      sort: true,
      filter: (row, _colId, val) => {
        // 1. Bail early if the user cleared the input
        if (!val) return true
        // 2. Normalize the search term to lowercase
        const searchTerm = String(val).toLowerCase()
        // 3. Reconstruct the string we want to search
        const fullName = `${row.firstName} ${row.lastName}`.toLowerCase()
        // 4. Grab the email from the raw row data
        const email = String(row.email).toLowerCase()
        // 5. Match against BOTH
        // If they type "john", it matches the name.
        // If they type "@company.com", it matches the email.
        return fullName.includes(searchTerm) || email.includes(searchTerm)
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
]
