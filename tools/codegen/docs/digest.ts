/**
 * Markdown digests of the doc specs, for agents and LLM routes. Same data as the JSON,
 * as prose and tables. Output is deterministic: spec order, no dates.
 */
import type {
  ComponentDocSpec,
  DataAttributeSpec,
  PartSpec,
  PropSpec,
} from './types'

/**
 * Everything after this marker is the API reference proper. The docs app's LLM routes
 * embed only that part under a page's own `## API` heading.
 */
export const DIGEST_API_MARKER = '<!-- api-reference -->'

/** Inline code that survives backticks in the text and `|` inside tables. */
function code(text: string): string {
  const fence = text.includes('`') ? '``' : '`'
  const padded = text.startsWith('`') || text.endsWith('`') ? ` ${text} ` : text
  return `${fence}${padded.replace(/\|/g, '\\|')}${fence}`
}

/** Plain table-cell text: one line, pipes escaped. */
function cell(text: string): string {
  return text.replace(/\s+/g, ' ').replace(/\|/g, '\\|').trim()
}

function table(headers: string[], rows: string[][]): string {
  return [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...rows.map((row) => `| ${row.join(' | ')} |`),
  ].join('\n')
}

/** First sentence of the first paragraph. */
export function summarize(description: string): string {
  const paragraph = description
    .trim()
    .split(/\n\s*\n/)[0]
    .replace(/\s+/g, ' ')
  const sentence = /^(.+?[.!?])(?:\s|$)/.exec(paragraph)
  return sentence ? sentence[1] : paragraph
}

function propRow(prop: PropSpec): string[] {
  const notes = [
    prop.deprecated !== undefined
      ? `**Deprecated.** ${prop.deprecated}`.trim()
      : '',
    prop.description,
    prop.see?.length ? `See: ${prop.see.join(', ')}` : '',
  ].filter(Boolean)
  return [
    code(prop.name),
    code(prop.type),
    prop.required ? 'Yes' : 'No',
    prop.defaultValue !== undefined ? code(prop.defaultValue) : '—',
    cell(notes.join(' ')),
  ]
}

function attributeValue(attr: DataAttributeSpec): string {
  if (attr.values) return attr.values.map((v) => code(`"${v}"`)).join(' \\| ')
  if (attr.presence) return 'Present when the state applies'
  if (attr.reflects) return `Mirrors the ${code(attr.reflects)} prop`
  return 'Set by the component'
}

function renderPart(part: PartSpec): string {
  const lines = [`### ${part.exportName} (${part.kind})`, '', part.description]

  if (part.inherits?.length) {
    lines.push(
      '',
      `Also accepts all props of ${part.inherits.map(code).join(', ')}.`,
    )
  }
  if (part.dataScope && part.dataPart) {
    lines.push(
      '',
      `Selector: ${code(`[data-scope="${part.dataScope}"][data-part="${part.dataPart}"]`)}`,
    )
  }
  if (part.keyboard?.length) {
    lines.push('', `Keyboard: ${part.keyboard.map(code).join(', ')}`)
  }
  if (part.props.length > 0) {
    lines.push(
      '',
      table(
        ['Prop', 'Type', 'Required', 'Default', 'Description'],
        part.props.map(propRow),
      ),
    )
  }
  if (part.dataAttributes?.length) {
    lines.push(
      '',
      table(
        ['Data attribute', 'Value'],
        part.dataAttributes.map((a) => [code(a.name), attributeValue(a)]),
      ),
    )
  }
  return lines.join('\n')
}

export function renderDigest(spec: ComponentDocSpec): string {
  const out = [
    `# ${spec.name} API reference`,
    '',
    spec.description.trim(),
    '',
    `Import: ${code(`import { ${spec.name} } from '@cerberus/react'`)}`,
    '',
    DIGEST_API_MARKER,
  ]

  if (spec.variants.length > 0) {
    out.push(
      '',
      '## Variants',
      '',
      `Set on ${code(spec.name)} or ${code(`${spec.name}.Root`)}; they cascade to every part.`,
      '',
      table(
        ['Variant', 'Values', 'Default'],
        spec.variants.map((v) => [
          code(v.name),
          [
            ...v.values.map((x) => code(`'${x}'`)),
            ...(v.allowsBoolean ? [code('boolean')] : []),
          ].join(' \\| '),
          v.defaultValue !== undefined ? code(v.defaultValue) : '—',
        ]),
      ),
    )
  }

  out.push('', '## Parts', '', spec.parts.map(renderPart).join('\n\n'))

  if (spec.a11y) {
    const { pattern, apgUrl, keyboard, notes } = spec.a11y
    out.push(
      '',
      '## Accessibility',
      '',
      `Follows the [${pattern} WAI-ARIA pattern](${apgUrl}).`,
      ...(notes ?? []).flatMap((note) => ['', note]),
    )
    if (keyboard.length > 0) {
      out.push(
        '',
        table(
          ['Key', 'Description'],
          keyboard.map((k) => [code(k.key), cell(k.description)]),
        ),
      )
    }
  }

  return `${out.join('\n')}\n`
}

/** `llms.txt`-style index of the digests in the same folder. */
export function renderLlmsIndex(specs: ComponentDocSpec[]): string {
  const sorted = [...specs].sort((a, b) => a.key.localeCompare(b.key))
  return [
    '# Cerberus React component API',
    '',
    '> Generated API references for @cerberus/react components: parts, props, recipe variants, data attributes and keyboard support. Each component also has a JSON spec (`<key>.json`) matching `component-doc-spec.schema.json`.',
    '',
    '## Components',
    '',
    ...sorted.map(
      (s) => `- [${s.name}](${s.key}.md): ${summarize(s.description)}`,
    ),
    '',
  ].join('\n')
}
