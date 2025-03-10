'use client'

import { Fragment } from 'react'
import { Button, ButtonParts } from '@cerberus-design/react'
import { ArrowDownRight } from '@carbon/icons-react'
import { css } from 'styled-system/css'
import { HStack } from '@cerberus-design/styled-system/jsx'
import { grid, gridItem } from 'styled-system/patterns'
import Link from 'next/link'

export function AsChildDemo() {
  return (
    <Button asChild>
      <Link href="/react/icon-button/overview">See Icon Button</Link>
    </Button>
  )
}

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

export function PendingButtonDemo() {
  return (
    <ButtonParts.Root pending>
      <ButtonParts.Icon />
      Pending
    </ButtonParts.Root>
  )
}

export function WithIconButtonPreview() {
  return (
    <ButtonParts.Root>
      With icon
      <ButtonParts.Icon>
        <ArrowDownRight />
      </ButtonParts.Icon>
    </ButtonParts.Root>
  )
}

export function SizesDemo() {
  return (
    <HStack>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
    </HStack>
  )
}

export function CustomButtonPreview() {
  return (
    <Button
      className={css({
        bgColor: 'danger.bg.initial',
        color: 'danger.text.initial',
        rounded: 'md',
        transform: 'skew(-10deg)',
        _hover: {
          bgColor: 'black',
          color: 'yellow',
        },
      })}
    >
      Cerberus Forever
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
