# Icons

This is the official icon library for the Cerberus design system for React.

## Installation

```bash
pnpm add @cerberus-design/icons
```

## Usage

```typescript
import { Add } from '@cerberus-design/icons';
import { IconButton, createIconButtonProps } from '@cerberus-design/react';

// An optional helper to manage a11y for the IconButton
const iconBtnProps = createIconButtonProps({
  label: 'Add to order',
  palette: 'page',
  size: 'lg',
});

function App() {
  return (
    <IconButton {...iconBtnProps.btn}>
      <Add {...iconBtnProps.icon} />
    </IconButton>
  );
};
```

## Usage without the React library

```typescript
import { Add } from '@cerberus-design/icons';
import { iconButton } from '@cerberus-design/styled-system/recipes';

function App() {
  return (
    <button aria-label="Add to order" className={iconButton()}>
      <Add aria-hidden />
    </button>
  );
};
```

---

_Copyright (c) 2024 Digital University, All Rights Reserved_
