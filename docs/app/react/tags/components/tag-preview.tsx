'use client'

import { Tag } from '@cerberus-design/react'
import { Information } from '@cerberus-design/icons'
import { css } from '@cerberus/styled-system/css'
import { Fragment } from 'react'
import { grid, gridItem } from '@cerberus/styled-system/patterns'

export function BasicTagPreview() {
  return <Tag>Filled</Tag>
}

export function OutlineTagPreview() {
  return <Tag usage="outline">Outline</Tag>
}

export function RoundedTagPreview() {
  return <Tag shape="rounded">Rounded</Tag>
}

export function PillTagPreview() {
  return <Tag shape="pill">Pill</Tag>
}

export function ClosableTagPreview() {
  function handleClick() {
    console.log('Tag clicked')
  }
  return (
    <Tag shape="pill" onClick={handleClick}>
      Closable
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
