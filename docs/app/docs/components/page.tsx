import { redirect } from 'next/navigation'

export default async function ComponentsPage() {
  'use cache'
  redirect('/docs/components/overview')
}
