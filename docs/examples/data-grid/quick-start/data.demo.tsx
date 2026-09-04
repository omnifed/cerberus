export type Employee = {
  id: number
  firstName: string
  lastName: string
  email: string
  status: 'active' | 'inactive' | 'on_leave'
  salary: number
  department: {
    name: string
    code: string
  }
  lastLogin: string
}
