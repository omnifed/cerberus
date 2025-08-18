# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository Overview

Cerberus is a modern design system built with TypeScript, React, and PandaCSS. It's structured as a monorepo managed by pnpm with Bun as the runtime, providing both a CSS preset and React component library for Digital University.

## Common Development Commands

### Installation & Setup

```bash
# Install all dependencies (run in repository root)
pnpm install
```

### Documentation

```bash
# Start the documentation website in development mode
pnpm run start:docs

# Build documentation
pnpm --filter docs run build
```

### Linting & Code Quality

```bash
# Run all linting checks (TypeScript, ESLint, Oxlint)
pnpm run lint

# Run ESLint only
pnpm run lint:es

# Run Oxlint only (faster linting)
pnpm run lint:ox

# Run TypeScript checks for packages
pnpm run lint:packages

# Run TypeScript checks for tests
pnpm run lint:tests

# Run TypeScript checks for documentation
pnpm run lint:website
```

### Testing

```bash
# Run tests with coverage (recommended)
pnpm run test

# Run tests in the tests workspace directly
pnpm --filter tests run test:ci

# Run tests without coverage
pnpm --filter tests run test
```

### Building

```bash
# Build React components
pnpm --filter @cerberus-design/react run build

# Build Panda preset
pnpm --filter @cerberus-design/panda-preset run build

# Clean build artifacts for React
pnpm --filter @cerberus-design/react run clean

# Clean build artifacts for Panda preset
pnpm --filter @cerberus-design/panda-preset run clean
```

### Development Workflows

```bash
# Generate PandaCSS files for React components
pnpm --filter @cerberus-design/react run prepare

# Generate PandaCSS files for docs
pnpm --filter docs run prepare

# Run single test file
bun test tests/path/to/specific.test.ts

# Watch mode for development
pnpm --filter docs run dev
```

## Architecture Overview

### Monorepo Structure

The repository follows a workspace-based architecture with these key packages:

- **`packages/panda-preset`**: Contains the core styling system built on PandaCSS
- **`packages/react`**: React component library that uses the panda-preset for styling
- **`docs/`**: Next.js documentation website showcasing components and usage
- **`tests/`**: Centralized test suite using Bun and Testing Library
- **`configs/`**: Shared configuration files
- **`.llms/`**: AI/LLM integration documentation and guidelines

### Styling Architecture

Cerberus uses a **separation of concerns** approach:

1. **PandaCSS Preset** (`packages/panda-preset/src/`):
   - `recipes/`: Component-specific style recipes (button, field, etc.)
   - `recipes/slots/`: Multi-part component recipes (complex components)
   - `theme/`: Design tokens, keyframes, text styles
   - `tokens/`: Core design tokens and semantic tokens
   - `utilities/`: Custom CSS utilities

2. **React Component Integration**:
   - Components consume PandaCSS recipes through the Cerberus Primitive Factory
   - Each component has three key files: `index.ts`, `primitives.tsx`, `parts.ts`
   - Primitive Factory provides `withRecipe`, `withSlotRecipe`, and `withNoRecipe` methods

### Component Architecture

Each React component follows this pattern:

- **`primitives.tsx`**: Direct integration with Ark-UI components using Cerberus factory
- **`parts.ts`**: Object-oriented API for component parts (for complex components)
- **`index.ts`**: Public API exports

Components are built on **Ark-UI** as the base layer, enhanced with **Cerberus styling** through the primitive factory system.

### Key Systems

#### Primitive Factory System

The `CerberusPrimitive` class in `packages/react/src/system/primitive-factory.tsx` provides three methods:

- `withNoRecipe()`: For unstyled components
- `withRecipe()`: For single-variant recipe components
- `withSlotRecipe()`: For multi-part components with slot-based styling

#### Context Architecture

Located in `packages/react/src/context/`:

- `cerberus.tsx`: Main provider context
- `theme.tsx`: Theme management
- `feature-flags.tsx`: Feature flag management
- Component-specific contexts (field, navMenu, etc.)

#### Testing Strategy

- Uses **Bun** as test runner for performance
- **Testing Library** for React component testing
- **HappyDOM** instead of JSDOM for lighter weight
- Tests organized by package: `tests/panda-preset/` and `tests/react/`

## Development Guidelines

### File Naming Conventions

- **Panda Preset**: `camelCase` for all files (e.g., `globalCss.ts`, `fieldMessage.ts`)
- **React Components**: `kebab-case` for files (e.g., `button.tsx`, `date-picker.tsx`)
- **Components**: `PascalCase` for component names (e.g., `Button`, `DatePicker`)

### Function & Export Patterns

- Use **named functions** for consistency (avoid arrow functions except for callbacks)
- Use **named exports** throughout (no default exports)
- Always provide explicit TypeScript types for function parameters and return values

### Recipe Development

- Recipe names use `camelCase`
- Recipes are organized by complexity: simple recipes in `/recipes`, complex multi-part in `/recipes/slots`
- All recipes must follow the JSR slow types requirements

### Component Development

When creating new React components, follow the pattern:

1. Create component directory in `packages/react/src/components/`
2. Create `primitives.tsx` using Ark-UI + Cerberus factory pattern
3. Create `parts.ts` for Object-oriented API
4. Create `index.ts` to export public APIs
5. Add exports to main `packages/react/src/index.ts`

Detailed instructions are available in `.llms/create-react-component.md`.

### Testing Approach

- Write tests in `tests/` workspace organized by package
- Use native Bun expect statements (not Jest-style Testing Library assertions)
- Example: Use `expect(screen.queryByText(/hello/i)).toBeTruthy()` instead of `toBeInTheDocument()`
- Focus on API exports and component functionality

## AI/LLM Integration

The `.llms` directory contains specialized documentation for AI tools:

- **`style-guide.md`**: Comprehensive coding standards and patterns
- **`create-react-component.md`**: Step-by-step component creation guide
- **`docs.md`**: Documentation contribution guidelines

These files are designed to help AI assistants understand and follow project conventions.

## Technology Stack

- **Runtime**: Bun (≥1.2.16)
- **Package Manager**: pnpm (10.14.0)
- **Node**: ≥22.0.0
- **Styling**: PandaCSS
- **Components**: Ark-UI + Custom primitives
- **Testing**: Bun + Testing Library + HappyDOM
- **Documentation**: Next.js
- **Linting**: ESLint, Oxlint, TypeScript
- **Formatting**: Prettier
