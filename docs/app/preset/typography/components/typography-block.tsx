import { css } from '@cerberus/styled-system/css'
import { vstack } from '@cerberus/styled-system/patterns'
import { textStyles } from '@cerberus-design/panda-preset'
import { Show } from '@cerberus-design/react'

const textStyleData = Object.entries(textStyles).map(([key, value]) => ({
  key,
  value,
}))

const textStyleCSS = css({
  pb: 'initial !important',
  '&[data-style="display-sm"]': {
    textStyle: 'display-sm',
  },
  '&[data-style="display-md"]': {
    textStyle: 'display-md',
  },
  '&[data-style="display-lg"]': {
    textStyle: 'display-lg',
  },
  '&[data-style="h1"]': {
    textStyle: 'h1',
  },
  '&[data-style="h2"]': {
    textStyle: 'h2',
  },
  '&[data-style="h3"]': {
    textStyle: 'h3',
  },
  '&[data-style="h4"]': {
    textStyle: 'h4',
  },
  '&[data-style="h5"]': {
    textStyle: 'h5',
  },
  '&[data-style="h6"]': {
    textStyle: 'h6',
  },
  '&[data-style="body-xs"]': {
    textStyle: 'body-xs',
  },
  '&[data-style="body-sm"]': {
    textStyle: 'body-sm',
  },
  '&[data-style="body-md"]': {
    textStyle: 'body-md',
  },
  '&[data-style="body-lg"]': {
    textStyle: 'body-lg',
  },
  '&[data-style="body-xl"]': {
    textStyle: 'body-xl',
  },
  '&[data-style="body-2xl"]': {
    textStyle: 'body-2xl',
  },
  '&[data-style="mono-xs"]': {
    textStyle: 'mono-xs',
  },
  '&[data-style="mono-sm"]': {
    textStyle: 'mono-sm',
  },
  '&[data-style="mono-md"]': {
    textStyle: 'mono-md',
  },
  '&[data-style="mono-lg"]': {
    textStyle: 'mono-lg',
  },
  '&[data-style="link"]': {
    textStyle: 'link',
  },
  '&[data-style="label-sm"]': {
    textStyle: 'label-sm',
  },
  '&[data-style="label-md"]': {
    textStyle: 'label-md',
  },
})

interface TypographyBlockProps {
  group: keyof typeof textStyles
  liveText?: string
}

export function TypographyBlock(props: TypographyBlockProps) {
  const textList = textStyleData.filter(({ key }) =>
    key.includes(props.group as string),
  )

  return (
    <ul
      data-group={props.group}
      className={vstack({
        listStyle: 'none',
        w: 'full',
        '&[data-group="display"]': {
          flexDirection: 'column-reverse',
        },
      })}
    >
      {textList.map(({ key, value }) => (
        <li
          key={key}
          className={css({
            borderTop: '1px solid',
            borderColor: 'page.border.initial',
            py: '4',
            w: 'full',
          })}
        >
          <p
            className={css({
              color: 'page.text.100',
              pb: '4 !important',
              textStyle: 'body-sm !important',
            })}
          >
            {key}
          </p>
          <p data-style={key} className={textStyleCSS}>
            <Show
              when={Boolean(props.liveText)}
              fallback={<>{value.description as string}</>}
            >
              {props.liveText}
            </Show>
          </p>
        </li>
      ))}
    </ul>
  )
}
