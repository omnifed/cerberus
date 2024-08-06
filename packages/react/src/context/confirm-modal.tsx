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
import { circle, hstack, vstack } from '@cerberus-design/styled-system/patterns'
import { $cerberusIcons } from '../config/defineIcons'

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
  props: PropsWithChildren<Record<string, unknown>>,
) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const resolveRef = useRef<ShowResult>(null)
  const [content, setContent] = useState<ShowConfirmModalOptions | null>(null)
  const InfoIcon = $cerberusIcons.confirmModal

  const palette = useMemo(() => {
    if (content?.kind === 'destructive') {
      return 'danger'
    }
    return 'action'
  }, [content])

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
        <dialog
          className={css({
            alignSelf: 'safe center',
            bgColor: 'page.surface.100',
            mxi: 'auto',
            p: '8',
            rounded: 'md',
            shadow: 'lg',
            _backdrop: {
              bgColor: 'page.backdrop.initial',
              backdropFilter: 'blur(2px)',
              backdropBlur: 'sm',
            },
            md: {
              w: '35.25rem',
            },
          })}
          ref={dialogRef}
        >
          <div
            className={vstack({
              alignItems: 'flex-start',
              gap: '4',
              mb: '8',
            })}
          >
            <div
              data-palette={palette}
              className={circle({
                mxi: 'auto',
                p: '2',
                _actionPalette: {
                  cerbGradient: 'purple',
                  color: 'action.navigation.initial',
                },
                _dangerPalette: {
                  bgColor: 'danger.surface.initial',
                  color: 'danger.text.100',
                },
              })}
            >
              <InfoIcon />
            </div>

            <h2
              className={css({
                color: 'page.text.initial',
                textStyle: 'h4',
              })}
            >
              {content?.heading}
            </h2>
            <p
              className={css({
                color: 'page.text.initial',
              })}
            >
              {content?.description}
            </p>
          </div>

          <div
            className={hstack({
              justifyContent: 'stretch',
              gap: '4',
            })}
          >
            <Button
              autoFocus
              onClick={handleChoice}
              palette={palette}
              value="true"
            >
              {content?.actionText}
            </Button>
            <Button onClick={handleChoice} usage="outlined" value="false">
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
