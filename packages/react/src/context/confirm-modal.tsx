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
import { css } from 'styled-system/css'
import { HStack, VStack } from 'styled-system/jsx'
import { Button } from '../components/button/button'
import { Show } from '../components/Show'
import { Avatar } from '../components/avatar/avatar'
import {
  Dialog,
  DialogCloseTrigger,
  DialogDescription,
  DialogHeading,
  DialogProvider,
  type OpenChangeDetails,
} from '../components/dialog'
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
  | ((value: boolean | PromiseLike<boolean | null> | null) => void)
  | null

export interface ConfirmModalValue {
  show: (options: ShowConfirmModalOptions) => Promise<boolean | null>
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
  const [open, setOpen] = useState<boolean>(false)
  const [content, setContent] = useState<ShowConfirmModalOptions | null>(null)
  const resolveRef = useRef<ShowResult>(null)
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
      setOpen(false)
    },
    [setOpen],
  )

  const handleShow = useCallback(
    (options: ShowConfirmModalOptions) => {
      return new Promise<boolean | null>((resolve) => {
        setContent({ ...options })
        setOpen(true)
        resolveRef.current = resolve
      })
    },
    [setOpen, setContent],
  )

  const handleOpenChange = useCallback(
    (e: OpenChangeDetails) => {
      setOpen(e.open)
      if (!e.open) {
        resolveRef.current?.(null)
        resolveRef.current = null
      }
    },
    [setOpen],
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

      <DialogProvider open={open} onOpenChange={handleOpenChange}>
        <Dialog
          size="sm"
          style={{
            '--dialog-content-min-h': 'auto',
          }}
        >
          <VStack
            alignItems="flex-start"
            gap="md"
            justify="space-between"
            w="full"
          >
            <HStack
              alignSelf="center"
              justify="center"
              paddingBlockEnd="md"
              w="full"
            >
              <Show
                when={palette === 'danger'}
                fallback={
                  <Avatar
                    gradient="charon-light"
                    fallback={<ConfirmIcon size={24} />}
                  />
                }
              >
                <Avatar
                  gradient="hades-dark"
                  fallback={<ConfirmIcon size={24} />}
                />
              </Show>
            </HStack>

            <DialogHeading>{content?.heading}</DialogHeading>

            <Show when={content?.description}>
              <DialogDescription>{content?.description}</DialogDescription>
            </Show>

            <HStack gap="md" pt="md" w="full">
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
              <DialogCloseTrigger asChild>
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
              </DialogCloseTrigger>
            </HStack>
          </VStack>
        </Dialog>
      </DialogProvider>
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
