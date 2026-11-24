/**
 * The schema of a generated `ComponentDocSpec` JSON file. It is the single source of
 * truth: the TS types in `./types` are inferred from it, the generator validates every
 * spec against it, and a JSON Schema is emitted next to the specs for other tools.
 *
 * This module must stay free of Bun and Node APIs: the docs app type-checks against it.
 */
import { z } from 'zod'

export const KeyboardMappingSchema = z.strictObject({
  key: z.string().min(1).describe('Key or chord, e.g. `Shift + Tab`'),
  description: z.string().min(1),
})

export const PropSpecSchema = z.strictObject({
  name: z.string().regex(/^[A-Za-z_$][\w$]*$/),
  type: z.string().min(1).describe('TypeScript type, as written in source'),
  required: z.boolean(),
  defaultValue: z.string().optional().describe('Source text of the default'),
  description: z.string(),
  deprecated: z
    .string()
    .optional()
    .describe(
      'Present when deprecated: the `@deprecated` text, possibly empty',
    ),
  see: z.array(z.string()).optional().describe('`@see` references'),
})

export const DataAttributeSpecSchema = z
  .strictObject({
    name: z.string().regex(/^data-[a-z0-9-]+$/),
    values: z
      .array(z.string())
      .min(1)
      .optional()
      .describe('The fixed values the attribute takes'),
    presence: z
      .literal(true)
      .optional()
      .describe('A flag: present when the state applies, absent otherwise'),
    reflects: z
      .string()
      .optional()
      .describe('Mirrors the value of this prop (on the part or on Root)'),
    description: z.string().min(1).optional().describe('From `@zag-js/docs`'),
  })
  .describe(
    'A data attribute set by Zag.js, from its `connect` source and `@zag-js/docs`',
  )

export const CssVarSpecSchema = z
  .strictObject({
    name: z.string().regex(/^--[a-z0-9-]+$/),
    description: z.string().min(1),
  })
  .describe('A CSS variable set by Zag.js, from `@zag-js/docs`')

export const PartSpecSchema = z.strictObject({
  name: z
    .string()
    .min(1)
    .describe('Member on the compound component, e.g. `Root`'),
  exportName: z.string().min(1).describe('e.g. `Accordion.Root`'),
  kind: z.enum(['primitive', 'abstraction']),
  description: z.string(),
  dataScope: z.string().optional().describe('`data-scope` attribute value'),
  dataPart: z.string().optional().describe('`data-part` attribute value'),
  inherits: z
    .array(z.string().min(1))
    .optional()
    .describe('Parts (by `exportName`) whose props this part also accepts'),
  inheritsExternal: z
    .array(
      z.object({
        part: z.string().min(1).describe('`exportName` of the inherited part'),
        spec: z.string().min(1).describe('Key of the spec that documents it'),
        docsSlug: z.string().min(1).describe('Docs page slug of that spec'),
      }),
    )
    .optional()
    .describe('Parts of other components whose props this part also accepts'),
  dataAttributes: z
    .array(DataAttributeSpecSchema)
    .optional()
    .describe('State data attributes beyond data-scope/data-part'),
  keyboard: z
    .array(z.string().min(1))
    .optional()
    .describe('Keys this part handles, from the Zag.js `keyMap`'),
  cssVars: z
    .array(CssVarSpecSchema)
    .optional()
    .describe('CSS variables this part sets'),
  props: z.array(PropSpecSchema),
})

export const VariantSpecSchema = z.strictObject({
  name: z.string().min(1),
  values: z.array(z.string()).min(1),
  defaultValue: z.string().optional(),
  allowsBoolean: z
    .boolean()
    .optional()
    .describe('Panda `allowsBoolean`: also accepts `true`/`false`'),
})

export const A11ySpecSchema = z
  .strictObject({
    pattern: z.string().min(1).optional().describe('WAI-ARIA pattern name'),
    apgUrl: z.url().optional(),
    keyboard: z
      .array(KeyboardMappingSchema)
      .describe('`@zag-js/docs` rows, with config overrides applied'),
    notes: z.array(z.string()).optional(),
  })
  .refine((a) => (a.pattern === undefined) === (a.apgUrl === undefined), {
    message: '`pattern` and `apgUrl` go together',
  })

export const ContextApiSpecSchema = z
  .strictObject({
    exposedBy: z
      .array(z.string().min(1))
      .min(1)
      .describe('Cerberus exports that expose it: `X.Context`, `useX()`…'),
    members: z
      .array(
        z.strictObject({
          name: z.string().min(1),
          type: z.string().min(1),
          description: z.string(),
        }),
      )
      .min(1),
  })
  .describe("The Zag machine's API, from `@zag-js/docs`")

export const ComponentDocSpecSchema = z
  .strictObject({
    name: z.string().min(1),
    key: z.string().regex(/^[a-z][a-z0-9-]*$/),
    description: z.string(),
    variants: z.array(VariantSpecSchema),
    parts: z.array(PartSpecSchema),
    a11y: A11ySpecSchema.optional(),
    contextApi: ContextApiSpecSchema.optional(),
  })
  .superRefine((spec, ctx) => {
    const exportNames = new Set(spec.parts.map((p) => p.exportName))
    if (exportNames.size !== spec.parts.length) {
      ctx.addIssue({ code: 'custom', message: 'Duplicate part exportName' })
    }
    for (const part of spec.parts) {
      const names = part.props.map((p) => p.name)
      if (new Set(names).size !== names.length) {
        ctx.addIssue({
          code: 'custom',
          message: `${part.exportName} has duplicate prop names`,
        })
      }
      for (const target of part.inherits ?? []) {
        if (!exportNames.has(target)) {
          ctx.addIssue({
            code: 'custom',
            message: `${part.exportName} inherits unknown part ${target}`,
          })
        }
      }
    }
  })
  .describe('API documentation for one Cerberus component')
