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

/**
 * This module provides a context and hook for the confirm modal.
 * @module
 */

export interface ShowConfirmModalOptions {
  heading: string
  description?: string
  actionText: string
  cancelText: string
}

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
 * ```
 */
export function ConfirmModal(
  props: PropsWithChildren<Record<string, unknown>>,
) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [userConsent, setUserConsent] = useState<boolean | null>(null)
  const [content, setContent] = useState<ShowConfirmModalOptions | null>(null)

  const handleChoice = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement
    setUserConsent(target.value === 'true')
    dialogRef?.current?.close()
  }, [])

  const handleShow = useCallback(
    async (options: ShowConfirmModalOptions) => {
      setContent(options)
      dialogRef?.current?.showModal()

      return new Promise<boolean>((resolve) => {
        const interval = setInterval(() => {
          if (userConsent !== null) {
            console.log('clearing interval')

            clearInterval(interval)
            console.log('resolving userConsent', userConsent)

            resolve(userConsent)
            setUserConsent(null)
            setContent(null)
          }
        }, 100)
      })
    },
    [userConsent],
  )

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
            bgColor: 'page.surface.100',
            p: '8',
            rounded: 'md',
            shadow: 'lg',
            _backdrop: {
              backdropFilter: 'blur(2px)',
              backdropBlur: 'sm',
              _lightMode: {
                bgColor: 'rgba(188, 186, 202, 0.50)',
              },
              _darkMode: {
                bgColor: 'rgba(19, 0, 36, 0.75)',
              },
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
              mb: '6',
            })}
          >
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
            <Button autoFocus onClick={handleChoice} value="true">
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
