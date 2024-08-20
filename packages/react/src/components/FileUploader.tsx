'use client'

import { cx } from '@cerberus-design/styled-system/css'
import { circle, vstack } from '@cerberus-design/styled-system/patterns'
import { type InputHTMLAttributes } from 'react'
import { Show } from './Show'
import { fileUploader, modalIcon } from '@cerberus-design/styled-system/recipes'
import { $cerberusIcons } from '../config/defineIcons'

export interface FileUploaderProps
  extends InputHTMLAttributes<HTMLInputElement> {
  heading?: string
  name: string
}

export function FileUploader(props: FileUploaderProps) {
  const styles = fileUploader()
  const Icon = $cerberusIcons.fileUploader

  return (
    <div
      className={cx(
        vstack({
          justify: 'center',
        }),
        styles.container,
      )}
    >
      <span className={cx(styles.icon, modalIcon(), circle())}>
        <Icon />
      </span>

      <label
        className={cx(
          vstack({
            justify: 'center',
          }),
          styles.label,
        )}
        htmlFor={props.name}
      >
        <Show when={Boolean(props.heading)}>
          <p className={styles.heading}>{props.heading}</p>
        </Show>
        Import {props.accept?.replace(',', ', ')} files
        <p className={styles.description}>Or click to upload</p>
        <input
          {...props}
          className={cx(props.className, styles.input)}
          type="file"
        />
      </label>
    </div>
  )
}
