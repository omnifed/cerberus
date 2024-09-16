'use client'

import { Fragment } from 'react'
import { Button } from '@cerberus-design/react'
import { ArrowDownRight } from '@cerberus-design/icons'
import { css } from '@cerberus/styled-system/css'
import { grid, gridItem } from '@cerberus/styled-system/patterns'

export function BasicButtonPreview() {
  return <Button>Default styles</Button>
}

export function DangerButtonPreview() {
  return <Button palette="danger">Danger styles</Button>
}

export function OutlineButtonPreview() {
  return <Button usage="outlined">Outlined styles</Button>
}

export function TextButtonPreview() {
  return <Button usage="ghost">Ghost styles</Button>
}

export function RoundedButtonPreview() {
  return <Button shape="rounded">Rounded styles</Button>
}

export function WithIconButtonPreview() {
  return (
    <Button>
      <ArrowDownRight />
      With icon
    </Button>
  )
}

export function CustomButtonPreview() {
  return (
    <Button
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
    </Button>
  )
}

// Overview

type ButtonTypes = 'sharp' | 'rounded' | 'outlined' | 'ghost'
interface MatchButtonProps {
  kind: ButtonTypes
}

function MatchButtonPreview(props: MatchButtonProps) {
  switch (props.kind) {
    case 'sharp':
      return <BasicButtonPreview />
    case 'rounded':
      return <RoundedButtonPreview />
    case 'outlined':
      return <OutlineButtonPreview />
    case 'ghost':
      return <TextButtonPreview />
    default:
      return null
  }
}

export function OverviewButtonPreview() {
  const btnTypes: ButtonTypes[] = ['sharp', 'rounded', 'outlined', 'ghost']
  return (
    <>
      <div
        className={grid({
          columns: 4,
          gap: '4',
          gridTemplateRows: '1fr 1fr',
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
              <MatchButtonPreview kind={type} />
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
