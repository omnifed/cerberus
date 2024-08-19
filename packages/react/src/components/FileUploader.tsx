import { css, cx } from '@cerberus-design/styled-system/css'
import { vstack } from '@cerberus-design/styled-system/patterns'
import type { InputHTMLAttributes, PropsWithChildren } from 'react'
import { Show } from './Show'

export interface FileUploaderProps
  extends InputHTMLAttributes<HTMLInputElement> {
  heading?: string
  name: string
}

export function FileUploader(props: PropsWithChildren<FileUploaderProps>) {
  const { children, ...nativeProps } = props
  return (
    <div
      className={css({
        border: '1px dashed',
        borderColor: 'page.border.100',
        bgColor: 'page.surface.100',
        minH: '14rem',
        maxW: '36rem',
        py: '6',
        rounded: 'md',
        w: 'full',
      })}
    >
      <label
        className={vstack({
          gap: '1',
          justify: 'center',
          position: 'relative',
          textStyle: 'label-sm',
          userSelect: 'none',
        })}
        htmlFor={props.name}
      >
        <Show when={Boolean(props.heading)}>
          <p
            className={css({
              pt: '2',
              textStyle: 'h6',
            })}
          >
            {props.heading}
          </p>
        </Show>
        {children}

        <p
          className={css({
            color: 'action.navigation.initial',
            textDecoration: 'underline',
            textStyle: 'label-sm',
            transitionProperty: 'color',
            transitionDuration: '150ms',
            _peerHover: {
              color: 'action.navigation.hover',
            },
          })}
        >
          Or click to upload
        </p>

        <input
          {...nativeProps}
          className={cx(
            nativeProps.className,
            'peer',
            css({
              bottom: '0',
              cursor: 'pointer',
              left: '0',
              opacity: '0',
              position: 'absolute',
              right: '0',
              top: '0',
            }),
          )}
          type="file"
        />
      </label>
    </div>
  )
}
