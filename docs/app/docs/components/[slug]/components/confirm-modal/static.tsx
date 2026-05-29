import { NoAvatarDemo } from './avatar.demo'
import { BasicDemo } from './basic.demo'
import { DestructiveDemo } from './destructive.demo'

export const DEMOS = {
  basic: {
    id: 'confirm-modal.basic',
    preview: <BasicDemo />,
  },
  destructive: {
    id: 'confirm-modal.destructive',
    preview: <DestructiveDemo />,
  },
  avatar: {
    id: 'confirm-modal.avatar',
    preview: <NoAvatarDemo />,
  },
  meta: `import { ConfirmModal, useConfirmModal } from "@cerberus/react"`,
}
