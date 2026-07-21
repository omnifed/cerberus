import { css, cx } from 'styled-system/css'
import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import { PAGE_BORDER_100 } from './app/utils/const'
import { divider } from './styled-system/patterns'

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
            my: 'lg',
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
            my: 'lg',
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
            my: 5,
            textStyle: 'heading-sm',
            '& :is(a > code)': {
              backgroundColor: 'var(--shiki-background)',
              borderRadius: '4px',
              color: 'var(--shiki-token-keyword)',
              letterSpacing: '0.01em',
              paddingInline: '0.3rem',
              paddingBlock: '0.2rem',
            },
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
            my: 'md',
            textStyle: 'heading-xs',
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
            my: 'sm',
            textStyle: 'heading-2xs',
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
            my: 'sm',
            textStyle: 'heading-2xs',
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
          pb: 'lg',
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
    td: (props) => (
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
          borderColor: PAGE_BORDER_100,
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
    blockquote: (props) => (
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
    hr: (props) => (
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
    ...components,
  }
}
