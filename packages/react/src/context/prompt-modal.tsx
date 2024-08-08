'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type MouseEvent,
  type PropsWithChildren,
} from 'react'
import { Portal } from '../components/Portal'
import { Button } from '../components/Button'
import { css } from '@cerberus-design/styled-system/css'
import { hstack, vstack } from '@cerberus-design/styled-system/patterns'
import { modal } from '@cerberus-design/styled-system/recipes'
import { trapFocus } from '../aria-helpers/trap-focus.aria'
import { Input } from '../components/Input'
import { Field } from './field'
import { Label } from '../components/Label'
import { $cerberusIcons } from '../config/defineIcons'
import { ModalIcon } from '../components/ModalIcon'
import { Show } from '../components/Show'

/**
 * This module provides a context and hook for the prompt modal.
 * @module
 */

export interface ShowPromptModalOptions {
  kind?: 'destructive' | 'non-destructive'
  heading: string
  description?: string
  key: string
  actionText: string
  cancelText: string
}
export type PromptShowResult =
  | ((value: string | PromiseLike<string>) => void)
  | null

export interface PromptModalValue {
  show: (options: ShowPromptModalOptions) => Promise<string>
}

const PromptModalContext = createContext<PromptModalValue | null>(null)

export interface PromptModalProviderProps {}

/**
 * Provides a prompt modal to the app.
 * @example
 * ```tsx
 * // Wrap the Provider around the root of the feature.
 * <PromptModal>
 *   <SomeFeatureSection />
 * </PromptModal>
 *
 * // Use the hook to show the prompt modal.
 * const prompt = usePromptModal()
 *
 * const handleClick = useCallback(async () => {
 *  const accepted = await prompt.show({
 *   kind: 'destructive',
 *   heading: 'Delete channel?',
 *  description:
 *   'This will permanently delete a channel on your account. There is no going back.',
 * key: CHANNEL_NAME,
 * actionText: 'Yes, delete channel',
 * cancelText: 'No, cancel',
 * })
 * // do something with accepted
 * }, [prompt])
 * ```
 */
export function PromptModal(
  props: PropsWithChildren<PromptModalProviderProps>,
) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const resolveRef = useRef<PromptShowResult>(null)
  const [content, setContent] = useState<ShowPromptModalOptions | null>(null)
  const [inputValue, setInputValue] = useState<string>('')
  const focusTrap = trapFocus(dialogRef)
  const PromptIcon = $cerberusIcons.promptModal

  const isValid = useMemo(
    () => inputValue === content?.key,
    [inputValue, content],
  )

  const palette = useMemo(
    () => (content?.kind === 'destructive' ? 'danger' : 'action'),
    [content],
  )
  const styles = modal()

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value)
    },
    [content],
  )

  const handleChoice = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const target = e.currentTarget as HTMLButtonElement
      if (target.value === 'true') {
        resolveRef.current?.(inputValue)
      }
      dialogRef?.current?.close()
    },
    [inputValue],
  )

  const handleShow = useCallback((options: ShowPromptModalOptions) => {
    return new Promise<string>((resolve) => {
      setContent({ ...options, kind: options.kind || 'non-destructive' })
      dialogRef?.current?.showModal()
      resolveRef.current = resolve
    })
  }, [])

  const value = useMemo(
    () => ({
      show: handleShow,
    }),
    [handleShow],
  )

  return (
    <PromptModalContext.Provider value={value}>
      {props.children}

      <Portal>
        <dialog className={styles.dialog} onKeyDown={focusTrap} ref={dialogRef}>
          <div
            className={vstack({
              alignItems: 'flex-start',
              gap: '4',
            })}
          >
            <Show
              when={palette === 'danger'}
              fallback={
                <ModalIcon palette="action">
                  <PromptIcon size={24} />
                </ModalIcon>
              }
            >
              <ModalIcon palette="danger">
                <PromptIcon size={24} />
              </ModalIcon>
            </Show>
            <h2 className={styles.heading}>{content?.heading}</h2>
            <p className={styles.description}>{content?.description}</p>
          </div>

          <div
            className={vstack({
              alignItems: 'flex-start',
              mt: '4',
              mb: '8',
            })}
          >
            <Field invalid={!isValid}>
              <Label htmlFor="confirm" size="md">
                Type
                <strong
                  className={css({
                    textTransform: 'uppercase',
                  })}
                >
                  {content?.key}
                </strong>
                to confirm
              </Label>
              <Input
                id="confirm"
                name="confirm"
                onChange={handleChange}
                type="text"
              />
            </Field>
          </div>

          <div
            className={hstack({
              justifyContent: 'stretch',
              gap: '4',
            })}
          >
            <Button
              autoFocus
              className={css({
                w: '1/2',
              })}
              disabled={!isValid}
              name="confirm"
              onClick={handleChoice}
              palette={palette}
              value="true"
            >
              {content?.actionText}
            </Button>
            <Button
              className={css({
                w: '1/2',
              })}
              name="cancel"
              onClick={handleChoice}
              usage="outlined"
              value="false"
            >
              {content?.cancelText}
            </Button>
          </div>
        </dialog>
      </Portal>
    </PromptModalContext.Provider>
  )
}

// This is to help show the variant styles for the icon since Panda is
// not syncing correctly for the danger variant.
// export function PromptModalIcon(props: ConfirmModalVariantProps) {
//   const PromptIcon = $cerberusIcons.promptModal
//   return (
//     <Show
//       when={props.palette === 'danger'}
//       fallback={
//         <div className={cx(modal().icon, circle())}>
//           <PromptIcon size={24} />
//         </div>
//       }
//     >
//       <div
//         className={cx(
//           modal().icon,
//           circle({
//             bgColor: 'danger.surface.initial',
//           }),
//         )}
//         style={{
//           color: 'var(--cerberus-colors-danger-text-100)',
//         }}
//       >
//         <PromptIcon size={24} />
//       </div>
//     </Show>
//   )
// }

export function usePromptModal(): PromptModalValue {
  const context = useContext(PromptModalContext)
  if (context === null) {
    throw new Error('usePromptModal must be used within a PromptModal Provider')
  }
  return context
}
