import { API_SPECS } from '@/generated/api-specs'
import { cerberus, For, Show, Table } from '@cerberus-design/react'
import { Admonition } from '@cerberus-design/react/admonition'
import type { PropsWithChildren } from 'react'
import { Box, HStack, Stack } from 'styled-system/jsx'
import type { CerberusProps } from '../../packages/react/src/system/types'
import type { ComponentDocSpec } from '../../tools/codegen/docs/types'

interface ComponentApiProps {
  spec: string
}

export function ComponentApi({ spec }: ComponentApiProps) {
  const data = API_SPECS[spec]

  if (!data) {
    return (
      <Admonition palette="danger" usage="outlined">
        Missing generated API spec for <code>{spec}</code>. Run{' '}
        <code>pnpm generate:docs</code>.
      </Admonition>
    )
  }

  return (
    <Stack gap="xl">
      <RecipeVariants
        specKey={data.key}
        name={data.name}
        variants={data.variants}
      />
      <PartsDocs parts={data.parts} specKey={data.key} />
      <ContextApiDocs contextApi={data.contextApi} specKey={data.key} />
      <A11yDocs a11y={data.a11y} specKey={data.key} name={data.name} />
    </Stack>
  )
}

// Recipe Variants -------------------------------------------------------------

type RecipeVarProps = {
  variants: ComponentDocSpec['variants']
  specKey: string
  name: string
}

function RecipeVariants({ variants, specKey, name }: RecipeVarProps) {
  if (variants.length <= 0) return null

  return (
    <cerberus.section aria-labelledby={`${specKey}-variants-heading`}>
      <Heading id={`${specKey}-variants-heading`}>Variants</Heading>
      <Body>
        Set variant props on <Code>{name}</Code> (or <Code>{name}.Root</Code>)
        to cascade styles across all parts.
      </Body>

      <Box overflowX="auto" mt="md">
        <Table decoration="zebra">
          <Table.Caption>{name} recipe variants</Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCol scope="col">Variant</Table.HeaderCol>
              <Table.HeaderCol scope="col">Values</Table.HeaderCol>
              <Table.HeaderCol scope="col">Default</Table.HeaderCol>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <For each={variants}>
              {(variant) => (
                <Table.Row key={`var:${variant.name}`}>
                  <Table.Cell>
                    <Code>{variant.name}</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Code>
                      {variant.values.map((v) => `'${v}'`).join(' | ')}
                    </Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Code>{variant.defaultValue ?? 'undefined'}</Code>
                  </Table.Cell>
                </Table.Row>
              )}
            </For>
          </Table.Body>
        </Table>
      </Box>
    </cerberus.section>
  )
}

// API -------------------------------------------------------------------------

type PartsProps = {
  parts: ComponentDocSpec['parts']
  specKey: string
}

function PartsDocs({ parts, specKey }: PartsProps) {
  return (
    <cerberus.section aria-labelledby={`${specKey}-api-heading`}>
      <Heading id={`${specKey}-api-heading`}>API Reference</Heading>

      <Stack gap="lg" mt="md">
        <For each={parts}>
          {(part, idx) => (
            <cerberus.article
              key={`parts:${part.exportName}:${idx}`}
              aria-labelledby={`${specKey}-${part.name}-heading`}
            >
              <HStack gap="md">
                <Heading>
                  <Code fontSize="1.5rem">{part.exportName}</Code>
                  <cerberus.span>
                    ({part.kind === 'abstraction' ? 'Abstraction' : 'Primitive'}
                    )
                  </cerberus.span>
                </Heading>
              </HStack>
              <Body>{part.description}</Body>

              <Show
                when={
                  (part.inherits?.length ?? 0) +
                    (part.inheritsExternal?.length ?? 0) >
                  0
                }
              >
                {() => (
                  <Body>
                    Also accepts all props of{' '}
                    <For
                      each={[
                        ...(part.inherits ?? []).map((target) => ({
                          target,
                          href: `#${partHeadingId(specKey, parts, target)}`,
                        })),
                        // Parts of other components link to their API section
                        ...(part.inheritsExternal ?? []).map((ext) => ({
                          target: ext.part,
                          href: `/docs/components/${ext.docsSlug}#api`,
                        })),
                      ]}
                    >
                      {({ target, href }, i) => (
                        <cerberus.span key={`inherits:${target}`}>
                          {i > 0 && ', '}
                          <cerberus.a href={href}>
                            <Code>{target}</Code>
                          </cerberus.a>
                        </cerberus.span>
                      )}
                    </For>
                    .
                  </Body>
                )}
              </Show>

              {part.dataScope && part.dataPart && (
                <Body>
                  <Heading>Data attributes:</Heading>{' '}
                  <Code>data-scope="{part.dataScope}"</Code>,{' '}
                  <Code>data-part="{part.dataPart}"</Code>
                </Body>
              )}

              <Show when={(part.keyboard?.length ?? 0) > 0}>
                {() => (
                  <Body>
                    <cerberus.strong>Keyboard:</cerberus.strong>{' '}
                    <For each={part.keyboard ?? []}>
                      {(key, i) => (
                        <cerberus.span key={`keys:${key}`}>
                          {i > 0 && ' '}
                          <KBD>{key}</KBD>
                        </cerberus.span>
                      )}
                    </For>
                  </Body>
                )}
              </Show>

              <Show when={part.props.length > 0}>
                {() => (
                  <Box overflowX="auto">
                    <Table decoration="zebra">
                      <Table.Caption>{part.exportName} props</Table.Caption>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCol scope="col">Prop</Table.HeaderCol>
                          <Table.HeaderCol scope="col">Type</Table.HeaderCol>
                          <Table.HeaderCol scope="col">
                            Required
                          </Table.HeaderCol>
                          <Table.HeaderCol scope="col">Default</Table.HeaderCol>
                          <Table.HeaderCol scope="col">
                            Description
                          </Table.HeaderCol>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        <For each={part.props}>
                          {(prop) => (
                            <Table.Row key={`parts:prop:${prop.name}`}>
                              <Table.Cell>
                                <Code>{prop.name}</Code>
                              </Table.Cell>
                              <Table.Cell>
                                <Code>{prop.type}</Code>
                              </Table.Cell>
                              <Table.Cell>
                                <CellText>
                                  {prop.required ? 'Yes' : 'No'}
                                </CellText>
                              </Table.Cell>
                              <Table.Cell>
                                <Code>{prop.defaultValue ?? 'undefined'}</Code>
                              </Table.Cell>
                              <Table.Cell>
                                <Show when={prop.deprecated !== undefined}>
                                  {() => (
                                    <CellText>
                                      <cerberus.strong>
                                        Deprecated.
                                      </cerberus.strong>{' '}
                                      {prop.deprecated}{' '}
                                    </CellText>
                                  )}
                                </Show>
                                <CellText>{prop.description}</CellText>
                              </Table.Cell>
                            </Table.Row>
                          )}
                        </For>
                      </Table.Body>
                    </Table>
                  </Box>
                )}
              </Show>

              <Show when={(part.dataAttributes?.length ?? 0) > 0}>
                {() => (
                  <Box overflowX="auto" mt="md">
                    <Table decoration="zebra">
                      <Table.Caption>
                        {part.exportName} state data attributes
                      </Table.Caption>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCol scope="col">
                            Attribute
                          </Table.HeaderCol>
                          <Table.HeaderCol scope="col">Value</Table.HeaderCol>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        <For each={part.dataAttributes ?? []}>
                          {(attr) => (
                            <Table.Row key={`parts:attr:${attr.name}`}>
                              <Table.Cell>
                                <Code>{attr.name}</Code>
                              </Table.Cell>
                              <Table.Cell>
                                <DataAttributeValue attr={attr} />
                              </Table.Cell>
                            </Table.Row>
                          )}
                        </For>
                      </Table.Body>
                    </Table>
                  </Box>
                )}
              </Show>

              <Show when={(part.cssVars?.length ?? 0) > 0}>
                {() => (
                  <Box overflowX="auto" mt="md">
                    <Table decoration="zebra">
                      <Table.Caption>
                        {part.exportName} CSS variables
                      </Table.Caption>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCol scope="col">
                            Variable
                          </Table.HeaderCol>
                          <Table.HeaderCol scope="col">
                            Description
                          </Table.HeaderCol>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        <For each={part.cssVars ?? []}>
                          {(cssVar) => (
                            <Table.Row key={`parts:var:${cssVar.name}`}>
                              <Table.Cell>
                                <Code>{cssVar.name}</Code>
                              </Table.Cell>
                              <Table.Cell>
                                <CellText>{cssVar.description}</CellText>
                              </Table.Cell>
                            </Table.Row>
                          )}
                        </For>
                      </Table.Body>
                    </Table>
                  </Box>
                )}
              </Show>
            </cerberus.article>
          )}
        </For>
      </Stack>
    </cerberus.section>
  )
}

type DataAttribute = NonNullable<
  ComponentDocSpec['parts'][number]['dataAttributes']
>[number]

/** What the Zag source says the value is; `@zag-js/docs` prose where it can't say. */
function DataAttributeValue({ attr }: { attr: DataAttribute }) {
  if (attr.values) {
    return (
      <CellText>
        <Code>{attr.values.map((v) => `"${v}"`).join(' | ')}</Code>
        {attr.description ? ` ${attr.description}` : null}
      </CellText>
    )
  }
  if (attr.reflects) {
    return (
      <CellText>
        Mirrors the <Code>{attr.reflects}</Code> prop
      </CellText>
    )
  }
  if (attr.description) return <CellText>{attr.description}</CellText>
  if (attr.presence) {
    return <CellText>Present when the state applies, absent otherwise</CellText>
  }
  return <CellText>Set by the component</CellText>
}

/** Heading id of the part whose `exportName` is `target` (matches the ids above). */
function partHeadingId(
  specKey: string,
  parts: ComponentDocSpec['parts'],
  target: string,
): string {
  const part = parts.find((p) => p.exportName === target)
  return `${specKey}-${part?.name ?? target}-heading`
}

// Context API Docs ------------------------------------------------------------

type ContextApiProps = {
  contextApi: ComponentDocSpec['contextApi']
  specKey: string
}

function ContextApiDocs({ contextApi, specKey }: ContextApiProps) {
  if (!contextApi) return null

  return (
    <cerberus.section aria-labelledby={`${specKey}-context-api-heading`}>
      <Heading id={`${specKey}-context-api-heading`}>Context API</Heading>
      <Body>
        <For each={contextApi.exposedBy}>
          {(name, index) => (
            <span key={name}>
              {index > 0 &&
                (index === contextApi.exposedBy.length - 1 ? ' and ' : ', ')}
              <Code>{name}</Code>
            </span>
          )}
        </For>{' '}
        {contextApi.exposedBy.length > 1 ? 'expose' : 'exposes'} the component's
        state and methods:
      </Body>

      <Box overflowX="auto">
        <Table decoration="zebra">
          <Table.Caption>Context API</Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCol scope="col">Property</Table.HeaderCol>
              <Table.HeaderCol scope="col">Type</Table.HeaderCol>
              <Table.HeaderCol scope="col">Description</Table.HeaderCol>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <For each={contextApi.members}>
              {(member) => (
                <Table.Row key={`context:${member.name}`}>
                  <Table.Cell>
                    <Code>{member.name}</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Code>{member.type}</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <CellText>{member.description}</CellText>
                  </Table.Cell>
                </Table.Row>
              )}
            </For>
          </Table.Body>
        </Table>
      </Box>
    </cerberus.section>
  )
}

// A11y Docs -------------------------------------------------------------------

type A11yProps = {
  a11y: ComponentDocSpec['a11y']
  specKey: string
  name: string
}

function A11yDocs({ a11y, specKey, ...rest }: A11yProps) {
  if (!a11y) return null

  return (
    <cerberus.section aria-labelledby={`${specKey}-a11y-heading`}>
      <Heading id={`${specKey}-a11y-heading`}>Accessibility</Heading>
      <Show when={a11y.pattern && a11y.apgUrl}>
        {() => (
          <Body>
            Complies with the{' '}
            <cerberus.a href={a11y.apgUrl} rel="noreferrer" target="_blank">
              {a11y.pattern} WAI-ARIA design pattern
            </cerberus.a>
            .
          </Body>
        )}
      </Show>

      <For each={a11y.notes}>{(note) => <Body key={note}>{note}</Body>}</For>

      <Show when={a11y.keyboard.length > 0}>
        {() => (
          <Box overflowX="auto" mt="md">
            <Table decoration="zebra">
              <Table.Caption>{rest.name} keyboard interactions</Table.Caption>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCol scope="col">Key</Table.HeaderCol>
                  <Table.HeaderCol scope="col">Description</Table.HeaderCol>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <For each={a11y.keyboard}>
                  {(row) => (
                    <Table.Row key={`a11y:${row.key}`}>
                      <Table.Cell>
                        <KBD>{row.key}</KBD>
                      </Table.Cell>
                      <Table.Cell>
                        <CellText>{row.description}</CellText>
                      </Table.Cell>
                    </Table.Row>
                  )}
                </For>
              </Table.Body>
            </Table>
          </Box>
        )}
      </Show>
    </cerberus.section>
  )
}

// Typography ------------------------------------------------------------------

function Heading(props: PropsWithChildren<{ id?: string }>) {
  return <cerberus.h2 py="lg" textStyle="heading-md" {...props} />
}

function Body(props: PropsWithChildren<{ id?: string }>) {
  return <cerberus.p pb="lg" textStyle="body-md" {...props} />
}

function CellText(props: PropsWithChildren<object>) {
  return <cerberus.small textStyle="body-sm" {...props} />
}

function Code(props: PropsWithChildren<CerberusProps<'code'>>) {
  return (
    <cerberus.code
      bgColor="var(--shiki-background)"
      color="success.text.100"
      fontVariationSettings="'slnt' -3, 'CASL' 1, 'CRSV' 0, 'MONO' 0"
      letterSpacing="initial"
      px="sm"
      py="xs"
      textStyle="mono-xs"
      fontSize="sm"
      rounded="sm"
      {...props}
    />
  )
}

function KBD(props: PropsWithChildren<object>) {
  return (
    <cerberus.kbd
      bgColor="var(--shiki-background)"
      color="success.text.100"
      fontVariationSettings="'slnt' -3, 'CASL' 1, 'CRSV' 0, 'MONO' 0"
      letterSpacing="initial"
      px="sm"
      py="xs"
      textStyle="mono-xs"
      fontSize="sm"
      rounded="sm"
      {...props}
    />
  )
}
