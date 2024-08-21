'use client'

import {
  CheckmarkFilled,
  Close,
  ErrorFilled,
  InformationFilled,
  WarningFilled,
} from '@cerberus-design/icons'
import { IconButton } from '@cerberus-design/react'
import { css, cx } from '@cerberus/styled-system/css'
import { hstack, vstack } from '@cerberus/styled-system/patterns'
import { notification } from '@cerberus/styled-system/recipes'
import type { PropsWithChildren } from 'react'

const FLEX_START = 'flex-start'

export function InfoNotification() {
  const infoStyles = notification()
  return (
    <div
      className={cx(
        hstack({
          position: 'relative',
          gap: '4',
          top: 'initial',
        }),
        infoStyles.dialog,
      )}
    >
      <span className={infoStyles.icon}>
        <InformationFilled />
      </span>

      <div
        className={vstack({
          alignItems: FLEX_START,
          gap: '0',
          py: '2',
        })}
      >
        <p className={infoStyles.heading}>Info Notification</p>
        <p className={infoStyles.description}>
          This is a description with a <a href="#">link</a> in the message.
        </p>
      </div>

      <div className={infoStyles.close}>
        <IconButton ariaLabel="Close">
          <Close />
        </IconButton>
      </div>
    </div>
  )
}

export function SuccessNotification() {
  const styles = notification({
    palette: 'success',
  })

  return (
    <div
      className={cx(
        hstack({
          position: 'relative',
          gap: '4',
          top: 'initial',
        }),
        styles.dialog,
      )}
    >
      <span className={styles.icon}>
        <CheckmarkFilled />
      </span>

      <div
        className={vstack({
          alignItems: FLEX_START,
          gap: '0',
          py: '2',
        })}
      >
        <p className={styles.heading}>Success Notification</p>
        <p className={styles.description}>
          This is a description with a <a href="#">link</a> in the message.
        </p>
      </div>

      <div className={styles.close}>
        <IconButton ariaLabel="Close">
          <Close />
        </IconButton>
      </div>
    </div>
  )
}

export function WarningNotification() {
  const styles = notification({
    palette: 'warning',
  })

  return (
    <div
      className={cx(
        hstack({
          position: 'relative',
          gap: '4',
          top: 'initial',
        }),
        styles.dialog,
      )}
    >
      <span className={styles.icon}>
        <WarningFilled />
      </span>

      <div
        className={vstack({
          alignItems: FLEX_START,
          gap: '0',
          py: '2',
        })}
      >
        <p className={styles.heading}>Warning Notification</p>
        <p className={styles.description}>
          This is a description with a <a href="#">link</a> in the message.
        </p>
      </div>

      <div className={styles.close}>
        <IconButton ariaLabel="Close">
          <Close />
        </IconButton>
      </div>
    </div>
  )
}

export function DangerNotification() {
  const styles = notification({
    palette: 'danger',
  })

  return (
    <div
      className={cx(
        hstack({
          position: 'relative',
          gap: '4',
          top: 'initial',
        }),
        styles.dialog,
      )}
    >
      <span className={styles.icon}>
        <ErrorFilled />
      </span>

      <div
        className={vstack({
          alignItems: FLEX_START,
          gap: '0',
          py: '2',
        })}
      >
        <p className={styles.heading}>Danger Notification</p>
        <p className={styles.description}>
          This is a description with a <a href="#">link</a> in the message.
        </p>
      </div>

      <div className={styles.close}>
        <IconButton ariaLabel="Close">
          <Close />
        </IconButton>
      </div>
    </div>
  )
}

function NotificationWrapper(props: PropsWithChildren<{}>) {
  return (
    <div
      className={css({
        position: 'relative',
        minH: '3.125rem',
        w: '30rem',
      })}
    >
      {props.children}
    </div>
  )
}

export function PalettePreview() {
  return (
    <div
      className={vstack({
        w: 'full',
      })}
    >
      <NotificationWrapper>
        <InfoNotification />
      </NotificationWrapper>

      <NotificationWrapper>
        <SuccessNotification />
      </NotificationWrapper>

      <NotificationWrapper>
        <WarningNotification />
      </NotificationWrapper>

      <NotificationWrapper>
        <DangerNotification />
      </NotificationWrapper>
    </div>
  )
}

export function OverviewPreview() {
  return (
    <div
      className={vstack({
        w: 'full',
      })}
    >
      <NotificationWrapper>
        <InfoNotification />
      </NotificationWrapper>
    </div>
  )
}
