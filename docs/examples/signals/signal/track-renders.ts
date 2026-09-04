import { useEffect, useRef } from 'react'

export function useTrackRenders(store: { onUnmount: () => void }) {
  const trueRenderCount = useRef(0)

  useEffect(() => {
    trueRenderCount.current += 1
  })

  useEffect(() => {
    return () => store.onUnmount()
  }, [store])
}
