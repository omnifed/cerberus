import semver from 'semver'
import { createRequire } from 'node:module'

// Instantiate a CommonJS require function to bypass ESM JSON import restrictions
const req = createRequire(import.meta.url)
const pkg = req('@cerberus-design/react/package.json')

export const CURRENT_RELEASE = semver.coerce(pkg.version)?.version || '0.0.0'

export type LifecycleState = 'preview' | 'new' | null

export function getFeatureLifecycle(sinceVersion: string): LifecycleState {
  // Coerce the incoming MDX string (transforms "v1.9.0" -> "1.9.0")
  const feature = semver.coerce(sinceVersion)?.version

  if (!feature) return null

  // If the feature's version is greater than the current release, it's in preview
  if (semver.gt(feature, CURRENT_RELEASE)) return 'preview'

  // If it matches exactly (or satisfies a minor release range), it's new
  if (semver.eq(feature, CURRENT_RELEASE)) return 'new'

  // If it's older than the current release, the tag drops off
  return null
}
