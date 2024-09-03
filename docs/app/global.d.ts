declare module 'color-space'
declare module 'react-syntax-highlighter'
declare module 'react-syntax-highlighter/dist/esm/styles/hljs'

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export const frontmatter: Record<string, string>
  export default MDXComponent
}

// Map JSR to pnPm workspace for our global lint:ts script
declare module '@cerberus/styled-system/css' {
  export * from '@cerberus-design/styled-system/css'
}

declare module '@cerberus/styled-system/recipes' {
  export * from '@cerberus-design/styled-system/recipes'
}

declare module '@cerberus/styled-system/types' {
  export * from '@cerberus-design/styled-system/types'
}

declare module '@cerberus/styled-system/utils' {
  export * from '@cerberus-design/styled-system/utils'
}

declare module '@cerberus/styled-system/patterns' {
  export * from '@cerberus-design/styled-system/patterns'
}
