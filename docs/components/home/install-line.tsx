'use client'

import { Clipboard, IconButton } from '@cerberus-design/react'
import { css } from 'styled-system/css'

/** A copyable install command. */
export function InstallLine(props: { command: string }) {
  return (
    <Clipboard.Root value={props.command}>
      <Clipboard.Control asChild>
        <div
          className={css({
            alignItems: 'center',
            bgColor: 'page.bg.initial',
            border: '1px solid',
            borderColor: 'page.border.initial',
            display: 'flex',
            gap: 'md',
            justifyContent: 'space-between',
            pl: 'md',
            pr: 'xs',
            py: 'xs',
            rounded: 'md',
            w: 'full',
          })}
        >
          <Clipboard.Label asChild>
            <code
              className={css({
                color: 'page.text.initial',
                overflowX: 'auto',
                fontFamily: 'mono',
                textStyle: 'body-sm',
                whiteSpace: 'nowrap',
              })}
            >
              {props.command}
            </code>
          </Clipboard.Label>
          <Clipboard.TriggerWithTooltip asChild>
            <IconButton clipboard shape="square" size="sm" usage="ghost">
              <Clipboard.CopyIndicator />
            </IconButton>
          </Clipboard.TriggerWithTooltip>
        </div>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
