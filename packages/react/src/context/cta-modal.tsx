'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type MouseEvent,
  type MouseEventHandler,
  type PropsWithChildren,
  type ReactNode,
} from 'react'
import { Button } from '../components/button/button'
import { Show } from '../components/Show'
import { Avatar } from '../components/Avatar'
import { useCerberusContext } from './cerberus'
import { HStack } from '@cerberus/styled-system/jsx'
import { css } from '@cerberus/styled-system/css'
import { VStack } from '@cerberus/styled-system/jsx'
import {
  Dialog,
  DialogDescription,
  DialogHeading,
  DialogProvider,
} from '../components/Dialog'
import { DialogCloseIconTrigger } from '../components/Dialog.client'

/**
 * This module provides a context and hook for the cta modal.
 * @module
 */

export interface ShowCTAModalOptions {
  /**
   * The heading of the cta modal.
   */
  heading: string
  /**
   * The description of the cta modal.
   */
  description?: string
  /**
   * The icon used for the modal Avatar.
   */
  icon?: ReactNode
  /**
   * The actions for the cta modal. Max of 2 actions.
   */
  actions: {
    text: string
    onClick: MouseEventHandler<HTMLButtonElement>
  }[]
}

export interface CTAModalValue {
  show: (options: ShowCTAModalOptions) => void
}

const CTAModalContext = createContext<CTAModalValue | null>(null)

export type CTAModalProviderProps = PropsWithChildren<unknown>

/**
 * Provides a CTA modal to the app.
 * @see https://cerberus.digitalu.design/react/cta-modal
 * @example
 * ```tsx
 * // Wrap the Provider around the root of the feature.
 * <CTAModal>
 *   <SomeFeatureSection />
 * </CTAModal>
 *
 * // Use the hook to show the cta modal.
 * const cta = useCTAModal()
 *
 * const handleClick = useCallback(async () => {
 *  const userConsent = await cta.show({
 *   heading: 'Create or copy a Cohort',
 *  description:
 *   'Create a new cohort or copy and existing one.',
 *  icon: <Copy size={24} />,
 *  actions: [
 *  {
 *   text: 'Create Cohort',
 *   onClick: () => {},
 *  {
 *   text: 'Copy Cohort',
 *   onClick: () => {}
 *  }
 * })
 * setConsent(userConsent)
 * }, [cta])
 * ```
 */
export function CTAModal(props: PropsWithChildren<CTAModalProviderProps>) {
  const [open, setOpen] = useState<boolean>(false)
  const [content, setContent] = useState<ShowCTAModalOptions | null>(null)
  const confirmIcon = content?.icon

  const { icons } = useCerberusContext()
  const { confirmModal: FallbackIcon } = icons

  const handleShow = useCallback(
    (options: ShowCTAModalOptions) => {
      const maxActions = 2
      if (options.actions.length > maxActions) {
        throw new Error(
          `CTA Modal only supports a maximum of ${maxActions} actions.`,
        )
      }
      setContent({ ...options })
      setOpen(true)
    },
    [setOpen],
  )

  const handleActionClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const index = event.currentTarget.getAttribute('data-index')
      const action = content?.actions[Number(index)]
      const { onClick } = action || {}
      onClick?.(event)
      setOpen(false)
    },
    [content, setOpen],
  )

  const value = useMemo(
    () => ({
      show: handleShow,
    }),
    [handleShow],
  )

  return (
    <CTAModalContext.Provider value={value}>
      {props.children}

      <DialogProvider open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Dialog size="sm">
          <DialogCloseIconTrigger />

          <VStack gap="xl" w="full">
            <VStack alignItems="flex-start" gap="md" w="full">
              <VStack gap="lg" w="full">
                <Avatar
                  ariaLabel=""
                  gradient="charon-light"
                  icon={
                    <Show
                      when={Boolean(confirmIcon)}
                      fallback={<FallbackIcon size={24} />}
                    >
                      {confirmIcon}
                    </Show>
                  }
                  src=""
                />
                <DialogHeading>{content?.heading}</DialogHeading>
                <DialogDescription>{content?.description}</DialogDescription>
              </VStack>
            </VStack>

            <HStack gap="md" w="full">
              <Show when={Boolean(content?.actions?.length)}>
                {content?.actions?.map((action, index) => (
                  <Button
                    data-index={index}
                    className={css({
                      w: '1/2',
                    })}
                    key={index}
                    onClick={handleActionClick}
                    shape="rounded"
                    usage="outlined"
                  >
                    {action.text}
                  </Button>
                ))}
              </Show>
            </HStack>
          </VStack>
        </Dialog>
      </DialogProvider>
    </CTAModalContext.Provider>
  )
}

export function useCTAModal(): CTAModalValue {
  const context = useContext(CTAModalContext)
  if (context === null) {
    throw new Error('useCTAModal must be used within a CTAModal Provider')
  }
  return context
}
