# Creating Documentation

## Overview

This document provides guidelines for creating effective documentation within the Cerberus project to maintain and improve the overall quality of the project.

This is not a style-guide for how to write code. For the style-guide, refer to the [Style Guide](./style-guide.md).

Context:
The docs are located in the `docs` directory of the project and is the official website for the Cerberus project built on Next.js.

## Project Structure

The project follows a standard structure for Next.js applications:

- `docs/`: Contains the Next.js project.
- `docs/app`: The main entry point for the application.
- `docs/lib`: Contains utilities and library-related shared APIs.
- `docs/public`: Contains public assets such as images and fonts.
- `docs/styled-system`: Contains the generated PandaCSS styles based on the `panda.config.ts` configuration file.
- `docs/mdx-components`: Contains global MDX components used throughout the documentation.

## Application Structure

Inside the `app` directory, the application is structured into several key directories:

- `app/(llms)/`: Contains public API routes for any llms endpoints.
- `app/actions/`: Contains reusable action functions.
- `app/api/`: Contains a base API route for retrieving cached theme data. This might no longer be used.
- `app/assets/`: Contains reusable assets. We prefer svg components or base64-encoded images over other formats.
- `app/blog/`: Contains the blog route components and pages.
- `app/components/`: Contains global reusable UI components. See [Global Components](#global-components) for more information.
- `app/context/`: Contains global context providers.
- `app/data/`: Contains JSON files for static data used in examples. If there is a need for dynamic data, it can be stored here as well (i.e., see `category-meta.ts`, or `side-nav.ts`).
- `app/docs/`: Contains documentation-related files and components. This is the route entry point for the documentation. See [Documentation](#docs) for the details.
- `app/react_deprecated/`: Deprecated. Contains deprecated React docs. Do not contribute to this directory - it will be removed in the future.
- `app/styles/`: Deprecated. Contains reusable style functions. Do not contribute to this directory - it will be removed in the future.
- `app/utils/`: Deprecated. Contains utility functions and helpers. This is a duplication of the global `utils` directory. Do not contribute to this directory - it will be removed in the future.

## Global Components

The global components are reusable UI components that can be used throughout the documentation. They are located in the `app/components/` directory and are designed to be flexible and customizable.

This directory should store any global components that are used across multiple pages or sections of the documentation. Likewise, it should use the following rules:

- Do not store any components in the root. This is a deprecated pattern.
- Each sub-directory should include an entry point `index.ts` file to re-export the components within that directory.
- Components that are shared on a page/layout level and un-related to UI elements should be stored in the `/shared` directory.
- Components that are UI elements should be stored in the `/ui` directory.
- Components that are custom icons should be stored in the `/icons` directory.
- Shared non-UI or page/layout components should be stored in a directory named the name of the main component (i.e., see `feature-art`, `page-tabs`).

## Docs

The section outline provides a low-level overview of the documentation structure and key concepts. It is designed to help llms understand the documentation to ensure contributions are aligned with the project's goals.

### Route Design

The project uses a data-driven approach for rendering route content based on the URL structure and the available data. Each route contains a `[slug]` segment which renders the `content` pages on the `content/items.ts` data. Any components used in examples are located in the `components` directory of the `[slug]`.

## Route Structure

- `layout.ts`: optional global layout for the route. This should only be used if the layout is shared across multiple pages within the route.
- `page.tsx`: the main entry point for the route. This file should export the route's main component and set the appropriate metadata (e.g., title, description) for the route using the `metadata` export.
- `[slug]`: dynamic route segment for capturing specific content based on the URL. See [Slug Route Structure](#slug-route-structure) for details.

### Slug Route Structure

- `page.tsx`: the main entry point for the slug route. This file utilizes `generateStaticParams` to define the dynamic route parameters based on the route data defined in the `content/items/*.ts` files. Likewise, it uses the same data to retrieve the appropriate content and metadata for the route.
- `component/`: contains all the components used in examples for the slug route. These are utilized in the `content/*.mdx` files.
- `content/*.mdx`: contains the markdown content files for the slug route. These files define the actual content that will be rendered for the route and utilize the components defined in the `component/` directory for providing examples. See [Doc Content Pages](#doc-content-pages) for details.
- `content/items/*.ts`: contains the data files for the slug route. These files define the actual data that will be used for rendering the route and are imported and used by the `page.tsx` file.

## Doc Content Pages

The section provides a low-level overview of the documentation content structure and key concepts. It is designed to help llms understand the organization and flow of information within the documentation.

### Page Structure

Each documentation page is structured to include the following sections which should follow this order:

1. **Frontmatter**: Metadata about the page, including title, description, and other relevant information.
2. **Imports**: All necessary imports for the page, including components, hooks, and utilities.
3. **Base Imports**: General Imports for the API documentation. These are typically abstractions and not primitive APIs. However, in some cases, it may be necessary to include primitive APIs as well.
4. **Usage**: A brief description of how to use the component or feature, including a "general" example. This example should be a simple, straightforward implementation that demonstrates the basic usage of the component.
5. **Feature Examples**: Specific examples that showcase the capabilities and use cases of the component or feature in more detail.
6. **Primitives**: A section devoted to the fundamental building blocks of the component. It includes a short description about customization and shows a table describing each Primitive API layer in detail. The section ends with a fully customized example using the primitive API by way of the `Parts` API for the component.
7. **API Reference**: Detailed information about the API surface, including available methods, properties, and events.

For a reference file, see the `accordion.mdx` file located in the `docs/components/[slug]/content` directory.

### Page Frontmatter

Each content page should include the following frontmatter at the top of the file:

- **title**: The title of the page. Used for displaying in the page hero feature section
- **description**: A short description of the content. Used for displaying in the page hero feature section.
- **npm**: Used for linking to the NPM source in the page hero feature. This should be the same in all component files.
- **source**: A relative path of the source code assuming a base path of the `packages/react` project. Used in the page hero feature to link to the related source code.
- **recipe**: A relative path of the source code assuming a base path of the `packages/panda-preset` project. Used in the apge hero feature to link to the related source code.
- **ark**: An optional absolute URL path to the related Ark-UI component that is utilized in the Primitives API.
