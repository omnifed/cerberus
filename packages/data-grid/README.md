# Cerberus DataGrid

This is a DataGrid component for React. View the [official docs](https://cerberus.digitalu.design/docs/data-grid/overview).

## Installation

```bash
pnpm add @cerberus/data-grid@npm:@cerberus-design/data-grid
```

## Basic Usage

```tsx
'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { Stack } from 'styled-system/jsx'
import { columns } from '../quick-start/columns.demo'
import { useFakeQuery } from '../quick-start/data'

export function BasicDemo() {
  // Normally this would be from useQuery or a server-side API call
  const data = useFakeQuery(1000)

  return (
    <Stack direction="column" h="20rem" w="full">
      <DataGrid columns={columns} data={data} />
    </Stack>
  )
}
```

---

_Copyright (c) 2024 Digital University, All Rights Reserved_
