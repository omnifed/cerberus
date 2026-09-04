import { BasicDemo } from './basic.demo'
import { MutationDemo } from './mutation.demo'
import { NoOptmisticDemo } from './noOptimistic.demo'
import { DataDemo } from './data.demo'
import { StreamingDemo } from './streaming.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  mutation: {
    preview: <MutationDemo />,
  },
  noOptimistic: {
    preview: <NoOptmisticDemo />,
  },
  data: {
    preview: <DataDemo />,
  },
  streaming: {
    preview: <StreamingDemo />,
  },
  without: {
    preview: null,
  },
  sub: {
    preview: null,
  },
  server: {
    preview: null,
  },
  client: {
    preview: null,
  },
}
