# Cerberus Design System

Cerberus is a modern React 19+ design system built with TypeScript, PandaCSS, and Bun. It's structured as a pnpm workspace monorepo providing both a CSS preset and React component library for Digital University.

**Always follow these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Bootstrap & Development Setup

### Install Required Tools

```bash
# Install pnpm globally (exact version required)
npm install -g pnpm@10.17.0

# Install Bun (≥1.2.16 required)
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc
```

### Setup Repository

```bash
# Install all dependencies (run from repository root)
pnpm install
# Takes ~1 minute - NEVER CANCEL
```

## Essential Commands & Timing

### Linting & Code Quality

```bash
# Run all linting checks (TypeScript, ESLint, Oxlint) - takes ~1.5 minutes
pnpm run lint

# Run ESLint only - takes ~40 seconds
pnpm run lint:es

# Run Oxlint only (fastest) - takes ~0.5 seconds
pnpm run lint:ox

# Run TypeScript checks for packages - takes ~30 seconds
pnpm run lint:packages

# Run TypeScript checks for tests - takes ~15 seconds
pnpm run lint:tests
```

### Testing

```bash
# Run full test suite with coverage (RECOMMENDED) - takes ~4 seconds
pnpm run test

# Run tests in tests workspace directly - takes ~4 seconds
pnpm --filter tests run test:ci

# Run tests without coverage - takes ~3 seconds
pnpm --filter tests run test

# Run single test file (for focused testing)
bun test tests/path/to/specific.test.ts
```

### Building

```bash
# Build React components - takes ~50 seconds - NEVER CANCEL
pnpm --filter @cerberus-design/react run build

# Note: panda-preset is SOURCE-ONLY and publishes directly to JSR without build step
# Do NOT try to build panda-preset - it will fail

# Clean React build artifacts
pnpm --filter @cerberus-design/react run clean
```

### PandaCSS Generation

```bash
# Generate PandaCSS files for React components - takes ~2 seconds
pnpm --filter @cerberus-design/react run prepare

# Generate PandaCSS files for docs - takes ~14 seconds
pnpm --filter docs run prepare
```

### Documentation

```bash
# Start documentation website in development mode - takes ~2 seconds
pnpm run start:docs
# Runs at http://localhost:3000

# Note: docs build FAILS in sandboxed environments due to Google Fonts network restrictions
# Do NOT attempt: pnpm --filter docs run build
```

## Validation Requirements

### Always Run Before Committing

```bash
# CRITICAL: Run these commands before any commit or CI will fail
pnpm run lint
pnpm run test
```

### Manual Testing Scenarios

**Always test the documentation site after making changes:**

1. Start docs dev server: `pnpm run start:docs`
2. Navigate to http://localhost:3000
3. Verify homepage loads with Cerberus branding
4. Test theme switching (light/dark mode button)
5. Verify component examples render correctly

## Project Structure & Navigation

### Monorepo Architecture

- **`packages/panda-preset`**: Core styling system built on PandaCSS (source-only, no build)
- **`packages/react`**: React component library using panda-preset for styling
- **`docs/`**: Next.js documentation website showcasing components
- **`tests/`**: Centralized test suite using Bun and Testing Library
- **`configs/`**: Shared configuration files
- **`.llms/`**: AI/LLM integration documentation and guidelines

### Key Files to Know

- **`WARP.md`**: Comprehensive development guidelines for WARP IDE
- **`.llms/style-guide.md`**: Coding standards and patterns (CRITICAL for understanding conventions)
- **`.llms/create-react-component.md`**: Step-by-step component creation guide
- **`pnpm-workspace.yaml`**: Workspace configuration

## Technology Stack Requirements

### Runtime & Package Manager

- **Node.js**: ≥22.0.0 (WARNING: v20 shows compatibility warnings but works)
- **Bun**: ≥1.2.16 (required for testing)
- **pnpm**: 10.17.0 (exact version specified)

### Core Technologies

- **Styling**: PandaCSS
- **Components**: Ark-UI + Custom primitives
- **Testing**: Bun + Testing Library + HappyDOM
- **Documentation**: Next.js
- **Linting**: ESLint, Oxlint, TypeScript

## Common Development Workflows

### Creating New Components

1. Follow `.llms/create-react-component.md` guidelines
2. Create component directory in `packages/react/src/components/`
3. Use Ark-UI + Cerberus factory pattern
4. Add exports to main `packages/react/src/index.ts`
5. Always run `pnpm run lint` and `pnpm run test`

### Testing Approach

- Write tests in `tests/` workspace organized by package
- Use native Bun expect statements (not Jest-style Testing Library assertions)
- Example: Use `expect(screen.queryByText(/hello/i)).toBeTruthy()` instead of `toBeInTheDocument()`
- Focus on API exports and component functionality

## Important Limitations & Workarounds

### Build Limitations

- **docs build FAILS** due to Google Fonts network restrictions - use dev mode only
- **panda-preset has NO BUILD STEP** - it's source-only and publishes directly to JSR
- Only React package builds successfully and is required for CI

### Network Restrictions

- Google Fonts requests fail in sandboxed environments
- Use local development mode for docs validation
- Some external analytics scripts may be blocked

## CI/CD Integration

### Required for CI Success

The GitHub Actions workflow requires these specific commands to pass:

```bash
# Linting checks (must all pass)
pnpm run lint:es
pnpm run lint:ox
pnpm run lint

# Test checks (must pass)
pnpm run test:ci  # (runs from tests workspace)

# Build checks (must pass)
pnpm --filter @cerberus-design/react run build
```

### Timing Expectations for CI

- **Dependencies**: ~1 minute (pnpm install)
- **Linting**: ~1.5 minutes total (lint + lint:es + lint:ox)
- **Testing**: ~4 seconds (very fast with Bun)
- **React Build**: ~50 seconds
- **Total CI time**: ~3-4 minutes

## Troubleshooting

### Common Issues

1. **tsup command not found**: This is expected for panda-preset - no build needed
2. **Google Fonts errors**: Expected in sandboxed environments - ignore for docs
3. **Node version warnings**: Can be ignored if using Node 20+ (warns about 22+ requirement)
4. **Network timeouts**: Some external resources blocked - expected in sandboxed environments

### Recovery Commands

```bash
# Reset everything if build issues occur
pnpm --filter @cerberus-design/react run clean
pnpm install
pnpm --filter @cerberus-design/react run prepare
pnpm --filter @cerberus-design/react run build
```

## Performance Tips

- **Use Oxlint for fastest linting**: `pnpm run lint:ox` (0.5s vs 40s for ESLint)
- **Run specific test files** instead of full suite during development
- **Use prepare commands** to regenerate PandaCSS when styles change
- **Always use pnpm** for package management - npm/yarn not supported

---

**CRITICAL REMINDER**: Always run `pnpm run lint` and `pnpm run test` before committing. The documentation site must be manually tested via dev server after UI changes. Never attempt to build docs or panda-preset packages.
