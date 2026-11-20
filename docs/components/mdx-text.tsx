import { cerberus } from '@cerberus-design/react'
import { PropsWithChildren } from 'react'

export const mdxText = {
  h1: (props: PropsWithChildren<object>) => (
    <cerberus.h1
      color="page.text.initial"
      mt="lg"
      py="lg"
      textStyle="heading-lg"
      {...props}
    />
  ),
  h2: (props: PropsWithChildren<object>) => (
    <cerberus.h2
      color="page.text.initial"
      mt="lg"
      py="lg"
      textStyle="heading-md"
      {...props}
    />
  ),
  h3: (props: PropsWithChildren<object>) => (
    <cerberus.h3
      mt="lg"
      py="lg"
      textStyle="heading-sm"
      css={{
        '& :is(a > code)': {
          backgroundColor: 'var(--shiki-background)',
          borderRadius: '4px',
          color: 'var(--shiki-token-keyword)',
          fontVariationSettings: "'slnt' -3, 'CASL' 1, 'CRSV' 0, 'MONO' 0",
          letterSpacing: 'initial!',
          paddingInline: '0.3rem',
          paddingBlock: '0.2rem',
          textStyle: 'mono-sm',
        },
      }}
      {...props}
    />
  ),
  h4: (props: PropsWithChildren<object>) => (
    <cerberus.h4 mt="md" py="md" textStyle="heading-xs" {...props} />
  ),
  h5: (props: PropsWithChildren<object>) => (
    <cerberus.h5 mt="sm" py="sm" textStyle="heading-2xs" {...props} />
  ),
  h6: (props: PropsWithChildren<object>) => (
    <cerberus.h6 mt="sm" py="sm" textStyle="heading-2xs" {...props} />
  ),

  p: (props: PropsWithChildren<object>) => (
    <cerberus.p
      color="page.text.100"
      lineHeight="165%"
      pb="lg"
      textStyle="body-md"
      css={{
        '& > code:not(.code)': {
          bgColor: 'page.surface.100',
          color: 'success.text.100',
          fontVariationSettings: "'slnt' -3, 'CASL' 1, 'CRSV' 0, 'MONO' 0",
          letterSpacing: 'initial!',
          px: 'sm',
          py: 'xs',
          textStyle: 'mono-xs',
          rounded: 'md',
        },
      }}
      {...props}
    />
  ),

  small: (props: PropsWithChildren<object>) => (
    <cerberus.small textStyle="body-xs" {...props} />
  ),

  a: (props: PropsWithChildren<object>) => (
    <cerberus.a
      display="inline-block"
      rounded="sm"
      textStyle="link"
      _hover={{
        color: 'action.navigation.hover',
        textDecoration: 'underline',
      }}
      _focusVisible={{
        boxShadow: 'none',
        outline: '3px solid',
        outlineColor: 'action.border.focus',
        outlineOffset: '2px',
      }}
      {...props}
    />
  ),
}
