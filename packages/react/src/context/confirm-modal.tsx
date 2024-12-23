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
  type ReactNode,
} from 'react'
import { Portal } from '../components/Portal'
import { Button } from '../components/Button'
import { css } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
import { trapFocus } from '../aria-helpers/trap-focus.aria'
import { Show } from '../components/Show'
import { Modal } from '../components/Modal'
import { useModal } from '../hooks/useModal'
import { ModalHeader } from '../components/ModalHeader'
import { ModalHeading } from '../components/ModalHeading'
import { ModalDescription } from '../components/ModalDescription'
import { Avatar } from '../components/Avatar'
import { HStack, VStack } from '@cerberus/styled-system/jsx'
import { useCerberusContext } from './cerberus'

/**
 * This module provides a context and hook for the confirm modal.
 * @module
 */

export interface BaseConfirmOptions {
  /**
   * The heading of the confirm modal.
   */
  heading: string
  /**
   * The text for the action button.
   */
  actionText: string
  /**
   * The text for the cancel button.
   */
  cancelText: string
}

export interface DestructiveConfirmOptions extends BaseConfirmOptions {
  /**
   * The kind of confirm modal to show.
   */
  kind?: 'destructive'
  /**
   * The description of the confirm modal. Can only be a string for destructive confirm modals.
   */
  description?: string
}

export interface NonDestructiveConfirmModalOptions extends BaseConfirmOptions {
  /**
   * The kind of confirm modal to show.
   * @default 'non-destructive'
   */
  kind?: 'non-destructive'
  /**
   * The description of the confirm modal. Can be a ReactNode for non-destructive kind if you need to display text links.
   * @example
   * ```tsx
   * description: <>Use a Fragment because we put the content within a Paragraph tag.</>
   */
  description?: ReactNode
}

export type ShowConfirmModalOptions =
  | NonDestructiveConfirmModalOptions
  | DestructiveConfirmOptions

export type ShowResult =
  | ((value: boolean | PromiseLike<boolean>) => void)
  | null

export interface ConfirmModalValue {
  show: (options: ShowConfirmModalOptions) => Promise<boolean>
}

const ConfirmModalContext = createContext<ConfirmModalValue | null>(null)

export type ConfirmModalProviderProps = PropsWithChildren<unknown>

/**
 * Provides a confirm modal to the app.
 * @see https://cerberus.digitalu.design/react/confirm-modal
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
  const { modalRef, show, close } = useModal()
  const resolveRef = useRef<ShowResult>(null)
  const [content, setContent] = useState<ShowConfirmModalOptions | null>(null)
  const focusTrap = trapFocus(modalRef)
  const kind = content?.kind ?? 'non-destructive'

  const { icons } = useCerberusContext()
  const { confirmModal: ConfirmIcon } = icons

  const palette = useMemo(
    () => (kind === 'destructive' ? 'danger' : 'action'),
    [kind],
  )

  const handleChoice = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const target = e.currentTarget as HTMLButtonElement
      if (target.value === 'true') {
        resolveRef.current?.(true)
      }
      resolveRef.current?.(false)
      close()
    },
    [close],
  )

  const handleShow = useCallback(
    (options: ShowConfirmModalOptions) => {
      return new Promise<boolean>((resolve) => {
        setContent({ ...options })
        show()
        resolveRef.current = resolve
      })
    },
    [show],
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
        <Modal onKeyDown={focusTrap} ref={modalRef}>
          <VStack gap="xl" w="full">
            <ModalHeader>
              <div
                className={hstack({
                  justify: 'center',
                  w: 'full',
                })}
              >
                <Show
                  when={palette === 'danger'}
                  fallback={
                    <Avatar
                      ariaLabel=""
                      gradient="charon-light"
                      icon={<ConfirmIcon size={24} />}
                      src=""
                    />
                  }
                >
                  <Avatar
                    ariaLabel=""
                    gradient="hades-dark"
                    icon={<ConfirmIcon size={24} />}
                    src=""
                  />
                </Show>
              </div>
              <ModalHeading>{content?.heading}</ModalHeading>
              <ModalDescription>{content?.description}</ModalDescription>
            </ModalHeader>

            <HStack gap="4" w="full">
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
            </HStack>
          </VStack>
        </Modal>
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
