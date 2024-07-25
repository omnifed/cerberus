'use client'

import type { SemanticToken, Sentiment } from '@cerberus-design/panda-preset'
import {
  container,
  grid,
  gridItem,
  vstack,
} from '@cerberus/styled-system/patterns'
import { normalizeTokens, getTokenList } from '../../helpers/normalize'
import {
  Button,
  Field,
  Input,
  Label,
  Tag,
  useThemeContext,
} from '@cerberus-design/react'
import { useMemo } from 'react'
import { css } from '@cerberus/styled-system/css'
import UsageExample from './usage-example'

const PREVIEW_SIZE = '15rem'

interface ColorDetailsProps {
  token: string
}

export default function ColorDetails(props: ColorDetailsProps) {
  const { mode } = useThemeContext()
  const palette = props.token.split('-')[0] as Sentiment
  const tokens = normalizeTokens(getTokenList(palette), palette)
  const token = tokens[props.token as keyof typeof tokens] as SemanticToken

  const formattedToken = useMemo(
    () => ({
      figma: props.token.split('-').join('/'),
      js: props.token.split('-').join('.'),
    }),
    [token],
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
                textTransform: 'capitalize',
              })}
              key={key}
            >
              {key}:{' '}
              <code
                className={css({
                  textTransform: 'none',
                })}
              >
                {formattedToken[key as keyof typeof formattedToken]}
              </code>
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
