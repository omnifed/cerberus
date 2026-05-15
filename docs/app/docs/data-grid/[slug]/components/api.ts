'use client'

import { createQuery } from '@cerberus-design/signals'
import { Employee } from './quick-start/data.demo'

// Utils

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const generateEmployeeData = (count: number): Employee[] => {
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

// DB

const employees = generateEmployeeData(1000)

// API

type ApiResponse<T> = {
  data: T
  pagination: {
    count: number
    limit: number
    offset: number
  }
}

const api = {
  selectEmployees: async (): Promise<Employee[]> => {
    await delay(100)
    return employees
  },
  selectPaginatedEmployees: async (count: number): Promise<ApiResponse<Employee[]>> => {
    const data = employees.slice(0, count)
    await delay(100)
    return {
      data,
      pagination: {
        count: employees.length,
        limit: count,
        offset: 0,
      },
    }
  },
}

// Factories

export const queryEmployees = createQuery(api.selectEmployees, 'queryEmployees')

export const queryPaginatedEmployees = createQuery(
  api.selectPaginatedEmployees,
  'queryPaginatedEmployees',
)
