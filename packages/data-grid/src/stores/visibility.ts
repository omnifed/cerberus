import { Accessor, createSignal, Setter } from '@cerberus-design/signals'

export type VisibilityStore = {
  showManage: Accessor<boolean>
  // Actions
  setShowManage: Setter<boolean>
}

export function createVisibilityStore(): VisibilityStore {
  const [showManage, setShowManage] = createSignal<boolean>(false)

  return {
    showManage,

    setShowManage,
  }
}
