'use client'

import { createContext, useContext, type PropsWithChildren } from 'react'
import type { SystemConfig } from '../config'

/**
 * This  module contains the Cerberus configuration context and helpers.
 * @module context/cerberus
 */

type CerberusContextValue = SystemConfig

const CerberusContext = createContext<CerberusContextValue | null>(null)

interface CerberusProviderProps {
  config: SystemConfig
}

/**
 * Cerberus configuration provider.
 * @param props.config The Cerberus configuration created with
 * `makeSystemConfig` helper.
 */
export function CerberusProvider(
  props: PropsWithChildren<CerberusProviderProps>,
) {
  return (
    <CerberusContext.Provider value={props.config}>
      {props.children}
    </CerberusContext.Provider>
  )
}

/**
 * Returns the Cerberus configuration context.
 * @returns The Cerberus configuration context.
 */
export function useCerberusContext() {
  const context = useContext(CerberusContext)
  if (!context) {
    throw new Error('useCerberus must be used within a CerberusProvider')
  }
  return context
}
