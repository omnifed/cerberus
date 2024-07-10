import { Tag, type TagProps } from '@cerberus-design/react'
import { Checkmark, Information } from '@cerberus-design/icons'
import { css } from '@cerberus/styled-system/css'
import { Fragment } from 'react'
import { grid, gridItem, hstack } from '@cerberus/styled-system/patterns'
import { ClosableTagPreview } from './closable-tag-preview'
import type { Sentiment } from '@cerberus-design/panda-preset'

export type TagPreviewProps = TagProps

export function BasicTagPreview() {
  return <Tag>Filled</Tag>
}

export function OutlineTagPreview() {
  return (
    <Tag shape="rounded" usage="outlined">
      Outlined
    </Tag>
  )
}

export function RoundedTagPreview() {
  return <Tag shape="rounded">Rounded</Tag>
}

export function PillTagPreview() {
  return (
    <Tag shape="pill">
      <Checkmark />
      Pill
    </Tag>
  )
}

export function WithIconTagPreview() {
  return (
    <Tag>
      <Information />
      With icon
    </Tag>
  )
}

export function GradientTagPreview() {
  return (
    <div className={hstack()}>
      <Tag
        shape="rounded"
        className={css({
          cerbGradient: 'blue',
        })}
      >
        Blue
      </Tag>
      <Tag
        shape="rounded"
        className={css({
          cerbGradient: 'green',
        })}
      >
        Green
      </Tag>
      <Tag
        shape="rounded"
        className={css({
          cerbGradient: 'purple',
        })}
      >
        Purple
      </Tag>
    </div>
  )
}

export function CustomTagPreview() {
  return (
    <Tag
      className={css({
        bgColor: 'yellow',
        color: 'black',
        _hover: {
          bgColor: 'black',
          color: 'yellow',
        },
      })}
    >
      Wu-Tang Forever
    </Tag>
  )
}

// Overview

type TagTypes = 'pill' | 'rounded' | 'outline' | 'filled' | 'closable'
interface MatchTagProps {
  kind: TagTypes
  palette?: TagProps['palette'] | 'gradient'
}

function MatchTagPreview(props: MatchTagProps) {
  switch (props.kind) {
    case 'pill':
      return <PillTagPreview />
    case 'rounded':
      return <RoundedTagPreview />
    case 'outline':
      return <OutlineTagPreview />
    case 'filled':
      return <BasicTagPreview />
    case 'closable':
      return <ClosableTagPreview />
    default:
      return null
  }
}

export function OverviewTagPreview() {
  const btnTypes: TagTypes[] = [
    'pill',
    'rounded',
    'outline',
    'filled',
    'closable',
  ]
  return (
    <>
      <div
        className={grid({
          columns: 5,
          gap: '4',
          gridTemplateRows: '1fr 1fr',
          w: '80%',
        })}
      >
        {btnTypes.map((type, idx) => (
          <Fragment key={type}>
            <div
              className={gridItem({
                gridColumn: 'span 1',
                gridRowStart: '1',
                gridRowEnd: '2',
                justifySelf: 'center',
              })}
            >
              <MatchTagPreview kind={type} />
            </div>
            <div
              className={gridItem({
                gridColumn: 'span 1',
                gridRowStart: '2',
                gridRowEnd: '3',
                justifySelf: 'center',
              })}
            >
              {idx + 1}
            </div>
          </Fragment>
        ))}
      </div>
    </>
  )
}

function MatchTagPalettePreview(props: MatchTagProps) {
  switch (props.palette) {
    case 'neutral':
      return (
        <Tag palette="neutral" shape="rounded">
          Neutral
        </Tag>
      )
    case 'gradient':
      return (
        <Tag
          palette="neutral"
          shape="rounded"
          className={css({
            cerbGradient: 'blue',
          })}
        >
          Gradient
        </Tag>
      )
    case 'info':
      return (
        <Tag palette="info" shape="rounded" usage="outlined">
          Info
        </Tag>
      )
    case 'success':
      return (
        <Tag palette="success" shape="rounded" usage="outlined">
          Success
        </Tag>
      )
    case 'warning':
      return (
        <Tag palette="warning" shape="pill">
          <Checkmark />
          Warning
        </Tag>
      )
    case 'danger':
      return (
        <Tag palette="danger" shape="pill">
          <Checkmark />
          Danger
        </Tag>
      )
    default:
      return null
  }
}

export function OverviewPaletteTagPreview() {
  const btnTypes: TagTypes[] = [
    'rounded',
    'rounded',
    'outline',
    'outline',
    'pill',
    'pill',
  ]
  const palettes = [
    'neutral',
    'gradient',
    'info',
    'success',
    'warning',
    'danger',
  ] as MatchTagProps['palette'][]

  return (
    <>
      <div
        className={grid({
          columns: 5,
          gap: '4',
          gridTemplateRows: '1fr 1fr',
          w: '80%',
        })}
      >
        {btnTypes.map((type, idx) => (
          <Fragment key={`${type}:${idx}`}>
            <div
              className={gridItem({
                gridColumn: 'span 1',
                gridRowStart: '1',
                gridRowEnd: '2',
                justifySelf: 'center',
              })}
            >
              <MatchTagPalettePreview kind={type} palette={palettes[idx]} />
            </div>
            <div
              className={gridItem({
                gridColumn: 'span 1',
                gridRowStart: '2',
                gridRowEnd: '3',
                justifySelf: 'center',
                textTransform: 'capitalize',
              })}
            >
              {idx + 1}
            </div>
          </Fragment>
        ))}
      </div>
    </>
  )
}
