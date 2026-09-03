import { NoteAdmonition, WarningAdmonition } from '@/app/components/Admonition'
import BashTabs from '@/app/components/bash-tabs'
import { css } from '@/styled-system/css'
import { divider } from '@/styled-system/patterns'
import Image, { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import { CodeSnippet } from './code-snippet'
import { Example } from './example/index'
import { lazyMdxComponents } from './lazy-mdx-components'
import { mdxCode } from './mdx-code'
import { mdxLists } from './mdx-lists'
import { mdxTable } from './mdx-table'
import { mdxText } from './mdx-text'

export const sharedComponents = {
  BashTabs,
  Example,
  NoteAdmonition,
  WarningAdmonition,
  CodeSnippet,

  ...lazyMdxComponents,

  // Next
  Image,

  // markdown
  ...mdxText,
  ...mdxTable,
  ...mdxLists,
  ...mdxCode,

  img: (props: PropsWithChildren<ImageProps>) => (
    <Image
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      {...(props as ImageProps)}
      alt={props.alt as string}
    />
  ),

  blockquote: (props: PropsWithChildren<object>) => (
    <blockquote
      className={css({
        bgColor: 'page.surface.100',
        color: 'page.text.100',
        mb: 'lg',
        px: 'md',
        py: 'md',
        borderLeft: '4px solid',
        borderColor: 'page.text.100/75',
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px',
        '& :is(p)': {
          pb: 'initial',
        },
      })}
      {...props}
    />
  ),
  hr: (props: PropsWithChildren<object>) => (
    <hr
      className={divider({
        color: 'page.border.initial',
        orientation: 'horizontal',
        mb: '2xl',
        mt: 'sm',
        thickness: '0.3px',
      })}
      {...props}
    />
  ),
}
