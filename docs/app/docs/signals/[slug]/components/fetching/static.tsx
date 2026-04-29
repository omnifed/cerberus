import { BasicDemo } from './basic.demo'
import { MutationDemo } from './mutation.demo'
import { NoOptmisticDemo } from './noOptimistic.demo'
import { DataDemo } from './data.demo'
import { StatusDemo } from './status.demo'
import { StreamingDemo } from './streaming.demo'

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
  noOptimistic: {
    id: 'fetching.noOptimistic',
    preview: <NoOptmisticDemo />,
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
  streaming: {
    id: 'fetching.streaming',
    preview: <StreamingDemo />,
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
  server: {
    id: 'fetching.server',
    context: 'signals',
  },
  client: {
    id: 'fetching.client',
    context: 'signals',
  },

  queryMeta: `import { createQuery, useQuery } from '@cerberus/signals'`,
  mutationMeta: `import { createMutation, useMutation } from '@cerberus/signals'`,
  useQueryMeta: `import { useQuery } from '@cerberus/signals'`,
  useMutationMeta: `import { useMutation } from '@cerberus/signals'`,

  queryUsageMeta: `const data = useQuery(myQuery(props.id))`,
  mutationUsageMeta: `const { mutate, ...state } = useMutation(myMutation)`,

  optimisticMeta: `const updateUser = createMutation((payload: User) => api.updateUser(payload), {
    // Optimistically update the UI instantly
    onMutate: (vars) => {
      setQueryData<User>(getUser.key(vars.id), (prev) => {
        if (!prev) return { id: vars.id, name: vars.name }
        return { ...prev, name: vars.name }
      })
    },
  })`,
}
