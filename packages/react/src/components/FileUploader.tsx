'use client'

import { cx } from '@cerberus/styled-system/css'
import { vstack } from '@cerberus/styled-system/patterns'
import { type InputHTMLAttributes } from 'react'
import { Show } from './Show'
import { fileUploader } from '@cerberus/styled-system/recipes'
import { useCerberusContext } from '../context/cerberus'
import { Avatar } from './avatar/avatar'

export interface FileUploaderProps
  extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The optional heading to display in the FileUploader component.
   */
  heading?: string
  /**
   * The name of the file input element.
   */
  name: string
  /**
   * Disable the FileUploader component. Good for single-use file uploads.
   */
  disabled?: boolean
}

/**
 * A component that allows the user to upload files.
 * @see https://cerberus.digitalu.design/react/file-uploader
 */
export function FileUploader(props: FileUploaderProps) {
  const { icons } = useCerberusContext()
  const styles = fileUploader()
  const { waitingFileUploader: Icon } = icons

  return (
    <div
      {...(props.disabled ? { 'aria-disabled': true } : {})}
      className={cx(
        vstack({
          justify: 'center',
        }),
        styles.container,
      )}
    >
      <div className={styles.icon}>
        <Avatar gradient="charon-light" fallback={<Icon />} />
      </div>

      <label
        className={cx(
          vstack({
            justify: 'center',
          }),
          styles.label,
        )}
        htmlFor={props.name}
      >
        <Show when={props.heading}>
          <p className={styles.heading}>{props.heading}</p>
        </Show>
        Import {props.accept?.replace(',', ', ')} files
        <p className={styles.description}>Click to select files</p>
        <input
          {...props}
          className={cx(props.className, styles.input)}
          type="file"
        />
      </label>
    </div>
  )
}
