import { css } from '@/styled-system/css'
import { PropsWithChildren } from 'react'

export const mdxCode = {
  // rehype-pretty-code wraps pre in a figure
  figure: (props: PropsWithChildren<object>) => (
    <figure
      data-rehype-pretty-code-figure
      className={css({
        border: '1px solid',
        borderColor: 'page.border.initial/30',
        pos: 'relative',
        overflow: 'hidden',
        rounded: 'lg',
      })}
      {...props}
    >
      {props.children}
    </figure>
  ),

  pre: (props: PropsWithChildren<object>) => (
    <pre className="shiki css-variables" {...props} />
  ),
}
