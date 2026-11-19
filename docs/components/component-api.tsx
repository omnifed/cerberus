import { API_SPECS } from '@/generated/api-specs'
import { cerberus, For, Show, Table } from '@cerberus-design/react'
import { Admonition } from '@cerberus-design/react/admonition'
import type { PropsWithChildren } from 'react'
import { Box, Stack } from 'styled-system/jsx'
import type { ComponentDocSpec } from '../../packages/react/scripts/docs/types'

interface ComponentApiProps {
  spec: string
}

export function ComponentApi({ spec }: ComponentApiProps) {
  const data = API_SPECS[spec]

  if (!data) {
    return (
      <Admonition palette="danger" usage="outlined">
        Missing generated API spec for <code>{spec}</code>. Run{' '}
        <code>bun run generate:docs</code>.
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
        <Table.Root decoration="zebra">
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
        </Table.Root>
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
              <cerberus.h3
                id={`${specKey}-${part.name}-heading`}
                pt="lg"
                textStyle="heading-sm"
              >
                <Code>{part.exportName}</Code>{' '}
                <cerberus.small>
                  ({part.kind === 'abstraction' ? 'Abstraction' : 'Primitive'})
                </cerberus.small>
              </cerberus.h3>
              <Body>{part.description}</Body>

              <Show when={(part.inherits?.length ?? 0) > 0}>
                {() => (
                  <Body>
                    Also accepts all props of{' '}
                    <For each={part.inherits ?? []}>
                      {(target, i) => (
                        <cerberus.span key={`inherits:${target}`}>
                          {i > 0 && ', '}
                          <cerberus.a
                            href={`#${partHeadingId(specKey, parts, target)}`}
                          >
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
                  <cerberus.strong>Data attributes:</cerberus.strong>{' '}
                  <Code>data-scope="{part.dataScope}"</Code>,{' '}
                  <Code>data-part="{part.dataPart}"</Code>
                </Body>
              )}

              <Show when={part.props.length > 0}>
                {() => (
                  <Box overflowX="auto">
                    <Table.Root decoration="zebra">
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
                                <CellText>{prop.description}</CellText>
                              </Table.Cell>
                            </Table.Row>
                          )}
                        </For>
                      </Table.Body>
                    </Table.Root>
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

/** Heading id of the part whose `exportName` is `target` (matches the ids above). */
function partHeadingId(
  specKey: string,
  parts: ComponentDocSpec['parts'],
  target: string,
): string {
  const part = parts.find((p) => p.exportName === target)
  return `${specKey}-${part?.name ?? target}-heading`
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
      <Body>
        Complies with the{' '}
        <cerberus.a href={a11y.apgUrl} rel="noreferrer" target="_blank">
          {a11y.pattern} WAI-ARIA design pattern
        </cerberus.a>
        .
      </Body>

      <For each={a11y.notes}>{(note) => <Body key={note}>{note}</Body>}</For>

      <Show when={a11y.keyboard.length > 0}>
        {() => (
          <Box overflowX="auto" mt="md">
            <Table.Root decoration="zebra">
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
            </Table.Root>
          </Box>
        )}
      </Show>
    </cerberus.section>
  )
}

// Typography ------------------------------------------------------------------

function Heading(props: PropsWithChildren<{ id: string }>) {
  return <cerberus.h2 py="lg" textStyle="heading-md" {...props} />
}

function Body(props: PropsWithChildren<{ id?: string }>) {
  return <cerberus.p pb="lg" textStyle="body-md" {...props} />
}

function CellText(props: PropsWithChildren<object>) {
  return <cerberus.small textStyle="body-sm" {...props} />
}

function Code(props: PropsWithChildren<object>) {
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
