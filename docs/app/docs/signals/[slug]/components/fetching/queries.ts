// Queries

import { createQuery } from '@cerberus-design/signals'
import { User, api } from './db'

export const queryUser = createQuery(getUser, 'queryUser')

// API

async function getUser(id: string): Promise<User | null> {
  return await api.getUser(id)
}
