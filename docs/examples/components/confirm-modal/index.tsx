import { NoAvatarDemo } from './avatar.demo'
import { BasicDemo } from './basic.demo'
import { DestructiveDemo } from './destructive.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  destructive: {
    preview: <DestructiveDemo />,
  },
  avatar: {
    preview: <NoAvatarDemo />,
  },
}
