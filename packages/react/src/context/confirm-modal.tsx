'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type PropsWithChildren,
} from 'react'
import { Portal } from '../components/Portal'
import { Button } from '../components/Button'
import { css } from '@cerberus-design/styled-system/css'
import { hstack, vstack } from '@cerberus-design/styled-system/patterns'
import { $cerberusIcons } from '../config/defineIcons'
import { modal } from '@cerberus-design/styled-system/recipes'
import { trapFocus } from '../aria-helpers/trap-focus.aria'
import { ModalIcon } from '../components/ModalIcon'
import { Show } from '../components/Show'

/**
 * This module provides a context and hook for the confirm modal.
 * @module
 */

export interface ShowConfirmModalOptions {
  kind?: 'destructive' | 'non-destructive'
  heading: string
  description?: string
  actionText: string
  cancelText: string
}
export type ShowResult =
  | ((value: boolean | PromiseLike<boolean>) => void)
  | null

export interface ConfirmModalValue {
  show: (options: ShowConfirmModalOptions) => Promise<boolean>
}

const ConfirmModalContext = createContext<ConfirmModalValue | null>(null)

export interface ConfirmModalProviderProps {}

/**
 * Provides a confirm modal to the app.
 * @example
 * ```tsx
 * // Wrap the Provider around the root of the feature.
 * <ConfirmModal>
 *   <SomeFeatureSection />
 * </ConfirmModal>
 *
 * // Use the hook to show the confirm modal.
 * const confirm = useConfirmModal()
 *
 * const handleClick = useCallback(async () => {
 *  const userConsent = await confirm.show({
 *   heading: 'Add new payment method?',
 *  description:
 *   'This will add a new payment method to your account to be billed for future purchases.',
 * actionText: 'Yes, add payment method',
 * cancelText: 'No, cancel',
 * })
 * setConsent(userConsent)
 * }, [confirm])
 * ```
 */
export function ConfirmModal(
  props: PropsWithChildren<ConfirmModalProviderProps>,
) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const resolveRef = useRef<ShowResult>(null)
  const [content, setContent] = useState<ShowConfirmModalOptions | null>(null)
  const focusTrap = trapFocus(dialogRef)
  const ConfirmIcon = $cerberusIcons.confirmModal

  const palette = useMemo(
    () => (content?.kind === 'destructive' ? 'danger' : 'action'),
    [content],
  )
  const styles = modal()

  const handleChoice = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement
    if (target.value === 'true') {
      resolveRef.current?.(true)
    }
    resolveRef.current?.(false)
    dialogRef?.current?.close()
  }, [])

  const handleShow = useCallback((options: ShowConfirmModalOptions) => {
    return new Promise<boolean>((resolve) => {
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
    <ConfirmModalContext.Provider value={value}>
      {props.children}

      <Portal>
        <dialog className={styles.dialog} onKeyDown={focusTrap} ref={dialogRef}>
          <section
            className={vstack({
              alignItems: 'flex-start',
              gap: '4',
              mb: '8',
            })}
          >
            <Show
              when={palette === 'danger'}
              fallback={
                <ModalIcon palette="action">
                  <ConfirmIcon size={24} />
                </ModalIcon>
              }
            >
              <ModalIcon palette="danger">
                <ConfirmIcon size={24} />
              </ModalIcon>
            </Show>
            <h2 className={styles.heading}>{content?.heading}</h2>
            <p className={styles.description}>{content?.description}</p>
          </section>

          <div
            className={hstack({
              gap: '4',
            })}
          >
            <Button
              autoFocus
              className={css({
                w: '1/2',
              })}
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
    </ConfirmModalContext.Provider>
  )
}

export function useConfirmModal(): ConfirmModalValue {
  const context = useContext(ConfirmModalContext)
  if (context === null) {
    throw new Error(
      'useConfirmModal must be used within a ConfirmModal Provider',
    )
  }
  return context
}
