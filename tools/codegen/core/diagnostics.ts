export type Severity = 'error' | 'warning'

export interface Diagnostic {
  severity: Severity
  /** Usually the component key, e.g. `accordion` */
  scope: string
  message: string
}

/**
 * Collects problems found while generating, so a run reports all of them at once and
 * then fails, instead of silently writing incomplete output.
 */
export class Diagnostics {
  readonly items: Diagnostic[] = []

  error(scope: string, message: string): void {
    this.items.push({ severity: 'error', scope, message })
  }

  warn(scope: string, message: string): void {
    this.items.push({ severity: 'warning', scope, message })
  }

  get errorCount(): number {
    return this.items.filter((d) => d.severity === 'error').length
  }

  print(): void {
    for (const d of this.items) {
      const icon = d.severity === 'error' ? '❌' : '⚠️'
      const log = d.severity === 'error' ? console.error : console.warn
      log(`${icon} [${d.scope}] ${d.message}`)
    }
  }
}
