'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import type { BuilderResult } from '../components/code-builder/helpers'

function getInitialAPIValues(api: Record<string, BuilderResult>, key: string) {
  const result = api[key]
  switch (result.type) {
    case 'enum':
      return result.value[0]
    case 'text':
      return result.value
    case 'boolean':
      return false
  }
}

interface CodeBuilderContextValue {
  selectedProps: Record<string, boolean | string>
  setSelectedProps: (key: string, value: boolean | string) => void
}

const CodeBuilderContext = createContext<CodeBuilderContextValue | null>(null)

interface CodeBuilderProviderProps {
  api: Record<string, BuilderResult>
}

export default function CodeBuilderProvider(
  props: PropsWithChildren<CodeBuilderProviderProps>,
) {
  const [selectedProps, setSelectedProps] = useState<
    Record<string, boolean | string>
  >(() => {
    return Object.keys(props.api).reduce(
      (acc, key) => ({ ...acc, [key]: getInitialAPIValues(props.api, key) }),
      {},
    )
  })

  const handleChange = useCallback(
    (key: string, value: boolean | string) => {
      setSelectedProps((prev) => ({
        ...prev,
        [key]: value,
      }))
    },
    [setSelectedProps],
  )

  const value = useMemo(
    () => ({ selectedProps, setSelectedProps: handleChange }),
    [selectedProps, handleChange],
  )

  return (
    <CodeBuilderContext.Provider value={value}>
      {props.children}
    </CodeBuilderContext.Provider>
  )
}

export function useCodeBuilder() {
  const context = useContext(CodeBuilderContext)
  if (!context) {
    throw new Error('useCodeBuilder must be used within a CodeBuilderProvider')
  }
  return context
}
