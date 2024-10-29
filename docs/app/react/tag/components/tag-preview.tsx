import { Tag, type TagProps } from '@cerberus-design/react'
import { Checkmark, Information } from '@cerberus-design/icons'
import { css } from '@cerberus/styled-system/css'
import { Fragment } from 'react'
import {
  grid,
  gridItem,
  hstack,
  vstack,
} from '@cerberus/styled-system/patterns'
import { ClosableTagPreview } from './closable-tag-preview'

export type TagPreviewProps = TagProps

export function BasicTagPreview() {
  return <Tag>Filled</Tag>
}

export function OutlineTagPreview() {
  return (
    <Tag shape="square" usage="outlined">
      Outlined
    </Tag>
  )
}

export function SquareTagPreview() {
  return <Tag shape="square">Square</Tag>
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
    <div className={vstack()}>
      <div className={hstack()}>
        <Tag gradient="nyx-light" shape="square">
          nyx light
        </Tag>
        <Tag gradient="charon-dark" shape="square">
          charon dark
        </Tag>
        <Tag gradient="amphiaraus-dark" shape="square">
          amphiaraus dark
        </Tag>
        <Tag gradient="thanatos-light" shape="square">
          thanatos light
        </Tag>
        <Tag gradient="hades-dark" shape="square">
          hades dark
        </Tag>
        <Tag gradient="asphodel-light" shape="square">
          asphodel light
        </Tag>
      </div>

      <div className={hstack()}>
        <Tag gradient="nyx-light" shape="square" usage="outlined">
          nyx light
        </Tag>
        <Tag gradient="charon-dark" shape="square" usage="outlined">
          charon dark
        </Tag>
        <Tag gradient="amphiaraus-dark" shape="square" usage="outlined">
          amphiaraus dark
        </Tag>
        <Tag gradient="thanatos-light" shape="square" usage="outlined">
          thanatos light
        </Tag>
        <Tag gradient="hades-dark" shape="square" usage="outlined">
          hades dark
        </Tag>
        <Tag gradient="asphodel-light" shape="square" usage="outlined">
          asphodel light
        </Tag>
      </div>
    </div>
  )
}

export function GradientOutlinedTagPreview() {
  return (
    <Tag gradient="charon-dark" shape="square" usage="outlined">
      Gradient
    </Tag>
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

type TagTypes =
  | 'pill'
  | 'square'
  | 'outlined'
  | 'gradient-outlined'
  | 'filled'
  | 'closable'
interface MatchTagProps {
  kind: TagTypes
  palette?: TagProps['palette'] | 'gradient'
}

function MatchTagPreview(props: MatchTagProps) {
  switch (props.kind) {
    case 'pill':
      return <PillTagPreview />
    case 'square':
      return <SquareTagPreview />
    case 'outlined':
      return <OutlineTagPreview />
    case 'gradient-outlined':
      return <GradientOutlinedTagPreview />
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
    'square',
    'outlined',
    'gradient-outlined',
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
    case 'page':
      return (
        <Tag palette="page" shape="square">
          Page
        </Tag>
      )
    case 'gradient':
      return (
        <Tag gradient="charon-dark" shape="square">
          Gradient
        </Tag>
      )
    case 'info':
      return (
        <Tag palette="info" shape="square" usage="outlined">
          Info
        </Tag>
      )
    case 'success':
      return (
        <Tag palette="success" shape="square" usage="outlined">
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
    'square',
    'square',
    'outlined',
    'outlined',
    'pill',
    'pill',
  ]
  const palettes = [
    'page',
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
