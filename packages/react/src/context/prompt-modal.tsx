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
import { DialogCloseTrigger } from '@ark-ui/react/dialog'
import { HStack, VStack } from 'styled-system/jsx'
import { css } from 'styled-system/css'
import { hstack } from 'styled-system/patterns'
import { FieldLabel, FieldRoot, Input } from '../components/field/index'
import { Button } from '../components/button/button'
import { Show } from '../components/Show'
import { Avatar } from '../components/avatar/avatar'
import { Text } from '../components/Text'
import {
  Dialog,
  DialogDescription,
  DialogHeading,
  DialogProvider,
} from '../components/dialog'
import { useCerberusContext } from './cerberus'

/**
 * This module provides a context and hook for the prompt modal.
 * @module PromptModal
 */

export interface ShowPromptModalOptions {
  /**
   * The kind of prompt modal to show.
   * @default 'non-destructive'
   */
  kind?: 'destructive' | 'non-destructive'
  /**
   * The heading of the prompt modal.
   */
  heading: string
  /**
   * The description of the prompt modal.
   */
  description?: string
  /**
   * The key to confirm the action.
   */
  key: string
  /**
   * The text for the action button.
   */
  actionText: string
  /**
   * The text for the cancel button.
   */
  cancelText: string
}
export type PromptShowResult =
  | ((value: string | PromiseLike<string>) => void)
  | null

export interface PromptModalValue {
  /**
   * The method to trigger the prompt modal.
   * @returns the value of the key if the action is confirmed.
   * @example
   * ```tsx
   * const accepted = await prompt.show({
   *  kind: 'destructive',
   *  heading: 'Delete channel?',
   *  description:
   *   'This will permanently delete a channel on your account. There is no going back.',
   *  key: CHANNEL_NAME,
   *  actionText: 'Yes, delete channel',
   *  cancelText: 'No, cancel',
   * })
   */
  show: (options: ShowPromptModalOptions) => Promise<string>
}

const PromptModalContext = createContext<PromptModalValue | null>(null)

export type PromptModalProviderProps = PropsWithChildren<unknown>

/**
 * Provides a prompt modal to the app.
 * @see https://cerberus.digitalu.design/react/prompt-modal
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
  const resolveRef = useRef<PromptShowResult>(null)
  const [open, setOpen] = useState<boolean>(false)
  const [content, setContent] = useState<ShowPromptModalOptions | null>(null)
  const [inputValue, setInputValue] = useState<string>('')

  const { icons } = useCerberusContext()
  const { promptModal: PromptIcon } = icons

  const isValid = useMemo(
    () => inputValue === content?.key,
    [inputValue, content],
  )

  const palette = useMemo(
    () => (content?.kind === 'destructive' ? 'danger' : 'action'),
    [content],
  )

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }, [])

  const handleChoice = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const target = e.currentTarget as HTMLButtonElement
      if (target.value === 'true') {
        resolveRef.current?.(inputValue)
      }
      setOpen(false)
    },
    [inputValue, setOpen],
  )

  const handleShow = useCallback(
    (options: ShowPromptModalOptions) => {
      return new Promise<string>((resolve) => {
        setContent({ ...options, kind: options.kind || 'non-destructive' })
        setOpen(true)
        resolveRef.current = resolve
      })
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
    <PromptModalContext.Provider value={value}>
      {props.children}

      <DialogProvider open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Dialog
          size="sm"
          style={{
            '--dialog-content-min-h': 'auto',
          }}
        >
          <VStack
            alignItems="flex-start"
            h="full"
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
                    fallback={<PromptIcon size={24} />}
                  />
                }
              >
                <Avatar
                  gradient="hades-dark"
                  fallback={<PromptIcon size={24} />}
                />
              </Show>
            </HStack>

            <DialogHeading>{content?.heading}</DialogHeading>
            <DialogDescription>{content?.description}</DialogDescription>

            <VStack
              alignItems="flex-start"
              marginBlockStart="md"
              marginBlockEnd="lg"
              w="full"
            >
              <FieldRoot invalid={!isValid}>
                <FieldLabel
                  className={hstack({
                    gap: 'xs',
                    justify: 'flex-start',
                    marginBlockEnd: 'xs',
                    textStyle: 'label-md',
                    w: 'initial',
                  })}
                >
                  Type
                  <Text as="strong" textTransform="uppercase">
                    {content?.key}
                  </Text>
                  to confirm
                </FieldLabel>
                <Input name="confirm" onChange={handleChange} type="text" />
              </FieldRoot>
            </VStack>

            <HStack gap="md" justify="stretch" w="full">
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
    </PromptModalContext.Provider>
  )
}

/**
 * Used to retrieve the context of the PromptModal provider.
 */
export function usePromptModal(): PromptModalValue {
  const context = useContext(PromptModalContext)
  if (context === null) {
    throw new Error('usePromptModal must be used within a PromptModal Provider')
  }
  return context
}
