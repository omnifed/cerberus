export const authors: Record<Author, Profile> = {
  caseyBaggz: {
    name: 'Casey Baggz',
    avatar: 'https://avatars.githubusercontent.com/u/4819738?v=4',
    role: 'Cerberus Admin',
  },
}

// Types

export type Author = 'caseyBaggz'

export type Profile = {
  name: string
  avatar: string
  role: string
}
