'use client'

import { ArrowRight } from '@carbon/icons-react'
import {
  Button,
  Field,
  Input,
  ProgressBar,
  Radio,
  RadioGroup,
  Switch,
  Tag,
} from '@cerberus-design/react'
import { useEffect, useState } from 'react'
import { css, cx } from 'styled-system/css'
import { Beat, plateCaption, plateSurface } from './beat'
import { useExperience, type ThemeId } from './experience'
import { codeBlock } from './styles'

const THEMES: { id: ThemeId; label: string; preset?: string; pkg?: string }[] =
  [
    { id: 'cerberus', label: 'Cerberus' },
    {
      id: 'acheron',
      label: 'Acheron',
      preset: 'presetAcheronTheme',
      pkg: '@cerberus/preset-acheron-theme',
    },
    {
      id: 'elysium',
      label: 'Elysium',
      preset: 'presetElysiumTheme',
      pkg: '@cerberus/preset-elysium-theme',
    },
    {
      id: 'oceanus',
      label: 'Oceanus',
      preset: 'presetOceanusTheme',
      pkg: '@cerberus/preset-oceanus-theme',
    },
  ]

function setupFor(theme: (typeof THEMES)[number]) {
  if (!theme.preset || !theme.pkg) {
    return `// panda.config.ts: the Cerberus theme is built in.
import { createCerberusConfig } from '@cerberus/panda-preset'

export default createCerberusConfig({
  designSystem: '@cerberus-design/react',
})

<html data-panda-theme="cerberus" className="dark">`
  }
  return `// npx jsr add ${theme.pkg}
// panda.config.ts
import { createCerberusConfig } from '@cerberus/panda-preset'
import { ${theme.preset} } from '${theme.pkg}'

export default createCerberusConfig({
  designSystem: '@cerberus-design/react',
  presets: [${theme.preset}],
})

<html data-panda-theme="${theme.id}" className="dark">`
}

/**
 * 03 · Tokens. One semantic token feeds the prototype, the product and the
 * agent's code. Choosing a theme here repaints the preview and the organism.
 */
export function Tokens() {
  const [themeId, setThemeId] = useState<ThemeId>('acheron')
  return (
    <Beat
      id="tokens"
      pose="tokens"
      label="One language"
      heading="Change one token. Every surface follows."
      layout="split"
      theme={themeId}
      plate={<ThemePreview themeId={themeId} onThemeChange={setThemeId} />}
    >
      <p>
        Designers and developers edit the same semantic tokens, like{' '}
        <code className={css({ fontFamily: 'mono', fontSize: '0.92em' })}>
          action.bg.initial
        </code>
        . A change lands everywhere at once: in the prototype, in production,
        and in the code your agent writes next.
      </p>
      <p>
        The Cerberus theme is built in. Acheron, Elysium and Oceanus are
        separate presets: install one, add it to your Panda config, and switch
        with one attribute. Try it: this whole section follows.
      </p>
    </Beat>
  )
}

interface ThemePreviewProps {
  themeId: ThemeId
  onThemeChange: (theme: ThemeId) => void
}

/** The switch repaints this whole section, the preview and the organism behind it. */
function ThemePreview(props: ThemePreviewProps) {
  const { themeId, onThemeChange: setThemeId } = props
  const [ready, setReady] = useState(true)
  const { setThemeOverride } = useExperience()
  const theme = THEMES.find((t) => t.id === themeId) ?? THEMES[0]

  useEffect(() => {
    setThemeOverride(themeId)
    return () => setThemeOverride(null)
  }, [themeId, setThemeOverride])

  return (
    <div
      className={cx(
        plateSurface,
        css({ display: 'flex', flexDir: 'column', gap: 'lg' }),
      )}
    >
      <RadioGroup
        aria-label="Theme for the preview"
        name="preview-theme"
        orientation="horizontal"
        value={themeId}
        onValueChange={(details) =>
          details.value && setThemeId(details.value as ThemeId)
        }
        className={css({ columnGap: 'lg', flexWrap: 'wrap', rowGap: 'sm' })}
      >
        {THEMES.map((t) => (
          <Radio key={t.id} value={t.id}>
            {t.label}
          </Radio>
        ))}
      </RadioGroup>

      <div
        data-panda-theme={themeId}
        className={css({
          bgColor: 'page.surface.initial',
          border: '1px solid',
          borderColor: 'page.border.initial',
          color: 'page.text.initial',
          display: 'grid',
          gap: 'lg',
          gridTemplateColumns: 'minmax(0, 1fr)',
          p: 'lg',
          rounded: 'lg',
          transitionDuration: 'slow',
          transitionProperty: 'background-color, border-color, color',
          md: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
        })}
      >
        <div className={css({ display: 'flex', flexDir: 'column', gap: 'md' })}>
          <div
            className={css({
              alignItems: 'center',
              display: 'flex',
              gap: 'sm',
              justifyContent: 'space-between',
            })}
          >
            <p className={css({ textStyle: 'heading-2xs' })}>Release review</p>
            <Tag palette="success" shape="pill" usage="outlined">
              Approved
            </Tag>
          </div>
          <Field label="Reviewer">
            <Input
              name="preview-reviewer"
              defaultValue="Design and engineering"
            />
          </Field>
          <Switch checked={ready} onCheckedChange={(d) => setReady(d.checked)}>
            Ready to ship
          </Switch>
        </div>
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: 'md',
            justifyContent: 'space-between',
          })}
        >
          <div
            className={css({ display: 'flex', flexDir: 'column', gap: 'sm' })}
          >
            <p
              className={css({ color: 'page.text.200', textStyle: 'label-sm' })}
            >
              Checks passing
            </p>
            <ProgressBar
              id="preview-progress"
              label="Checks passing"
              now={ready ? 100 : 64}
              usage="rounded"
            />
          </div>
          <Button shape="sharp" disabled={!ready}>
            Promote to production
            <Button.Icon>
              <ArrowRight />
            </Button.Icon>
          </Button>
        </div>
      </div>

      <div className={css({ display: 'flex', flexDir: 'column', gap: 'sm' })}>
        <p className={plateCaption}>
          {theme.preset
            ? `Add ${theme.label} to your project`
            : 'The default theme'}
        </p>
        <pre className={cx(codeBlock, css({ textStyle: 'label-sm' }))}>
          <code>{setupFor(theme)}</code>
        </pre>
      </div>
    </div>
  )
}
