'use client'

import { zIndex } from '@cerberus-design/panda-preset'
import { css, cx } from '@cerberus/styled-system/css'
import { vstack } from '@cerberus/styled-system/patterns'
import { useState, type ChangeEvent } from 'react'

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
  const [active, setActive] = useState<keyof typeof zIndex>('hide')

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setActive(event.currentTarget.value as keyof typeof zIndex)
  }

  return (
    <>
      <div
        className={vstack({
          bgColor: 'neutral.surface.200',
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
              py: '6',
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
            borderColor: 'neutral.border.100',
            bgColor: 'neutral.surface.initial',
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
        <label
          className={css({
            display: 'block',
            textStyle: 'label-md',
            mb: '2',
          })}
          htmlFor="z-index"
        >
          Select z-index:
        </label>
        <select
          className={css({
            border: '1px solid',
            borderColor: 'neutral.border.100',
            h: '2.75rem',
            pxi: '2',
            rounded: 'md',
            w: 'full',
          })}
          name="z-index"
          onChange={handleChange}
        >
          {Object.keys(zIndex).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}
