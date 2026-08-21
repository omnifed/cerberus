import { css } from '@/styled-system/css'
import { PropsWithChildren } from 'react'

export const mdxLists = {
  ol: (props: PropsWithChildren<object>) => (
    <ol
      className={css({
        color: 'page.text.100',
        listStyleType: 'decimal',
        listStylePosition: 'inside',
        paddingBlockEnd: 'lg',
        '& li': {
          paddingBlockEnd: 'sm',
        },
      })}
      {...props}
    />
  ),
  ul: (props: PropsWithChildren<object>) => (
    <ul
      className={css({
        color: 'page.text.100',
        listStyleType: 'disc',
        pl: 'lg',
        pb: 'lg',
        _marker: {
          color: 'page.text.100/75',
        },
        '& li': {
          pb: 'sm',
          '& > p': {
            pb: 'initial',
          },
        },
      })}
      {...props}
    />
  ),
}
