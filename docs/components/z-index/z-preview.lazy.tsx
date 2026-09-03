'use client'

import {
  Field,
  Option,
  Select,
  createSelectCollection,
  type SelectValueChangeDetails,
} from '@cerberus-design/react'
import { useState } from 'react'
import { css, cx } from 'styled-system/css'
import { vstack } from 'styled-system/patterns'
import tokensData from 'styled-system/specs/tokens.json'

const tokens = tokensData.data.find((token) => token.type === 'zIndex')?.values ?? []

const zLayers = css({
  '&[data-z-index="hide"]': {
    zIndex: 'hide',
  },
  '&[data-z-index="base"]': {
    zIndex: 'base',
  },
  '&[data-z-index="decorator"]': {
    zIndex: 'decorator',
  },
  '&[data-z-index="dropdown"]': {
    zIndex: 'dropdown',
  },
  '&[data-z-index="sticky"]': {
    zIndex: 'sticky',
  },
  '&[data-z-index="banner"]': {
    zIndex: 'banner',
  },
  '&[data-z-index="overlay"]': {
    zIndex: 'overlay',
  },
  '&[data-z-index="modal"]': {
    zIndex: 'modal',
  },
  '&[data-z-index="popover"]': {
    zIndex: 'popover',
  },
  '&[data-z-index="toast"]': {
    zIndex: 'toast',
  },
  '&[data-z-index="tooltip"]': {
    zIndex: 'tooltip',
  },
})

export default function ZPreview() {
  const [active, setActive] = useState<string>('hide')

  const formattedCollection = tokens.map((token) => ({
    label: token.name,
    value: String(token.value),
  }))
  const collection = createSelectCollection(formattedCollection)

  function handleChange(event: SelectValueChangeDetails) {
    setActive(event.items[0].label)
  }

  return (
    <>
      <div
        className={vstack({
          bgColor: 'page.surface.200',
          border: '3px solid',
          borderColor: 'info.border.initial',
          borderRadius: 'xl',
          gap: '0',
          justify: 'center',
          mb: '4',
          minH: '18.75rem',
          overflow: 'hidden',
          position: 'relative',
          py: '8',
          zIndex: '-1',
        })}
      >
        <div
          data-z-index={active}
          className={cx(
            zLayers,
            css({
              border: '4px solid',
              borderColor: 'success.border.initial',
              bgColor: 'success.surface.initial',
              left: '5',
              position: 'absolute',
              paddingBlock: '6',
              pxi: '12',
              top: '5',
              rounded: 'md',
              md: {
                w: '1/2',
              },
            }),
          )}
        >
          z-index: {active}
        </div>

        <div
          className={css({
            bgColor: 'warning.surface.initial',
            border: '4px solid',
            borderColor: 'warning.border.initial',
            bottom: '5',
            position: 'absolute',
            py: '6',
            pxi: '12',
            right: '5',
            rounded: 'md',
            zIndex: 'base',
            md: {
              bottom: 'initial',
              top: '4rem',
              w: '1/2',
            },
          })}
        >
          z-index: base
        </div>

        <div
          className={css({
            border: '4px solid',
            borderColor: 'page.border.100',
            bgColor: 'page.surface.initial',
            pxi: '12',
            py: '20',
            rounded: 'md',
            zIndex: 'initial',
            md: {
              w: '1/2',
            },
          })}
        >
          z-index: initial
        </div>
      </div>

      <div
        className={css({
          mb: '10',
        })}
      >
        <Field
          ids={{
            control: 'z-index',
          }}
          label="Select z-index"
        >
          <Select
            collection={collection}
            placeholder="Choose a z-index"
            onValueChange={handleChange}
            size="lg"
          >
            {collection.items.map((item) => (
              <Option key={item.value} item={item} />
            ))}
          </Select>
        </Field>
      </div>
    </>
  )
}
