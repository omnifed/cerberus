'use client'

import {
  createContext,
  useContext,
  useMemo,
  type PropsWithChildren,
} from 'react'
import { makeSystemConfig, type SystemConfig } from '../config'

/**
 * This  module contains the Cerberus configuration context and helpers.
 * @module context/cerberus
 */

type CerberusContextValue = SystemConfig

const CerberusContext = createContext<CerberusContextValue | null>(null)

interface CerberusProviderProps {
  config?: SystemConfig
}

/**
 * Cerberus configuration provider.
 * @param props.config The Cerberus configuration created with
 * `makeSystemConfig` helper.
 */
export function CerberusProvider(
  props: PropsWithChildren<CerberusProviderProps>,
) {
  const value = useMemo(() => {
    return props.config || makeSystemConfig()
  }, [props.config])

  return (
    <CerberusContext.Provider value={value}>
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
