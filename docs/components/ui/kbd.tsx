import { cerberus } from '@cerberus-design/react'
import { PropsWithChildren } from 'react'

export function Kbd(props: PropsWithChildren<object>) {
  return (
    <cerberus.kbd
      alignItems="center"
      bgColor="page.bg.initial"
      borderColor="page.border.initial"
      borderStyle="solid"
      borderTopWidth="1px"
      display="inline-flex"
      flexShrink="0"
      h="1.125rem"
      justifyContent="center"
      lineHeight="1rem"
      rounded="xs"
      textStyle="xs"
      whiteSpace="nowrap"
      userSelect="none"
      style={{
        borderBottomWidth: '2px',
        borderLeftWidth: '1px',
        borderRightWidth: '1px',
        borderTopWidth: '1px',
        paddingInline: '0.25rem',
        paddingBottom: '0.15rem',
      }}
    >
      {props.children}
    </cerberus.kbd>
  )
}
