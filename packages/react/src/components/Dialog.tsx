'use client'

import { Dialog as ArkDialog, type DialogRootProps } from '@ark-ui/react'
import type { PropsWithChildren } from 'react'
import { Portal } from './Portal'
import { css } from '@cerberus/styled-system/css'
import { button, type ModalVariantProps } from '@cerberus/styled-system/recipes'

export type DialogProps = DialogRootProps & ModalVariantProps

export function Dialog(props: PropsWithChildren<DialogProps>) {
  return (
    <ArkDialog.Root {...props}>
      <ArkDialog.Trigger className={button()}>Open Dialog</ArkDialog.Trigger>
      <Portal>
        <ArkDialog.Backdrop
          className={css({
            backdropFilter: 'blur(4px)',
            background: 'page.backdrop.initial',
            height: '100vh',
            left: '0',
            position: 'fixed',
            top: '0',
            width: '100vw',
            zIndex: 'overlay',
            _open: {
              animation: 'backdrop-in',
            },
            _closed: {
              animation: 'backdrop-out',
            },
          })}
        />
        <ArkDialog.Positioner
          className={css({
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            left: '0',
            overflow: 'auto',
            position: 'fixed',
            top: '0',
            width: '100vw',
            height: '100dvh',
            zIndex: 'modal',
          })}
        >
          <ArkDialog.Content
            className={css({
              bgColor: 'page.surface.100',
              borderRadius: 'l3',
              boxShadow: 'lg',
              minW: 'sm',
              position: 'relative',
              _open: {
                animation: 'dialog-in',
              },
              _closed: {
                animation: 'dialog-out',
              },
            })}
          >
            <ArkDialog.Title>Dialog Title</ArkDialog.Title>
            <ArkDialog.Description>Dialog Description</ArkDialog.Description>

            <ArkDialog.CloseTrigger className={button()}>
              Close
            </ArkDialog.CloseTrigger>

            {props.children}
          </ArkDialog.Content>
        </ArkDialog.Positioner>
      </Portal>
    </ArkDialog.Root>
  )
}
