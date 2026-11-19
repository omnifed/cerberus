import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import type { ComponentConfig } from '../manifest'
import { toCamelCase } from './naming'
import { CONFIGS_DIR } from './paths'

/** Every `configs/<key>.ts` file is one component. */
export function listConfigKeys(dir = CONFIGS_DIR): string[] {
  return readdirSync(dir)
    .filter((f) => f.endsWith('.ts'))
    .map((f) => f.replace(/\.ts$/, ''))
    .sort()
}

/** The export a config file must provide: `date-picker.ts` → `datePickerConfig` */
export const configExportName = (key: string) => `${toCamelCase(key)}Config`

/**
 * Loads every config file in `configs/`, sorted by key. There is no index to keep in
 * sync: adding a component is adding its file.
 */
export async function loadConfigs(
  dir = CONFIGS_DIR,
): Promise<ComponentConfig[]> {
  return Promise.all(
    listConfigKeys(dir).map(async (key) => {
      const mod = (await import(join(dir, `${key}.ts`))) as Record<
        string,
        unknown
      >
      const config = mod[configExportName(key)] as ComponentConfig | undefined
      if (!config) {
        throw new Error(
          `configs/${key}.ts must export \`${configExportName(key)}\``,
        )
      }
      if (config.key !== key) {
        throw new Error(
          `configs/${key}.ts declares key '${config.key}'; the file name must match the key`,
        )
      }
      return config
    }),
  )
}
