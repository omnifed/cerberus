import { cx } from '@cerberus-design/styled-system/css'
import { vstack } from '@cerberus-design/styled-system/patterns'
import type { InputHTMLAttributes } from 'react'
import { Show } from './Show'
import { fileUploader } from '@cerberus-design/styled-system/recipes'

export interface FileUploaderProps
  extends InputHTMLAttributes<HTMLInputElement> {
  heading?: string
  name: string
}

export function FileUploader(props: FileUploaderProps) {
  const styles = fileUploader()
  return (
    <div
      className={cx(
        vstack({
          justify: 'center',
        }),
        styles.container,
      )}
    >
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
