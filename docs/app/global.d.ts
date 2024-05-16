declare module 'color-space'

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export const frontmatter: Record<string, string>
  export default MDXComponent
}
