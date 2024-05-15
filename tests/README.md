# Tests

The workspace for writing an running tests for the Cerberus Design System.

## Writing Tests

This workspace uses Bun and Testing Library to write and run tests for the Cerberus Design System.

### Setup

Because this workspace uses Bun and Testing Library you will need to add some additional helpers to your `describe` functions.

Add this to each test:

```diff
import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Show } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Show', () => {
+ setupStrictMode()
+ afterEach(cleanup)

  test('should do something', () => {
    // Your test here
  })
})
```

This is because Testing Library is tightly coupled to Jest (unfortunately) and Cerberus prefers a more lightweight and performant testing library via Bun and HappyDom.

### Expect Statements

Similar, you (currently) cannot use the Testing Library Jest helpers, rather you must use the native helpers.

This will error:

```ts
expect(screen.getByText(/hello world/i)).toBeInTheDocument()
```

This will work:

```ts
expect(screen.queryByText(/hello world/i)).toBeTruthy()
```

## Running Tests

To run tests, you can use the following commands:

To run all tests with a coverage report (recommended):

```bash
pnpm run test:ci
```

To run all tests without a coverage report:

```bash
pnpm run test
```
