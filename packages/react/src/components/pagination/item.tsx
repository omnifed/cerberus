import { PropsWithChildren } from 'react'
import { Button } from '../button/index'

export function PaginationItem(props: PropsWithChildren) {
  return <Button shape="default" usage="outlined-subtle" {...props} />
}
