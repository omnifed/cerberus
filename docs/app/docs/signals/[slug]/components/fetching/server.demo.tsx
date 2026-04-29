// app/users/[id]/page.tsx (Server Component)

import { UserProfile } from './client.demo'
import { queryUser } from './queries'

interface Props {
  params: Promise<{ id: string }>
}

export default async function UserPage({ params }: Props) {
  const { id } = await params
  // Bypass the reactive cache and execute the raw fetcher directly.
  // This is completely memory-safe for Node.js environments.
  const initialUserData = await queryUser.fetcher(id)

  return (
    <main>
      {/* 2. Pass the fetched data to the Client Component */}
      <UserProfile id={id} initialData={initialUserData} />
    </main>
  )
}
