import { css, cx } from '@cerberus-design/styled-system/css'
import { cq, vstack } from '@cerberus-design/styled-system/patterns'
import type { InputHTMLAttributes, PropsWithChildren } from 'react'
import { Show } from './Show'

export interface FileUploaderProps
  extends InputHTMLAttributes<HTMLInputElement> {
  heading?: string
  name: string
}

export function FileUploader(props: PropsWithChildren<FileUploaderProps>) {
  return (
    <div
      className={cq({
        border: '1px dashed',
        borderColor: 'page.border.100',
        bgColor: 'page.surface.100',
        rounded: 'md',
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
        {props.children}

        <p
          className={css({
            textStyle: 'label-sm',
          })}
        >
          Or{' '}
          <span
            className={css({
              textStyle: 'link',
            })}
          >
            Click to upload
          </span>
        </p>

        <input
          {...props}
          className={cx(
            props.className,
            css({
              bottom: '0',
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
