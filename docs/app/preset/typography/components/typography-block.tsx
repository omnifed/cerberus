import { css } from '@cerberus/styled-system/css'
import { vstack } from '@cerberus/styled-system/patterns'
import { textStyles } from '@cerberus-design/panda-preset'
import { Show } from '@cerberus-design/react'

const textStyleData = Object.entries(textStyles).map(([key, value]) => ({
  key,
  value,
}))

const textStyleCSS = css({
  pb: 'initial',
  '&[data-style="display-sm"]': {
    textStyle: 'display-sm',
  },
  '&[data-style="display-md"]': {
    textStyle: 'display-md',
  },
  '&[data-style="display-lg"]': {
    textStyle: 'display-lg',
  },
  '&[data-style="heading-2xl"]': {
    textStyle: 'h1',
  },
  '&[data-style="heading-xl"]': {
    textStyle: 'h2',
  },
  '&[data-style="heading-lg"]': {
    textStyle: 'h3',
  },
  '&[data-style="heading-md"]': {
    textStyle: 'h4',
  },
  '&[data-style="heading-sm"]': {
    textStyle: 'h5',
  },
  '&[data-style="heading-xs"]': {
    textStyle: 'h6',
  },
  '&[data-style="heading-2xs"]': {
    textStyle: 'heading-2xs',
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
  '&[data-style="mono-xl"]': {
    textStyle: 'mono-xl',
  },
  '&[data-style="label-sm"]': {
    textStyle: 'label-sm',
  },
  '&[data-style="label-md"]': {
    textStyle: 'label-md',
  },
  '&[data-style="link"]': {
    textStyle: 'link',
  },
  '&[data-style="button"]': {
    textStyle: 'button-md',
  },
})

interface TypographyBlockProps {
  group: string
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
              pb: '4',
              textStyle: 'body-sm',
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
