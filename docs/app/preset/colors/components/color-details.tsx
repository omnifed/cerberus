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
  hstack,
  vstack,
} from '@cerberus/styled-system/patterns'
import { normalizeTokens, getTokenList } from '../helpers/normalize'
import { Show, useThemeContext } from '@cerberus-design/react'
import { Fragment, useMemo } from 'react'
import { css } from '@cerberus/styled-system/css'
import UsageExample from './usage-example'
import { useSearchParams } from 'next/navigation'

function getFigmaProperty(selector: Usage): string {
  switch (selector) {
    case 'backdrop':
      return 'backdrop'
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
const NO_PADDING = '0 !important'

interface FigmaScope {
  $extensions: {
    'com.figma': {
      scopes: string[]
    }
  }
}

export default function ColorDetails() {
  const { mode } = useThemeContext()
  const searchParams = useSearchParams()
  const paramsToken = searchParams.get('token') ?? 'page-backdrop-initial'
  const splitToken = useMemo(() => paramsToken.split('-'), [paramsToken])
  const palette = splitToken[0] as Sentiment
  const tokens = normalizeTokens(getTokenList(palette), palette)
  const token = tokens[paramsToken as keyof typeof tokens] as SemanticToken

  const scope = useMemo(() => {
    const [palette, usage, sentiment, interaction] = splitToken
    const mainSelector = getFigmaProperty(usage as Usage)
    const sortedToken = cleanSortedToken(
      [mainSelector, palette, sentiment, interaction].filter(Boolean),
    )

    // TODO: Remove this after action token alts have been removed from Figma data
    if (tokenIsDeprecated(sortedToken)) {
      return []
    }

    const result = sortedToken.reduce((acc, curr) => {
      // @ts-ignore - we know this is a valid key
      return acc && acc[curr]
    }, semanticColors) as unknown as FigmaScope

    return result?.$extensions['com.figma'].scopes ?? []
  }, [splitToken])

  const formattedToken = useMemo(() => {
    const [palette, usage, sentiment, interaction] = splitToken
    return {
      groups: ['figma', 'dev'],
      results: {
        figma: {
          group: 'figma',
          meta: 'token',
          value: [usage, palette, sentiment, interaction]
            .filter(Boolean)
            .join('/'),
        },
        js: {
          group: 'dev',
          meta: 'token',
          value: splitToken.join('.'),
        },
        scope: {
          group: 'figma',
          meta: 'scope',
          value: scope.join(', '),
        },
      },
    }
  }, [scope, splitToken])

  const userMode = mode === 'dark' ? '_darkMode' : '_lightMode'
  const rawColor = useMemo(() => {
    return token.value._cerberusTheme[userMode]
  }, [token.value._cerberusTheme, userMode])
  const color = useMemo(() => {
    return `var(--cerberus-${rawColor.replace(/\./g, '-').replace(/[{}]/g, '')})`
  }, [rawColor, paramsToken])
  const swatchColor = useMemo(
    () => ({
      backgroundColor: color,
    }),
    [color],
  )

  return (
    <div
      className={container({
        mt: '20',
      })}
    >
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
              borderColor: 'page.border.initial',
              justify: 'center',
              bgColor: 'page.surface.200',
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
          <h2
            className={css({
              pb: '2',
              textStyle: 'h4',
            })}
          >
            {paramsToken}
          </h2>
          <p
            className={css({
              pb: '2',
            })}
          >
            {token.description}
          </p>

          <div
            className={vstack({
              alignItems: 'flex-start',
              gap: '4',
              mt: '4',
            })}
          >
            {formattedToken.groups.map((groupName) => (
              <Fragment key={groupName}>
                <ul>
                  <li>
                    <p
                      className={css({
                        pb: NO_PADDING,
                        textStyle: 'h6',
                        textTransform: 'uppercase',
                      })}
                    >
                      {groupName}
                    </p>
                  </li>

                  {Object.entries(formattedToken.results).map(
                    ([key, resultItem]) => {
                      if (resultItem.group === groupName) {
                        return (
                          <li className={hstack()} key={key}>
                            <p
                              className={css({
                                pb: NO_PADDING,
                                textTransform: 'capitalize',
                              })}
                            >
                              {resultItem.meta}:{' '}
                            </p>

                            <Show
                              when={resultItem.group === 'figma'}
                              fallback={
                                <code
                                  className={css({
                                    fontSize: 'small',
                                    textTransform: 'none',
                                  })}
                                >
                                  {resultItem.value}
                                </code>
                              }
                            >
                              <p
                                className={css({
                                  display: 'inline-block',
                                  color: 'info.text.100 !important',
                                  pb: NO_PADDING,
                                  textStyle: 'body-sm !important',
                                  textTransform: 'none',
                                })}
                              >
                                {resultItem.value}
                              </p>
                            </Show>
                          </li>
                        )
                      }
                    },
                  )}
                </ul>
              </Fragment>
            ))}
          </div>
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

        <UsageExample token={paramsToken} />
      </section>
    </div>
  )
}
