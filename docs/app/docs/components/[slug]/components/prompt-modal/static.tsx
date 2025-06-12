import { PromptModal } from '@cerberus-design/react'
import {
  PromptOverviewFeature,
  DestructiveFeature,
  NonDestructiveFeature,
} from './prompt-modal-features'

export function NonDestructivePreview() {
  return (
    <PromptModal>
      <NonDestructiveFeature />
    </PromptModal>
  )
}

export function DestructivePreview() {
  return (
    <PromptModal>
      <DestructiveFeature />
    </PromptModal>
  )
}

export function OverviewPreview() {
  return (
    <PromptModal>
      <PromptOverviewFeature />
    </PromptModal>
  )
}
