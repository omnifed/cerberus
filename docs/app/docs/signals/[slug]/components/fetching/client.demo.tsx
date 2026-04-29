'use client'

import { useQuery } from '@cerberus-design/signals'
import { queryUser, type User } from './queries'

interface Props {
  id: string
  initialData: User
}

export function UserProfile(props: Props) {
  // 1. Cerberus sees `initialData`, instantly seeds the $O(1) Map,
  // and mounts the component with zero loading spinners or network waterfalls.
  const user = useQuery(queryUser(props.id), { initialData: props.initialData })

  return <h1>{user.name}</h1>
}
