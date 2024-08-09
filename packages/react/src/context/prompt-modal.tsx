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
import { trapFocus } from '../aria-helpers/trap-focus.aria'
import { Input } from '../components/Input'
import { Field } from './field'
import { Label } from '../components/Label'
import { $cerberusIcons } from '../config/defineIcons'
import { ModalIcon } from '../components/ModalIcon'
import { Show } from '../components/Show'
import { useModal } from '../hooks/useModal'
import { Modal } from '../components/Modal'
import { ModalHeader } from '../components/ModalHeader'
import { ModalHeading } from '../components/ModalHeading'
import { ModalDescription } from '../components/ModalDescription'

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
  const { modalRef, show, close } = useModal()
  const resolveRef = useRef<PromptShowResult>(null)
  const [content, setContent] = useState<ShowPromptModalOptions | null>(null)
  const [inputValue, setInputValue] = useState<string>('')
  const focusTrap = trapFocus(modalRef)
  const PromptIcon = $cerberusIcons.promptModal

  const isValid = useMemo(
    () => inputValue === content?.key,
    [inputValue, content],
  )

  const palette = useMemo(
    () => (content?.kind === 'destructive' ? 'danger' : 'action'),
    [content],
  )

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
      close()
    },
    [inputValue, close],
  )

  const handleShow = useCallback(
    (options: ShowPromptModalOptions) => {
      return new Promise<string>((resolve) => {
        setContent({ ...options, kind: options.kind || 'non-destructive' })
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
    <PromptModalContext.Provider value={value}>
      {props.children}

      <Portal>
        <Modal onKeyDown={focusTrap} ref={modalRef}>
          <ModalHeader>
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
            <ModalHeading>{content?.heading}</ModalHeading>
            <ModalDescription>{content?.description}</ModalDescription>
          </ModalHeader>

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
        </Modal>
      </Portal>
    </PromptModalContext.Provider>
  )
}

export function usePromptModal(): PromptModalValue {
  const context = useContext(PromptModalContext)
  if (context === null) {
    throw new Error('usePromptModal must be used within a PromptModal Provider')
  }
  return context
}
