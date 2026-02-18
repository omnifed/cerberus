'use client'

import { Employee } from './data.demo'

// In a real app, this comes from useQuery / Server Components
export const generateData = (count: number): Employee[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i + 1,
    firstName: ['James', 'Sarah', 'Michael', 'Jessica', 'David'][i % 5],
    lastName: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'][i % 5],
    email: `employee.${i + 1}@company.com`,
    status: ['active', 'inactive', 'on_leave'][i % 3] as Employee['status'],
    salary: 50000 + Math.random() * 100000,
    department: {
      name: ['Engineering', 'Sales', 'Marketing', 'HR'][i % 4],
      code: ['ENG', 'SAL', 'MKT', 'HR'][i % 4],
    },
    lastLogin: new Date(Date.now() - i * 10000000).toISOString(),
  }))
}
