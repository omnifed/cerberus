'use client'

import {
  NavMenu,
  NavMenuLink,
  NavMenuList,
  NavMenuTrigger,
} from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { circle, hstack } from '@cerberus/styled-system/patterns'
import { forwardRef, type ForwardedRef, type PropsWithChildren } from 'react'
import Link from 'next/link'
import { ACTION_NAV_HOVER, ACTION_NAV_INITIAL } from '@/app/utils/const'
import { IconButton } from '../../icon-button/components/temp-icon-button'

export function BasicNavMenuPreview() {
  return (
    <NavMenu>
      <NavMenuTrigger controls="basic:nav">Features</NavMenuTrigger>
      <NavMenuList id="basic:nav">
        <NavMenuLink>Something</NavMenuLink>
      </NavMenuList>
    </NavMenu>
  )
}

export function CustomNavMenuPreview() {
  return (
    <NavMenu>
      <NavMenuTrigger as={IconButton} controls="basic:nav" />
      <NavMenuList id="basic:nav">
        <NavMenuLink>Something</NavMenuLink>
      </NavMenuList>
    </NavMenu>
  )
}

export function PositionNavMenuPreview() {
  return (
    <NavMenu>
      <NavMenuTrigger controls="basic:nav">Features</NavMenuTrigger>
      <NavMenuList id="basic:nav" position="top">
        <NavMenuLink>Top</NavMenuLink>
      </NavMenuList>
      <NavMenuList id="basic:nav" position="bottom">
        <NavMenuLink>Bottom</NavMenuLink>
      </NavMenuList>
      <NavMenuList id="basic:nav" position="left">
        <NavMenuLink>Left</NavMenuLink>
      </NavMenuList>
      <NavMenuList id="basic:nav" position="right">
        <NavMenuLink>Right</NavMenuLink>
      </NavMenuList>
    </NavMenu>
  )
}

function MPTriggerEl(
  props: PropsWithChildren,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      className={hstack({
        bgColor: 'neutral.surface.100',
        border: '2px solid',
        borderColor: 'neutral.border.200',
        color: ACTION_NAV_INITIAL,
        p: '4',
        rounded: 'md',
        transitionProperty: 'background-color,color',
        transitionDuration: '150ms',
        transitionTimingFunction: 'ease-in-out',
        _hover: {
          bgColor: 'action.bg.100.hover',
          color: ACTION_NAV_HOVER,
        },
      })}
      {...props}
      ref={ref}
    >
      {props.children}
    </button>
  )
}
const MPTrigger = forwardRef(MPTriggerEl)

function MPLink(props: PropsWithChildren) {
  return (
    <Link
      className={css({
        color: ACTION_NAV_INITIAL,
        cursor: 'pointer',
        textStyle: 'link',
        _hover: {
          color: ACTION_NAV_HOVER,
        },
      })}
      href="#customizing"
    >
      {props.children}
    </Link>
  )
}

function MPFeatLink(props: PropsWithChildren) {
  return (
    <Link
      className={hstack({
        color: ACTION_NAV_INITIAL,
        border: '1px solid',
        borderColor: 'neutral.border.100',
        display: 'flex !important',
        mb: '4',
        pxi: '4',
        py: '2',
        rounded: 'lg !important',
        textDecoration: 'none !important',
        transitionProperty: 'background-color,color',
        transitionDuration: '150ms',
        transitionTimingFunction: 'ease-in-out',
        _hover: {
          color: ACTION_NAV_HOVER,
          bgColor: 'action.bg.100.hover',
        },
      })}
      href="#customizing"
    >
      {props.children}
    </Link>
  )
}

export function FullyCustomNavMenuPreview() {
  return (
    <div data-theme="cerberus" data-color-mode="light">
      <NavMenu>
        <NavMenuTrigger as={MPTrigger} controls="basic:nav">
          <span
            className={circle({
              bgColor: 'neutral.bg.hover',
              size: '8',
            })}
          />
          Mission Partner
        </NavMenuTrigger>
        <NavMenuList
          id="basic:nav"
          className={css({
            border: '2px solid',
            borderColor: 'neutral.border.100',
            w: '21rem',
          })}
        >
          <li>
            <p
              className={css({
                color: 'neutral.text.200',
                pb: '0 !important',
                textStyle: 'body-sm',
              })}
            >
              Other Mission Partners
            </p>
          </li>
          <NavMenuLink as={MPFeatLink} href="#customizing">
            <span
              className={circle({
                bgColor: 'neutral.bg.hover',
                size: '4',
              })}
            />
            Mission Partner
          </NavMenuLink>
          <NavMenuLink href="#customizing" as={MPLink}>
            View All
          </NavMenuLink>
        </NavMenuList>
      </NavMenu>
    </div>
  )
}
