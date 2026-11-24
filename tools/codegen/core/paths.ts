import { join } from 'node:path'

// Every path is anchored to this file's location so output never depends on the cwd.
/** `tools/codegen`: the generators, their configs and the spec types */
export const CODEGEN_ROOT = join(import.meta.dir, '..')
export const REPO_ROOT = join(CODEGEN_ROOT, '..', '..')
export const CONFIGS_DIR = join(CODEGEN_ROOT, 'configs')

/**
 * The package being documented. Ark, Zag and `styled-system` resolve from here, so the
 * generators see exactly the versions `@cerberus-design/react` ships with.
 */
export const REACT_PKG_ROOT = join(REPO_ROOT, 'packages', 'react')
export const COMPONENTS_DIR = join(REACT_PKG_ROOT, 'src', 'components')

export const PANDA_PRESET_RECIPES_DIR = join(
  REPO_ROOT,
  'packages',
  'panda-preset',
  'src',
  'recipes',
)
export const DOCS_CONTENT_DIR = join(
  REPO_ROOT,
  'docs',
  'content',
  'docs',
  'components',
)
export const DOCS_EXAMPLES_DIR = join(
  REPO_ROOT,
  'docs',
  'examples',
  'components',
)
export const TESTS_DIR = join(REPO_ROOT, 'tests')

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
