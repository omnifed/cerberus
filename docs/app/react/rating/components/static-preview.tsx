'use client'

import { Box } from '@cerberus-design/styled-system/jsx'
import { css } from '@cerberus-design/styled-system/css'
import { Rating, Radio, RadioGroup, RadioParts } from '@cerberus-design/react'
import { Star, StarFilled, StarHalf } from '@carbon/icons-react'

export function BasicDemo() {
  return (
    <Box w="1/2">
      <Rating count={5} defaultValue={3}>
        {({ highlighted }) => {
          if (highlighted) return <StarFilled />
          return <Star />
        }}
      </Rating>
    </Box>
  )
}

export function ReadOnlyHalfDemo() {
  return (
    <Box w="1/2">
      <Rating count={5} defaultValue={4.5} allowHalf readOnly>
        {({ half, highlighted }) => {
          if (half) return <StarHalf />
          if (highlighted) return <StarFilled />
          return <Star />
        }}
      </Rating>
    </Box>
  )
}

/**
 * @deprecated
 */
export function OrientationDemo() {
  return (
    <Box w="1/2">
      <RadioGroup
        defaultValue="cerberus"
        orientation="vertical"
        className={css({
          justifyContent: 'center',
        })}
      >
        <Radio value="cerberus">Cerberus</Radio>
        <Radio value="hades">Hades</Radio>
        <Radio value="zeus">Zeus</Radio>
      </RadioGroup>
    </Box>
  )
}

export function SizeDemo() {
  return (
    <Box w="1/2">
      <RadioGroup
        defaultValue="cerberus"
        className={css({
          justifyContent: 'center',
        })}
      >
        <Radio size="md" value="cerberus">
          Cerberus
        </Radio>
        <Radio size="md" value="hades">
          Hades
        </Radio>
        <Radio size="md" value="zeus">
          Zeus
        </Radio>
      </RadioGroup>
    </Box>
  )
}

export function CustomDemo() {
  return (
    <RadioParts.Root>
      <RadioParts.Item>
        <RadioParts.ItemText
          className={css({
            textStyle: 'body-lg',
          })}
        >
          Cerberus
        </RadioParts.ItemText>
        <RadioParts.ItemControl
          className={css({
            bgColor: 'info.bg.initial',
            h: 8,
            w: 8,
            transform: 'skew(-10deg)',
            _checked: {
              bg: 'warning.bg.initial',
            },
          })}
        />
        <RadioParts.ItemHiddenInput />
      </RadioParts.Item>
    </RadioParts.Root>
  )
}
