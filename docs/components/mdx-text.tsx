import { css } from '@/styled-system/css'
import { Text } from '@cerberus-design/react'
import { PropsWithChildren } from 'react'

export const mdxText = {
  h1: (props: PropsWithChildren<object>) => (
    <Text
      as="h1"
      color="page.text.initial"
      my="lg"
      py="lg"
      textStyle="heading-lg"
      {...props}
    />
  ),
  h2: (props: PropsWithChildren<object>) => (
    <Text
      as="h2"
      color="page.text.initial"
      my="lg"
      py="lg"
      textStyle="heading-md"
      {...props}
    />
  ),
  h3: (props: PropsWithChildren<object>) => (
    <Text
      as="h3"
      my="5"
      textStyle="heading-sm"
      css={{
        '& :is(a > code)': {
          backgroundColor: 'var(--shiki-background)',
          borderRadius: '4px',
          color: 'var(--shiki-token-keyword)',
          letterSpacing: '0.01em',
          paddingInline: '0.3rem',
          paddingBlock: '0.2rem',
        },
      }}
      {...props}
    />
  ),
  h4: (props: PropsWithChildren<object>) => (
    <Text as="h4" my="md" textStyle="heading-xs" {...props} />
  ),
  h5: (props: PropsWithChildren<object>) => (
    <Text as="h5" my="sm" textStyle="heading-2xs" {...props} />
  ),
  h6: (props: PropsWithChildren<object>) => (
    <Text as="h6" my="sm" textStyle="heading-2xs" {...props} />
  ),

  p: (props: PropsWithChildren<object>) => (
    <Text
      color="page.text.100"
      lineHeight="165%"
      pb="lg"
      textStyle="body-md"
      textWrap="pretty"
      css={{
        '& > code:not(.code)': {
          bgColor: 'page.surface.100',
          color: 'success.text.100',
          pxi: 'sm',
          py: 'sm',
          textStyle: 'mono-xs',
          rounded: 'md',
        },
      }}
      {...props}
    />
  ),

  small: (props: PropsWithChildren<object>) => (
    <Text as="small" textStyle="body-xs" {...props} />
  ),

  a: (props: PropsWithChildren<object>) => (
    <a
      className={css({
        display: 'inline-block',
        rounded: 'sm',
        textStyle: 'link',
        _hover: {
          color: 'action.navigation.hover',
          textDecoration: 'underline',
        },
        _focusVisible: {
          boxShadow: 'none',
          outline: '3px solid',
          outlineColor: 'action.border.focus',
          outlineOffset: '2px',
        },
      })}
      {...props}
    />
  ),
}
