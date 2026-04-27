import { BasicDemo } from './basic.demo'
import { MutationDemo } from './mutation.demo'
import { DataDemo } from './data.demo'
import { StatusDemo } from './status.demo'

export const DEMOS = {
  basic: {
    id: 'fetching.basic',
    preview: <BasicDemo />,
    context: 'signals',
  },
  mutation: {
    id: 'fetching.mutation',
    preview: <MutationDemo />,
    context: 'signals',
  },
  data: {
    id: 'fetching.data',
    preview: <DataDemo />,
    context: 'signals',
  },
  status: {
    id: 'fetching.status',
    preview: <StatusDemo />,
    context: 'signals',
  },
  without: {
    id: 'fetching.without',
    context: 'signals',
  },
  sub: {
    id: 'fetching.sub',
    context: 'signals',
  },

  queryMeta: `import { createQuery, useQuery } from '@cerberus/signals'`,
  mutationMeta: `import { createMutation, useMutation } from '@cerberus/signals'`,
  useQueryMeta: `import { useQuery } from '@cerberus/signals'`,
  useMutationMeta: `import { useMutation } from '@cerberus/signals'`,

  queryUsageMeta: `const data = useQuery(myQuery(props.id))`,
  mutationUsageMeta: `const { mutate, ...state } = useMutation(myMutation)`,
}
