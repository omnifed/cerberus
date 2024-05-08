import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
// import { css } from './styled-system/css'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // h1: ({ children }) => (
    //   <h1 className={css({ textStyle: 'h1' })}>{children}</h1>
    // ),
    // h2: ({ children }) => (
    //   <h2 className={css({ textStyle: 'h2' })}>{children}</h2>
    // ),
    // h3: ({ children }) => (
    //   <h3 className={css({ textStyle: 'h3' })}>{children}</h3>
    // ),
    // h4: ({ children }) => (
    //   <h4 className={css({ textStyle: 'h4' })}>{children}</h4>
    // ),
    // h5: ({ children }) => (
    //   <h5 className={css({ textStyle: 'h5' })}>{children}</h5>
    // ),
    // h6: ({ children }) => (
    //   <h6 className={css({ textStyle: 'h6' })}>{children}</h6>
    // ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
        alt={props.alt as string}
      />
    ),
    ...components,
  }
}
