import { Group } from '../group/index'
import { Text } from '../text/index'
import { PaginationProps } from './pagination'
import { PaginationContextDetails } from './primitives'
import { NextTrigger, PrevTrigger } from './triggers'

interface CompactTextProps extends PaginationContextDetails {
  layout: PaginationProps['layout']
}

export function CompactText(props: CompactTextProps) {
  const { layout, ...pagination } = props

  return (
    <Group layout={layout}>
      <PrevTrigger layout={layout} />

      <Text alignSelf="center" textAlign="center" textStyle="label-sm">
        {pagination.page} of {pagination.totalPages}
      </Text>

      <NextTrigger layout={layout} />
    </Group>
  )
}
