import { Grid, GridItem } from '@/styled-system/jsx'
import { Information } from '@carbon/icons-react'
import { Tag, type TagProps, Text } from '@cerberus-design/react'
import { getGradients } from '@cerberus/tokens'
import { Fragment } from 'react'

import { BasicDemo } from './basic.demo'
import { CustomDemo } from './custom.demo'
import { ShapeDemo } from './shape.demo'
import { UsageDemo } from './usage.demo'
import { ClosableDemo } from './closable.demo'

export const DEMOS = {
  basic: {
    id: 'tag.basic',
    preview: <BasicDemo />,
  },
  usage: {
    id: 'tag.usage',
    preview: <UsageDemo />,
  },
  shape: {
    id: 'tag.shape',
    preview: <ShapeDemo />,
  },
  custom: {
    id: 'tag.custom',
    preview: <CustomDemo />,
  },
  closable: {
    id: 'tag.closable',
    preview: <ClosableDemo />,
  },
  meta: `import { Tag } from '@cerberus/react'`,
}

export type TagPreviewProps = TagProps

// Overview

interface VariantProps {
  usage: TagProps['usage']
  shape: TagProps['shape']
}

const palettes: TagProps['palette'][] = [
  'page',
  'secondaryAction',
  'info',
  'success',
  'warning',
  'danger',
]
const variants: VariantProps[] = [
  { usage: 'filled', shape: 'pill' },
  { usage: 'outlined', shape: 'pill' },
  { usage: 'filled', shape: 'square' },
  { usage: 'outlined', shape: 'square' },
]
const COLOR_LIST = palettes.map((palette) => ({ palette, variants }))
const GRAD_LIST = getGradients().map((gradient) => ({ gradient, variants }))

export function OverviewPaletteTagPreview() {
  return (
    <Grid columns={5} gap="md" px="lg" w="full">
      {COLOR_LIST.map(({ palette, variants }) => (
        <Fragment key={`${palette}`}>
          <Text as="small">{palette}:</Text>
          {variants.map(({ usage, shape }) => (
            <GridItem key={`${palette}:${usage}:${shape}`} colSpan={1}>
              <MatchTag palette={palette} usage={usage} shape={shape}>
                <Information />
                Label
              </MatchTag>
            </GridItem>
          ))}
        </Fragment>
      ))}
    </Grid>
  )
}

export function OverviewGradientTagPreview() {
  return (
    <Grid columns={5} gap="md" px="lg" w="full">
      {GRAD_LIST.map(({ gradient, variants }) => (
        <Fragment key={`${gradient}`}>
          <Text as="small">{gradient}:</Text>
          {variants.map(({ usage, shape }, idx) => (
            <GridItem key={`${gradient}-${idx}`} colSpan={1}>
              <Tag gradient={gradient} usage={usage} shape={shape}>
                <Information />
                Label
              </Tag>
            </GridItem>
          ))}
        </Fragment>
      ))}
    </Grid>
  )
}

// Static Interface

function MatchTag(props: TagProps) {
  if ('palette' in props) {
    return <MatchPaletteTag {...props} />
  }

  if ('gradient' in props) {
    return <MatchGradientTag {...props} />
  }

  return <Tag {...props} />
}

function MatchPaletteTag(props: TagProps) {
  switch (props.palette) {
    case 'page':
      return <Tag palette="page" {...props} />
    case 'secondaryAction':
      return <Tag palette="secondaryAction" {...props} />
    case 'info':
      return <Tag palette="info" {...props} />
    case 'success':
      return <Tag palette="success" {...props} />
    case 'warning':
      return <Tag palette="warning" {...props} />
    case 'danger':
      return <Tag palette="danger" {...props} />

    default:
      throw new Error(`Unsupported palette: ${props.palette}`)
  }
}

function MatchGradientTag(props: TagProps) {
  switch (props.gradient) {
    case 'asphodel-dark':
      return <Tag gradient="asphodel-dark" {...props} />
    case 'asphodel-light':
      return <Tag gradient="asphodel-light" {...props} />
    case 'amphiaraus-dark':
      return <Tag gradient="amphiaraus-dark" {...props} />
    case 'amphiaraus-light':
      return <Tag gradient="amphiaraus-light" {...props} />
    case 'charon-dark':
      return <Tag gradient="charon-dark" {...props} />
    case 'charon-light':
      return <Tag gradient="charon-light" {...props} />
    case 'hades-dark':
      return <Tag gradient="hades-dark" {...props} />
    case 'hades-light':
      return <Tag gradient="hades-light" {...props} />
    case 'nyx-dark':
      return <Tag gradient="nyx-dark" {...props} />
    case 'nyx-light':
      return <Tag gradient="nyx-light" {...props} />
    case 'styx-dark':
      return <Tag gradient="styx-dark" {...props} />
    case 'styx-light':
      return <Tag gradient="styx-light" {...props} />
    case 'thanatos-dark':
      return <Tag gradient="thanatos-dark" {...props} />
    case 'thanatos-light':
      return <Tag gradient="thanatos-light" {...props} />

    default:
      throw new Error(`Unsupported gradient: ${props.gradient}`)
  }
}
