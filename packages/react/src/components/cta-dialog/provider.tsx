'use client'

import {
  useCallback,
  useContext,
  useMemo,
  useState,
  type MouseEvent,
  type PropsWithChildren,
  type ReactNode,
} from 'react'
import { HStack, VStack } from 'styled-system/jsx'
import { useCerberusContext } from '../../context/cerberus'
import { Show } from '../show/index'
import { For } from '../for/index'
import { Avatar } from '../avatar/avatar'
import {
  Dialog,
  DialogDescription,
  DialogHeading,
  DialogProvider,
  DialogRootProps,
} from '../dialog/index'
import { DialogCloseIconTrigger } from '../dialog/close-icon-trigger'
import type { CTAButtonAction, CTAModalActionReturn } from './utils'
import {
  CTAModalContext,
  type CTAModalValue,
  type ShowCTAModalOptions,
} from './context'
import { TriggerItem } from './trigger-item'

/**
 * This module provides the provider and hook for the cta modal.
 * @module 'react/cta-modal/provider'
 */

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
export function CTAModal(props: PropsWithChildren<DialogRootProps>) {
  const { children, ...rootProps } = props

  const [open, setOpen] = useState<boolean>(false)
  const [content, setContent] = useState<ShowCTAModalOptions | null>(null)

  const confirmIcon = content?.icon

  const { icons } = useCerberusContext()
  const { confirmModal: FallbackIcon } = icons

  const handleShow = useCallback(
    (options: ShowCTAModalOptions) => {
      setContent({ ...options })
      setOpen(true)
    },
    [setOpen],
  )

  const handleActionClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const index = Number(event.currentTarget.getAttribute('data-index'))
      const contentActions = content?.actions as CTAModalActionReturn
      const action = contentActions._actions[index] as CTAButtonAction
      action?.handleClick?.(event)
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
      {children}

      <DialogProvider
        lazyMount
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        unmountOnExit
        {...rootProps}
      >
        <Dialog
          size="sm"
          style={{
            '--dialog-content-min-h': 'auto',
          }}
        >
          <DialogCloseIconTrigger />

          <VStack gap="xl" w="full">
            <VStack alignItems="flex-start" gap="md" w="full">
              <VStack gap="lg" w="full">
                <Avatar
                  gradient="charon-light"
                  fallback={
                    <Show
                      when={confirmIcon}
                      fallback={<FallbackIcon size={24} />}
                    >
                      {confirmIcon}
                    </Show>
                  }
                />
                <DialogHeading>{content?.heading}</DialogHeading>

                <Show when={content?.description}>
                  <DialogDescription textAlign="center">
                    {content?.description}
                  </DialogDescription>
                </Show>

                <Show when={content?.content}>
                  <DialogDescription textAlign="center">
                    {content?.content}
                  </DialogDescription>
                </Show>
              </VStack>
            </VStack>

            <HStack gap="md" w="full">
              <For each={content?.actions._actions}>
                {(action, index) => (
                  <Show
                    key={index}
                    when={content?.actions?.type === 'btnAction'}
                    fallback={
                      <TriggerItem asChild>{action as ReactNode}</TriggerItem>
                    }
                  >
                    <TriggerItem data-index={index} onClick={handleActionClick}>
                      {(action as CTAButtonAction)?.text}
                    </TriggerItem>
                  </Show>
                )}
              </For>
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
