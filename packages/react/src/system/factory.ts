import { ark } from '@ark-ui/react/factory'
import { createCerberusPrimitive } from './index'
import type { ComponentType } from 'react'

function cerberusFactory<T extends Record<string, unknown>>(
  component: keyof typeof ark,
  defaultProps?: T,
) {
  const { withNoRecipe } = createCerberusPrimitive()
  const arkComponent = ark[component] as ComponentType

  if (arkComponent) {
    return withNoRecipe(arkComponent, { defaultProps: defaultProps ?? {} })
  }

  throw new Error(
    `Component "${String(component)}" is not a valid Cerberus component. Please check the component name.`,
  )
}

const cache = new Map()

// Create a proxy that handles both function calls and property access
export const cerberusFactoryProxy = new Proxy(cerberusFactory, {
  apply(target, thisArg, argArray) {
    // Handle function calls like cerberus('button')
    // @ts-expect-error: Ignore type error for dynamic property access
    return target.apply(thisArg, argArray)
  },
  get(_target, el: keyof typeof ark) {
    // Handle property access like cerberus.button
    if (!cache.has(el)) {
      cache.set(el, cerberusFactory(el))
    }
    return cache.get(el) as ReturnType<typeof cerberusFactory>
  },
})
