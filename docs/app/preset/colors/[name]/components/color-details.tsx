'use client'

import {
  semanticColors,
  SemanticToken,
  Sentiment,
  type Usage,
} from '@cerberus-design/panda-preset'
import {
  container,
  grid,
  gridItem,
  vstack,
} from '@cerberus/styled-system/patterns'
import { normalizeTokens, getTokenList } from '../../helpers/normalize'
import { Show, useThemeContext } from '@cerberus-design/react'
import { useMemo } from 'react'
import { css } from '@cerberus/styled-system/css'
import UsageExample from './usage-example'

function getFigmaProperty(selector: Usage): string {
  switch (selector) {
    case 'bg':
      return 'background'
    case 'text':
      return 'text'
    case 'surface':
      return 'surface'
    case 'border':
      return 'border'
    case 'navigation':
      return 'navigation'
    case 'ghost':
      return 'ghost'
    default:
      return ''
  }
}

function tokenIsDeprecated(token: string[]): boolean {
  return (
    (token.includes('action') &&
      token.includes('background') &&
      token.includes('100')) ||
    (token.includes('action') &&
      token.includes('navigation') &&
      token.includes('alternate'))
  )
}

function cleanSortedToken(sortedToken: string[]): string[] {
  // Action Navigation tokens are not scoped correctly in Figma
  if (sortedToken.includes('action') && sortedToken.includes('navigation')) {
    sortedToken.splice(sortedToken.indexOf('action'), 1)
    sortedToken = ['text', ...sortedToken]
  }

  // Secondary action Navigation tokens are not scoped correctly in Figma
  if (
    sortedToken.includes('secondaryAction') &&
    sortedToken.includes('navigation')
  ) {
    sortedToken.splice(sortedToken.indexOf('secondaryAction'), 1)
    sortedToken = ['text', ...sortedToken]
  }

  // convert secondaryAction to kebab-case
  if (sortedToken.includes('secondaryAction')) {
    sortedToken[sortedToken.indexOf('secondaryAction')] = 'secondary-action'
  }

  return sortedToken
}

const PREVIEW_SIZE = '15rem'

interface FigmaScope {
  $extensions: {
    'com.figma': {
      scopes: string[]
    }
  }
}

interface ColorDetailsProps {
  token: string
}

export default function ColorDetails(props: ColorDetailsProps) {
  const { token: propsToken } = props
  const { mode } = useThemeContext()
  const splitToken = useMemo(() => propsToken.split('-'), [propsToken])
  const palette = splitToken[0] as Sentiment
  const tokens = normalizeTokens(getTokenList(palette), palette)
  const token = tokens[propsToken as keyof typeof tokens] as SemanticToken
  const scope = useMemo(() => {
    const [palette, usage, sentiment, interaction] = splitToken
    const mainSelector = getFigmaProperty(usage as Usage)
    const sortedToken = cleanSortedToken(
      [mainSelector, palette, sentiment, interaction].filter(Boolean),
    )

    // TODO: Remove this after action token alts have been removed
    if (tokenIsDeprecated(sortedToken)) {
      return []
    }

    const result = sortedToken.reduce((acc, curr) => {
      // @ts-ignore - we know this is a valid key
      return acc[curr]
    }, semanticColors) as unknown as FigmaScope

    return result.$extensions['com.figma'].scopes ?? []
  }, [propsToken])

  const formattedToken = useMemo(
    () => ({
      figma: splitToken.join('/'),
      js: splitToken.join('.'),
      scope: scope.join(', '),
    }),
    [propsToken, scope],
  )

  const userMode = mode === 'dark' ? '_darkMode' : '_lightMode'
  const tokenValue = token.value._cerberusTheme[userMode]
  const swatchColor = useMemo(
    () => ({
      backgroundColor: tokenValue,
    }),
    [tokenValue],
  )

  return (
    <div className={container()}>
      <section
        className={grid({
          columns: 12,
          lg: {
            mb: '8',
            pb: '8',
          },
        })}
      >
        <div
          className={gridItem({
            gridColumnStart: 1,
            gridColumnEnd: 13,
            lg: {
              gridColumnStart: 1,
              gridColumnEnd: 5,
            },
          })}
        >
          <div
            className={vstack({
              border: '3px solid',
              borderColor: 'neutral.border.initial',
              justify: 'center',
              bgColor: 'neutral.surface.200',
              h: PREVIEW_SIZE,
              rounded: '2xl',
            })}
            style={swatchColor}
          />
        </div>

        <div
          className={gridItem({
            gridColumnStart: 1,
            gridColumnEnd: 13,
            lg: {
              gridColumnStart: 5,
              paddingInlineStart: '4',
            },
          })}
        >
          <h2>{props.token}</h2>
          <p>{token.description}</p>
          {Object.keys(formattedToken).map((key) => (
            <p
              className={css({
                pb: '2 !important',
                textTransform: 'capitalize',
              })}
              key={key}
            >
              {key}:{' '}
              <Show
                when={key !== 'scope'}
                fallback={
                  <span
                    className={css({
                      display: 'inline-block',
                      color: 'info.text.100 !important',
                      textTransform: 'none',
                    })}
                  >
                    {formattedToken[key as keyof typeof formattedToken]}
                  </span>
                }
              >
                <code
                  className={css({
                    textTransform: 'none',
                  })}
                >
                  {formattedToken[key as keyof typeof formattedToken]}
                </code>
              </Show>
            </p>
          ))}
        </div>
      </section>

      <section>
        <h3
          className={css({
            textStyle: 'h3',
            mb: '6',
          })}
        >
          Usage
        </h3>

        <UsageExample token={props.token} />
      </section>
    </div>
  )
}
