import { Agents } from '@/components/home/agents'
import { Choreography } from '@/components/home/choreography'
import { Design } from '@/components/home/design'
import { HomeExperience } from '@/components/home/experience'
import { FinalCall } from '@/components/home/final-call'
import { Hero } from '@/components/home/hero'
import { Hud, type HudItem } from '@/components/home/hud'
import { Ledger } from '@/components/home/ledger'
import { Problem } from '@/components/home/problem'
import { Ship } from '@/components/home/ship'
import { Signals } from '@/components/home/signals'
import { Tokens } from '@/components/home/tokens'
import { Workspace } from '@/components/home/workspace'
import { SiteFooter } from '@/components/site-footer'
import { getPublicUrl } from '@/lib/public-url'
import { version } from '@cerberus-design/react/package.json'
import type { Metadata } from 'next'

const DESCRIPTION =
  'Cerberus is the open-source ecosystem where designers prototype, developers ship production code, and agents work alongside both: React components, design tokens, themes, a Data Grid, Signals, and docs written for agents.'

export const metadata: Metadata = {
  title: {
    absolute: 'Cerberus: one workflow for humans and agents to ship product',
  },
  description: DESCRIPTION,
  // Agents that land here can find the plain-text map of the docs.
  alternates: { types: { 'text/plain': '/llms.txt' } },
}

const HUD: HudItem[] = [
  { id: 'problem', label: 'The problem' },
  { id: 'agents', label: 'Agents first' },
  { id: 'design', label: 'Design anywhere' },
  { id: 'tokens', label: 'One language' },
  { id: 'signals', label: 'Signals' },
  { id: 'ship', label: 'Ship' },
  { id: 'workspace', label: 'What’s next' },
  { id: 'install', label: 'Install' },
  { id: 'start', label: 'Start' },
]

function StructuredData() {
  const url = getPublicUrl()
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: 'Cerberus',
    description: DESCRIPTION,
    url,
    codeRepository: 'https://github.com/omnifed/cerberus',
    programmingLanguage: ['TypeScript', 'React'],
    version,
    author: {
      '@type': 'Organization',
      name: 'Omnifederal, LLC',
      url: 'https://omnifederal.com',
    },
    isAccessibleForFree: true,
  }
  return (
    <script
      type="application/ld+json"
      // Static, server-built JSON with no user input.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}

export default function Home() {
  return (
    <HomeExperience>
      <StructuredData />
      <Hero />
      <Problem />
      <Agents />
      <Design />
      <Tokens />
      <Signals />
      <Ship />
      <Workspace />
      <Ledger />
      <FinalCall />
      <SiteFooter />
      <Hud items={HUD} />
      <Choreography />
    </HomeExperience>
  )
}
