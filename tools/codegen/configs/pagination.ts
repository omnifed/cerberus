import { paginationAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const paginationConfig = defineComponent({
  key: 'pagination',
  anatomy: paginationAnatomy,
  description: `
The Pagination component lets users navigate between the pages of a data set.

Use the default \`<Pagination>\` to render the previous and next triggers around one button per page (with ellipses), or pass \`compact\` to show "page of total" text between the triggers instead. Non-part children render inside the root, where \`usePaginationContext()\` reads the state, e.g. to \`slice()\` your data. Compose \`Pagination.ItemList\`, \`Pagination.CompactList\`, \`Pagination.PrevTriggerWithIcon\`, \`Pagination.NextTriggerWithIcon\`, \`Pagination.ItemButton\` and \`Pagination.EllipsisButton\` for custom layouts, or the unstyled primitives for full structural control: every part accepts Panda style props, \`css\` and \`asChild\`.
  `,

  // No `pagination` slot recipe exists (v1 used `withNoRecipe`): every part is
  // `styled(ArkPagination.X)` and the abstractions render Cerberus buttons
  recipe: false,

  // v1 put behavior under part-like names (`PaginationItem`, `PrevTrigger`,
  // `NextTrigger`, `CompactText`); under the bare-part policy those become
  // abstractions named after what they add
  abstractions: [
    {
      name: 'El',
      file: 'pagination',
      description:
        'An abstraction that renders the previous and next triggers around the page items and ellipses, or "page of total" text with `compact`',
      isDefaultExport: true,
      types: ['PaginationProps'],
    },
    {
      name: 'ItemList',
      file: 'item-list',
      description:
        'An abstraction that renders a Group of the previous trigger, one button per page or ellipsis, and the next trigger',
      types: ['PaginationItemListProps'],
    },
    {
      name: 'CompactList',
      file: 'compact-list',
      description:
        'An abstraction that renders a Group of the previous trigger, "page of total" text, and the next trigger',
      types: ['PaginationCompactListProps'],
    },
    {
      name: 'PrevTriggerWithIcon',
      file: 'trigger-with-icon',
      description:
        'An abstraction of the previous trigger rendered as a square IconButton with the Cerberus `calendarPrev` icon',
      types: ['PaginationPrevTriggerWithIconProps'],
    },
    {
      name: 'NextTriggerWithIcon',
      file: 'trigger-with-icon',
      description:
        'An abstraction of the next trigger rendered as a square IconButton with the Cerberus `calendarNext` icon',
      types: ['PaginationNextTriggerWithIconProps'],
    },
    {
      name: 'ItemButton',
      file: 'item-button',
      description:
        'An abstraction of the item rendered as an outlined-subtle Button that shows its page number',
      types: ['PaginationItemButtonProps'],
    },
    {
      name: 'EllipsisButton',
      file: 'ellipsis-button',
      description:
        'An abstraction of the ellipsis rendered as an outlined-subtle Button that shows "…"',
      types: ['PaginationEllipsisButtonProps'],
    },
  ],

  // `Context` and `RootProvider` were exported in v1 (`PaginationParts`).
  // `RootProvider` pairs with `usePagination()` (exported from index.client)
  arkMembers: ['RootProvider', 'Context'],

  // `page` is also a CSS property: without this, Panda's `styled()` reads a
  // controlled `page` as a style and it never reaches Ark
  forwardProps: { Root: ['page'] },

  // v1 re-exported these from the component module
  exports: [
    {
      from: './types',
      types: [
        'PaginationContextDetails',
        'PageDetails',
        'PageSizeChangeDetails',
      ],
    },
  ],

  // Zag's pagination machine handles no keys: every part is a native button
  // (or link) navigated with Tab and activated with Enter/Space

  // The page lists set every item's `type`/`value` and every ellipsis' `index`
  patchable: { Item: ['type', 'value'], Ellipsis: ['index'] },
})
