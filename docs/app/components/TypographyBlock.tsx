import { css } from '@/styled-system/css'
import { textStyles } from '@cerberus-design/panda-preset'

const textStyleData = Object.entries(textStyles).map(([key, value]) => ({
  key,
  value,
}))

const textStyleCSS = css({
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
})

interface TypographyBlockProps {
  group: 'display' | 'h' | 'body' | 'mono' | 'link'
}

export function TypographyBlock(props: TypographyBlockProps) {
  const textList = textStyleData.filter(({ key }) => key.includes(props.group))

  return (
    <div>
      {textList.map(({ key, value }) => (
        <div key={key}>
          <p data-style={key} className={textStyleCSS}>
            {key}
          </p>
          <p>{value.description as string}</p>
        </div>
      ))}
    </div>
  )
}
