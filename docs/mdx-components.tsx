import { css, cx } from 'styled-system/css'
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
            my: 6,
            textStyle: 'heading-lg',
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
            my: 6,
            textStyle: 'heading-md',
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
            my: 6,
            textStyle: 'heading-md',
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
            my: 6,
            textStyle: 'heading-md',
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
            my: 6,
            textStyle: 'heading-sm',
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
            my: 6,
            textStyle: 'heading-xs',
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
          '& > code:not(.code)': {
            bgColor: 'page.surface.100',
            color: 'success.text.100',
            pxi: 'sm',
            py: 'sm',
            textStyle: 'mono-xs',
            rounded: 'md',
          },
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
          '& > code:not(.code)': {
            bgColor: 'page.surface.100',
            color: 'success.text.100',
            pxi: 'sm',
            py: 'sm',
            textStyle: 'mono-xs',
            rounded: 'md',
          },
        })}
        {...props}
      />
    ),
    ol: (props) => (
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
    ul: (props) => (
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
    ...components,
  }
}
