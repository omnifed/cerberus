'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { HStack } from 'styled-system/jsx'
import { Rating, splitProps } from '@cerberus-design/react'
import { StarFilled, StarHalf } from '@carbon/icons-react'
import type { PropsWithChildren } from 'react'

const api = {
  palette: builder.Enum('palette', ['action', 'warning']),
  orientation: builder.Enum('orientation', ['vertical', 'horizontal']),
  size: builder.Enum('size', ['sm', 'md']),
  label: builder.Text('label', 'This is a rating label'),
  allowHalf: builder.Boolean('allowHalf', false),
  readOnly: builder.Boolean('readOnly', false),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <RatingPreview />
    </CodeBuilder>
  )
}

export function RatingPreview() {
  const { selectedProps } = useCodeBuilder()
  const [ratingProps, rootProps] = splitProps(
    selectedProps,
    ['size', 'orientation', 'palette', 'size', 'label'],
    ['readOnly', 'allowHalf'],
  )

  if (ratingProps.size === 'md') {
    return (
      <LivePlaygroundBox>
        <Rating
          {...ratingProps}
          defaultValue={4.5}
          allowHalf={rootProps.allowHalf as boolean}
          readOnly={rootProps.readOnly as boolean}
          size="md"
        >
          {({ half }) => {
            if (half) return <StarHalf size={24} />
            return <StarFilled size={24} />
          }}
        </Rating>
      </LivePlaygroundBox>
    )
  }

  if (ratingProps.palette === 'warning') {
    return (
      <LivePlaygroundBox>
        <Rating
          {...ratingProps}
          defaultValue={4.5}
          allowHalf={rootProps.allowHalf as boolean}
          readOnly={rootProps.readOnly as boolean}
          palette="warning"
        >
          {({ half }) => {
            if (half) return <StarHalf size={24} />
            return <StarFilled size={24} />
          }}
        </Rating>
      </LivePlaygroundBox>
    )
  }

  if (ratingProps.orientation === 'horizontal') {
    return (
      <LivePlaygroundBox>
        <Rating
          {...ratingProps}
          defaultValue={4.5}
          allowHalf={rootProps.allowHalf as boolean}
          readOnly={rootProps.readOnly as boolean}
          orientation="horizontal"
        >
          {({ half }) => {
            if (half) return <StarHalf size={24} />
            return <StarFilled size={24} />
          }}
        </Rating>
      </LivePlaygroundBox>
    )
  }

  return (
    <LivePlaygroundBox>
      <Rating
        {...ratingProps}
        defaultValue={4.5}
        allowHalf={rootProps.allowHalf as boolean}
        readOnly={rootProps.readOnly as boolean}
      >
        {({ half }) => {
          if (half) return <StarHalf size={24} />
          return <StarFilled size={24} />
        }}
      </Rating>
    </LivePlaygroundBox>
  )
}

function LivePlaygroundBox(props: PropsWithChildren<unknown>) {
  return (
    <HStack
      bgColor="page.bg.initial"
      justify="center"
      padding="4"
      rounded="md"
      w="full"
    >
      {props.children}
    </HStack>
  )
}
