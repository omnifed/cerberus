import { ConfirmModal } from '@cerberus-design/react'
import {
  ConfirmOverviewFeature,
  DestructiveFeature,
  NonDestructiveFeature,
} from './confirm-modal-features'

export function NonDestructivePreview() {
  return (
    <ConfirmModal>
      <NonDestructiveFeature />
    </ConfirmModal>
  )
}

export function DestructivePreview() {
  return (
    <ConfirmModal>
      <DestructiveFeature />
    </ConfirmModal>
  )
}

export function OverviewPreview() {
  return (
    <ConfirmModal>
      <ConfirmOverviewFeature />
    </ConfirmModal>
  )
}
