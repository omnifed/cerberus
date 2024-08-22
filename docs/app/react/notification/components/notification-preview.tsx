'use client'

import {
  Button,
  Notification,
  NotificationCenter,
  NotificationDescription,
  NotificationHeading,
  useNotificationCenter,
  type NotifyOptions,
} from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { vstack } from '@cerberus/styled-system/patterns'
import { useCallback, type PropsWithChildren } from 'react'
import messagesData from './messages.data.json'

export function InfoNotification() {
  return (
    <Notification id="info:1" open>
      <NotificationHeading>Info Notification</NotificationHeading>
      <NotificationDescription>
        This is a description with a <a href="#">link</a> in the message.
      </NotificationDescription>
    </Notification>
  )
}

export function SuccessNotification() {
  const palette = 'success'
  return (
    <Notification id="success:1" open palette={palette}>
      <NotificationHeading palette={palette}>
        Info Notification
      </NotificationHeading>
      <NotificationDescription palette={palette}>
        This is a description with a <a href="#">link</a> in the message.
      </NotificationDescription>
    </Notification>
  )
}

export function WarningNotification() {
  const palette = 'warning'
  return (
    <Notification id="warning:1" open palette={palette}>
      <NotificationHeading palette={palette}>
        Warning Notification
      </NotificationHeading>
      <NotificationDescription palette={palette}>
        This is a description with a <a href="#">link</a> in the message.
      </NotificationDescription>
    </Notification>
  )
}

export function DangerNotification() {
  const palette = 'danger'
  return (
    <Notification id="danger:1" open palette={palette}>
      <NotificationHeading palette={palette}>
        Danger Notification
      </NotificationHeading>
      <NotificationDescription palette={palette}>
        This is a description with a <a href="#">link</a> in the message.
      </NotificationDescription>
    </Notification>
  )
}

export function CustomNotification() {
  return (
    <Notification
      className={css({
        bgColor: 'black',
      })}
      id="forever"
      open
    >
      <NotificationHeading
        className={css({
          color: 'yellow',
          fontWeight: '900',
        })}
      >
        Wu-Tang Clan
      </NotificationHeading>
      <NotificationDescription
        className={css({
          color: 'yellow.100',
          textStyle: 'body-sm',
        })}
      >
        It's Method Man, for short Mr. Meth
      </NotificationDescription>
    </Notification>
  )
}

// Overview

function NotificationWrapper(props: PropsWithChildren<{}>) {
  return (
    <div
      className={css({
        position: 'relative',
        minH: '3.125rem',
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

function Feature() {
  const { notify } = useNotificationCenter()

  const handleClick = useCallback(() => {
    const messages = messagesData as NotifyOptions[]
    const message = messages[Math.floor(Math.random() * messages.length)]
    notify(message)
  }, [notify])

  return <Button onClick={handleClick}>Trigger notification</Button>
}

export function OverviewPreview() {
  return (
    <NotificationCenter>
      <Feature />
    </NotificationCenter>
  )
}
