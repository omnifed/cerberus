export type User = {
  id: string
  name: string
}

const users = new Map<User['id'], User>()
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const api = {
  getUser: async (id: User['id']): Promise<User | null> => {
    await delay(800)
    const user = users.get(id)
    if (user) return user
    return null
  },
  createUser: async (name: User['name']): Promise<User> => {
    await delay(500)
    const id = crypto.randomUUID()
    const user = { id, name }
    users.set(id, user)
    return user
  },
  updateUser: async (id: User['id'], name: User['name']): Promise<User> => {
    await delay(500)
    const user = { id, name }
    users.set(id, user)
    return user
  },
  deleteUser: async (id: User['id']): Promise<void> => {
    await delay(200)
    users.delete(id)
  },
}
