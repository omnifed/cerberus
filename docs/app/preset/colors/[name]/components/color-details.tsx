import type { SemanticToken, Sentiment } from '@cerberus-design/panda-preset'
import { container, grid, gridItem, vstack } from '@/styled-system/patterns'
import { normalizeTokens, getTokenList } from '../../helpers/normalize'
import { css } from '@/styled-system/css'

const PREVIEW_SIZE = '15rem'

interface ColorDetailsProps {
  token: string
}

export default function ColorDetails(props: ColorDetailsProps) {
  const palette = props.token.split('-')[0] as Sentiment
  const tokens = normalizeTokens(getTokenList(palette), palette)
  const token = tokens[props.token as keyof typeof tokens] as SemanticToken
  const semTokenValue = props.token.split('-').join('.')
  const swatchColor = {
    backgroundColor: token.value._cerberusTheme.base,
  }

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
          <p>
            Hex: <code>{token.value._cerberusTheme.base}</code>
          </p>
          <p>
            Token: <code>{semTokenValue}</code>
          </p>
        </div>
      </section>
    </div>
  )
}
