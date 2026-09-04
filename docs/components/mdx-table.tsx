import { css } from '@/styled-system/css'
import { Box } from '@/styled-system/jsx'
import { PropsWithChildren } from 'react'

export const mdxTable = {
  table: (props: PropsWithChildren<object>) => (
    <Box
      border="1px solid"
      borderColor="page.border.100"
      borderRadius="1.5em"
      overflow="hidden"
      my="lg"
    >
      <table
        className={css({
          borderCollapse: 'collapse',
          borderSpacing: '0',
          width: '100%',
        })}
        {...props}
      />
    </Box>
  ),
  thead: (props: PropsWithChildren<object>) => (
    <thead
      className={css({
        _first: {
          borderTop: 'none',
        },
      })}
      {...props}
    />
  ),
  th: (props: PropsWithChildren<object>) => (
    <th
      className={css({
        borderRight: '1px solid',
        borderColor: 'page.border.100',
        bgColor: 'page.surface.100/70',
        textAlign: 'left',
        px: 'md',
        py: 'lg',
        verticalAlign: 'middle',
        _last: {
          borderRight: 'none',
        },
      })}
      {...props}
    />
  ),
  td: (props: PropsWithChildren<object>) => (
    <td
      className={css({
        backdropFilter: 'auto',
        backdropBlur: '16px',
        backdropSaturate: '180%',
        boxShadow:
          '0 4px 30px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        bgColor: 'page.surface.initial/20',
        borderTop: '1px solid',
        borderRight: '1px solid',
        borderColor: 'page.border.100',
        px: 'md',
        py: 'lg',
        textStyle: 'body-sm',
        _last: {
          borderRight: 'none',
        },
        '& > code:not(.code)': {
          backgroundColor: 'var(--shiki-background)',
          borderRadius: '4px',
          color: 'var(--shiki-token-keyword)',
          letterSpacing: '0.01em',
          paddingInline: '0.3rem',
          paddingBlock: '0.2rem',
          fontSize: '0.75rem',
        },
      })}
      style={{
        backdropFilter: 'var(--backdrop-blur) var(--backdrop-saturate)',
      }}
      {...props}
    />
  ),
}
