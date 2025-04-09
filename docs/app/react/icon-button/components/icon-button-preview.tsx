import { Fragment } from 'react'
import { IconButton } from '@cerberus-design/react'
import { ArrowDownRight, Tuning } from '@carbon/icons-react'
import { css } from 'styled-system/css'
import { HStack } from 'styled-system/jsx'
import { grid, gridItem } from 'styled-system/patterns'
import Link from 'next/link'

export function AsChildDemo() {
  return (
    <IconButton ariaLabel="link example" asChild>
      <Link href="/react/icon-button/overview">
        <ArrowDownRight />
      </Link>
    </IconButton>
  )
}

export function BasicButtonPreview() {
  return (
    <IconButton ariaLabel="basic example">
      <Tuning />
    </IconButton>
  )
}

export function DangerButtonPreview() {
  return (
    <IconButton ariaLabel="danger example" palette="danger">
      <Tuning />
    </IconButton>
  )
}

export function OutlineButtonPreview() {
  return (
    <IconButton ariaLabel="outlined example" usage="outlined">
      <Tuning />
    </IconButton>
  )
}

export function TextButtonPreview() {
  return (
    <IconButton ariaLabel="ghost example" usage="ghost">
      <Tuning />
    </IconButton>
  )
}

export function RoundedButtonPreview() {
  return (
    <IconButton ariaLabel="rounded example" shape="circle">
      <Tuning />
    </IconButton>
  )
}

export function SizesDemo() {
  return (
    <HStack>
      <IconButton ariaLabel="sm example" size="sm" usage="filled">
        <Tuning />
      </IconButton>
      <IconButton ariaLabel="lg example" size="lg" usage="filled">
        <Tuning />
      </IconButton>
    </HStack>
  )
}

export function CustomButtonPreview() {
  return (
    <IconButton
      ariaLabel="custom button"
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
      <Tuning />
    </IconButton>
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
