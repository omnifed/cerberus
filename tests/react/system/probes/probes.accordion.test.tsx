/**
 * THROWAWAY PROBE (module graph).
 *
 * Run THREE times, each in a fresh process, so load order is the only variable:
 *
 *   PROBE_ENTRY=primitives bun test probes.accordion.test.tsx
 *   PROBE_ENTRY=item-group bun test probes.accordion.test.tsx
 *   PROBE_ENTRY=index      bun test probes.accordion.test.tsx
 *
 * Edit DIR to point at your accordion folder (relative to this file).
 * `index` is your `index_1.ts` (the `export *` barrel).
 * Paste every `[PROBE]` line back to me.
 */
import { test } from 'bun:test'

const DIR = './accordion'
const entry = process.env.PROBE_ENTRY ?? 'primitives'

const report = (label: string, value: unknown) =>
  console.log(`[PROBE] ${label} => ${JSON.stringify(value)}`)

test(`P6 report: import ${entry} first`, async () => {
  try {
    const m: any = await import(`${DIR}/${entry}`)
    report('import succeeded, exports', Object.keys(m).sort())
    report('"Accordion" is exported', 'Accordion' in m)

    if (m.AccordionRoot && m.Accordion) {
      report(
        'AccordionRoot === Accordion (same reference)',
        m.AccordionRoot === m.Accordion,
      )
      report(
        'typeof AccordionRoot.ItemGroup (shared mutation)',
        typeof m.AccordionRoot.ItemGroup,
      )
    }
  } catch (error) {
    report('import threw', String(error))
  }
})
