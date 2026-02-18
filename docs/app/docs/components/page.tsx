import { redirect } from 'next/navigation'

export default function ComponentsPage() {
  'use cache'
  redirect('/docs/components/overview')
}
