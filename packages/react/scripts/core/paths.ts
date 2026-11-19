import { join } from 'node:path'

// Every path is anchored to this file's location so output never depends on the cwd.
export const REACT_PKG_ROOT = join(import.meta.dir, '..', '..')
export const REPO_ROOT = join(REACT_PKG_ROOT, '..', '..')
export const SCRIPTS_DIR = join(REACT_PKG_ROOT, 'scripts')
export const COMPONENTS_DIR = join(REACT_PKG_ROOT, 'src', 'components')

/**
 * Panda's design-system spec. It is emitted by the docs app (`panda codegen --spec`),
 * not by `packages/react`, so it lives under `docs/styled-system`.
 */
export const DESIGN_SYSTEM_SPEC_PATH = join(
  REPO_ROOT,
  'docs',
  'styled-system',
  'specs',
  'design-system.json',
)
export const DOCS_SPEC_OUT_DIR = join(
  REPO_ROOT,
  'docs',
  'generated',
  'api-specs',
)

export const OXFMT_BIN = join(REPO_ROOT, 'node_modules', '.bin', 'oxfmt')
export const OXFMT_CONFIG = join(REPO_ROOT, '.oxfmtrc.json')
