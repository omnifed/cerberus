'use client'

import type { ElementType, ReactNode } from 'react'
import { createContext, useContext } from 'react'
import { splitProps } from '../utils/index'

export type AbstractionProps<TSlots extends string> = {
  slots?: Partial<Record<TSlots, ReactNode>>
  slotProps?: Partial<Record<TSlots, any>>
}

const AbstractionContext = createContext<{ slots: any; slotProps: any }>({
  slots: {},
  slotProps: {},
})

/**
 * createAbstraction
 * Statically pre-binds slots and slotProps to primitive layers, eliminating
 * manual prop-drilling and `asChild` boilerplate in abstractions.
 */
export function createAbstraction<
  TProps,
  TPrimitives extends Record<string, ElementType>,
>(
  primitives: TPrimitives,
  renderLogic: (
    props: TProps,
    parts: { [K in keyof TPrimitives]: ElementType },
  ) => ReactNode,
) {
  const parts = {} as { [K in keyof TPrimitives]: ElementType }

  for (const key in primitives) {
    const Primitive = primitives[key]

    parts[key] = function BoundPart(partProps: any) {
      const { slots, slotProps } = useContext(AbstractionContext)

      const userSlot = slots?.[key]
      const userSlotProps = slotProps?.[key]

      if (userSlot) {
        const { _children, ...restPartProps } = partProps
        return (
          <Primitive asChild unstyled {...userSlotProps} {...restPartProps}>
            {userSlot}
          </Primitive>
        )
      }

      return <Primitive {...userSlotProps} {...partProps} />
    }
  }

  return function Abstraction(
    props: TProps & AbstractionProps<keyof TPrimitives & string>,
  ) {
    const [abstractionProps, componentProps] = splitProps(props as any, [
      'slots',
      'slotProps',
    ])

    return (
      <AbstractionContext.Provider
        value={{
          slots: abstractionProps.slots || {},
          slotProps: abstractionProps.slotProps || {},
        }}
      >
        {renderLogic(componentProps as TProps, parts)}
      </AbstractionContext.Provider>
    )
  }
}
