# Cerberus Repository Style Guide

## Packages Directory

The `packages` directory contains modular components of the Cerberus design system. Below are the conventions and design principles for each subdirectory:

### `panda-preset`

- **Structure**:
  - `src/`: Contains the source code for the preset.
    - `conditions.ts`: Defines PandaCSS conditions.
    - `config.ts`: Configuration file for the preset.
    - `globalCss.ts`: Contains global CSS definitions.
    - `index.ts`: Entry point for the package.
    - `patterns.ts`: Defines PandaCSS patterns.
    - `recipes/`: Contains recipe files for reusable components.
      - Examples: `button.ts`, `fieldMessage.ts`, `iconButton.ts`, etc.
      - `/slots`: Defines slot-based recipes.
    - `theme/`: Defines theme-related files.
      - Examples: `animationStyles.ts`, `easings.ts`, `keyframes.ts`, etc.
    - `themes/`: Contains theme-specific configurations.
      - Example: `acheron/`.
    - `tokens/`: Defines design tokens for the preset.
    - `utilities/`: Contains utility functions for styling.
      - Example: `gradient.data.json`.

  - `.tsup/`: Stores build artifacts.
  - Configuration files: `tsconfig.json`, `tsconfig.lint.json`, and `tsconfig.lint.tsbuildinfo`.

- **Conventions**:
  - **File Naming**:
    - Use `camelCase` for file names (e.g., `globalCss.ts`, `fieldMessage.ts`).

  - **Function Syntax**:
    - Use named functions for consistency.
    - Arrow functions should only be used for callbacks.
    - Types should be explicitly defined for all function parameters and return values.

    ```typescript
    function myFunction(param: string): void {
      // Function logic
    }
    ```

  - **Export Conventions**:
    - Use named exports for all constants.

    ```typescript
    export const myConstant = 42
    export function myFunction(param: string): void {
      // Function logic
    }
    ```

  - **Recipe Naming Syntax**:
    - Use `camelCase` for recipe names (e.g., `button`, `fieldMessage`).

  - **Other Syntax Guidelines**:
    - Always type all function parameters and return values.
    - Use `const` by default; use `let` only when reassignment is necessary.
    - Follow the project's ESLint rules for consistent formatting.

  - **Documentation**:
    - Document all public APIs and components in the `README.md` file.
    - Include JSDoc comments for all exported functions and constants.

### `react`

- **Structure**:
  - `src/`: Contains the source code for the React package.
    - `components/`: All React components, organized by feature or type (e.g., `button/`, `avatar/`, `dialog/`).
      - Each component folder contains the following:
        - `index.ts`: Entry point for the component.
        - `primitives.ts`: Component-specific primitives. Primitives expose the Ark-UI components under the component's namespace using the Cerberus Factory.
        - `parts.ts`: Contains an Object export that maps to the primitives for users that want to utilize an Object oriented import.
        - all other files are abstractions of the primitives using the parts API. These are created to provide a more user-friendly API for the components that are intricate.
      - Deprecated components are in `deprecated/`.
    - `config/`: Configuration files and icon definitions (e.g., `defineIcons.ts`, `icons/`).
    - `context/`: React context providers and related logic (e.g., `theme.tsx`, `cerberus.tsx`).
    - `hooks/`: Custom React hooks (e.g., `useTheme.ts`, `useToggle.ts`).
    - `system/`: System-level utilities and primitive factories for styling and composition.
    - `types.ts`: Shared TypeScript types for props, CSS, and system usage.
    - `utils/`: Utility functions (e.g., `localStorage.ts`).
    - `index.ts`: Entry point for all exports, organized by feature and type.
  - `styled-system/`: Local output directory for Panda CSS system utilities. This is not exposed in the build but utilized for local development.
  - `.tsup/` and `build/`: Build artifacts and output.
  - Configuration files: `tsconfig.json`, `tsconfig.lint.json`, `tsup.config.ts`, `panda.config.ts`.

- **Conventions**:
  - **File Naming**:
    - Use `snake-case` for files (e.g., `button.tsx`, `avatar.tsx`).
    - Use `index.ts` or `index.tsx` for entry points in folders.

  - **Component Syntax**:
    - Use named function components with explicit types for props.
    - Always use TypeScript for all files.
    - Example:

      ```tsx
      export function Button(props: ButtonProps) {
        // Component logic
      }
      ```

  - **Hook Syntax**:
    - Use `use` prefix for all custom hooks (e.g., `useTheme`, `useToggle`).
    - Always type hook parameters and return values.

  - **Export Conventions**:
    - Use named exports for all components, hooks, and utilities.
    - Re-export from `index.ts` for each feature folder and from the root `src/index.ts`.
    - Example:

      ```typescript
      export * from './button'
      export * from './parts'
      ```

  - **Component Naming Syntax**:
    - Follow React best practices for component naming.
    - Use `PascalCase` for all component names (e.g., `Button`, `Avatar`).
    - Use descriptive names for context and hooks (e.g., `ThemeContext`, `useTheme`).

  - **Other Syntax Guidelines**:
    - Always type all props, context values, and return types.
    - Prefer server components over client components when possible.
    - Use React's `useMemo`, `useCallback`, and context APIs for performance and state management.
    - Follow the project's ESLint and Prettier rules for formatting and style.
    - Use JSDoc comments for all exported functions, components, and hooks.
    - Document all public APIs and components in the `README.md` file.
    - Use Panda CSS for styling via the `styled-system` utilities and `panda.config.ts`.

## Docs

The documentation for the design system is located in the `docs/` directory. It should use the same style-guide standards as the Packages guidelines.

## Tests

The test suite should be located in the `tests/` directory and follow the same structure as the components being tested. Each component should have its own test file (e.g., `button.test.tsx`) that includes unit tests for the component's functionality.

## General Guidelines

- All `LICENSE` files must be up-to-date and consistent across packages.
- Use `node_modules/` for dependencies and ensure they are properly versioned in `package.json`.
- Maintain clean and readable code with proper comments and documentation.
