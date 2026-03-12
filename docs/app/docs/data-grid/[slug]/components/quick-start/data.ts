'use client'

import { useState } from 'react'
import { Employee } from './data.demo'
import { useEffect } from 'react'

const generateData = (count: number): Employee[] => {
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
    lastLogin: new Date(performance.now() - i * 10000000).toISOString(),
  }))
}

export function useFakeQuery(count: number) {
  const [state, setState] = useState<Employee[]>(() => generateData(count))

  useEffect(() => {
    setState(generateData(count))
  }, [count])

  return state
}
