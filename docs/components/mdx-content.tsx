import * as React from 'react'
import * as runtime from 'react/jsx-runtime'
import { sharedComponents } from './shared-mdx'

const mdxCache = new Map<string, React.ComponentType<any>>()

function getMDXComponent(code: string): React.ComponentType<any> {
  if (mdxCache.has(code)) {
    return mdxCache.get(code)!
  }

  // Compile the string into a React component
  const fn = new Function(code)
  const Component = fn({ ...runtime }).default

  // Save it to the global cache
  mdxCache.set(code, Component)
  return Component
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
}

export function MDXContent({ code, components, ...props }: MDXProps) {
  const Component = getMDXComponent(code)
  // Let the React Compiler automatically memoize this object.
  const mergedComponents = { ...sharedComponents, ...components }
  // oxlint-disable-next-line react/static-components
  return <Component components={mergedComponents} {...props} />
}
