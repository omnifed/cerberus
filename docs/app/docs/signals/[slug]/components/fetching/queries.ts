// Queries

import { createQuery } from '@cerberus-design/signals'

export const queryUser = createQuery(getUser, 'queryUser')

// API

async function getUser(id: string): Promise<User> {
  return await api.getUser(id)
}

// Fake DB

export type User = {
  id: string
  name: string
}

const users = new Map<User['id'], User>()
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const api = {
  getUser: async (id: string): Promise<User> => {
    await delay(800)
    const user = users.get(id)
    if (user) return user
    const newUser = await getUser(id)
    users.set(newUser.id, newUser)
    return newUser
  },
}
