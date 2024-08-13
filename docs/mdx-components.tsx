import { css, cx } from '@cerberus/styled-system/css'
import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import { PAGE_BORDER_100 } from './app/utils/const'

const headlineStyles = css({
  color: 'page.text.initial',
  py: '2',
})

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className={cx(
          css({
            textStyle: 'h1',
          }),
          headlineStyles,
        )}
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className={cx(
          css({
            textStyle: 'h2',
          }),
          headlineStyles,
        )}
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className={cx(
          css({
            textStyle: 'h3',
          }),
          headlineStyles,
        )}
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className={cx(
          css({
            textStyle: 'h4',
          }),
          headlineStyles,
        )}
        {...props}
      />
    ),
    h5: (props) => (
      <h5
        className={cx(
          css({
            textStyle: 'h5',
          }),
          headlineStyles,
        )}
        {...props}
      />
    ),
    h6: (props) => (
      <h6
        className={cx(
          css({
            textStyle: 'h6',
          }),
          headlineStyles,
        )}
        {...props}
      />
    ),
    p: (props) => (
      <p
        className={css({
          color: 'page.text.100',
          lineHeight: '165%',
          pb: '6',
          textStyle: 'body-md',
          textWrap: 'pretty',
        })}
        {...props}
      />
    ),
    small: (props) => (
      <small
        className={css({
          textStyle: 'body-xs',
        })}
        {...props}
      />
    ),
    a: (props) => (
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
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
        alt={props.alt as string}
      />
    ),
    table: (props) => (
      <div
        className={css({
          border: '1px solid',
          borderColor: PAGE_BORDER_100,
          borderRadius: '1.5em',
          overflow: 'hidden',
          my: '6',
        })}
      >
        <table
          className={css({
            borderCollapse: 'collapse',
            borderSpacing: '0',
            width: '100%',
          })}
          {...props}
        />
      </div>
    ),
    thead: (props) => (
      <thead
        className={css({
          _first: {
            borderTop: 'none',
          },
        })}
        {...props}
      />
    ),
    tr: (props) => (
      <tr
        className={css({
          _first: {
            '& th': {
              borderTop: 'none',
            },
          },
        })}
        {...props}
      />
    ),
    th: (props) => (
      <th
        className={css({
          borderRight: '1px solid',
          borderColor: PAGE_BORDER_100,
          bgColor: 'page.surface.100',
          textAlign: 'left',
          pxi: '8',
          py: '6',
          verticalAlign: 'middle',
          _last: {
            borderRight: 'none',
          },
        })}
        {...props}
      />
    ),
    td: (props) => (
      <td
        className={css({
          borderTop: '1px solid',
          borderRight: '1px solid',
          borderColor: PAGE_BORDER_100,
          pxi: '8',
          py: '6',
          _last: {
            borderRight: 'none',
          },
        })}
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className={css({
          listStyleType: 'decimal',
          listStylePosition: 'inside',
          '& li': {
            pb: '2',
          },
        })}
        {...props}
      />
    ),
    ...components,
  }
}
