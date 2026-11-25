export type RealmId = 'elysium' | 'oceanus' | 'acheron' | 'cerberus'

export interface Realm {
  id: RealmId
  depth: string
  name: string
  area: string
  packages: string
}

/**
 * The ecosystem, top to bottom. Each realm renders in the Cerberus theme it is
 * named after, so its hue always comes from that theme's own tokens.
 */
export const REALMS: Realm[] = [
  {
    id: 'elysium',
    depth: 'Depth 01',
    name: 'Elysium',
    area: 'Design',
    packages: 'Figma library · @cerberus/figma',
  },
  {
    id: 'oceanus',
    depth: 'Depth 02',
    name: 'Oceanus',
    area: 'Foundation',
    packages: 'Tokens · panda-preset · 4 themes',
  },
  {
    id: 'acheron',
    depth: 'Depth 03',
    name: 'Acheron',
    area: 'Build',
    packages: 'react · data-grid · signals',
  },
  {
    id: 'cerberus',
    depth: 'Depth 04',
    name: 'Cerberus',
    area: 'Agents at the gate',
    packages: 'llms.txt · skills · MCP',
  },
]

export const FAR_SHORE = {
  id: 'far-shore',
  depth: 'Depth ∞',
  name: 'Far shore',
  area: 'Designer → production',
  packages: 'In progress',
} as const
