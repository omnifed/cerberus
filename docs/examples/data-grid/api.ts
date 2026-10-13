'use client'

import { type PageDetails } from '@cerberus-design/react'
import { createQuery } from '@cerberus-design/signals'
import { SortDirection } from '@cerberus-design/data-grid'

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

export type PaginatedRequest = PageDetails & {
  sortBy?: string | null
  sortDirection?: SortDirection
}

// Utils

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const generateEmployeeData = (count: number): Employee[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i + 1,
    firstName: ['James', 'Sarah', 'Michael', 'Jessica', 'David'][i % 5],
    lastName: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'][i % 5],
    email: `employee.${i + 1}@company.com`,
    status: ['active', 'inactive', 'on_leave'][i % 3] as Employee['status'],
    salary: generateFakeSalary(),
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
  selectEmployees: async (limit?: number): Promise<Employee[]> => {
    await delay(150)
    return employees.slice(0, limit ?? employees.length)
  },
  selectPaginatedEmployees: async (
    details: PaginatedRequest,
  ): Promise<ApiResponse<Employee[]>> => {
    await delay(100)

    let processedData = [...employees]

    // 1. Apply Server-Side Sorting
    if (details.sortBy && details.sortDirection) {
      processedData.sort((a, b) => {
        let valA: string | number = ''
        let valB: string | number = ''

        // Map custom column IDs to real database properties
        if (details.sortBy === 'department') {
          valA = a.department.name
          valB = b.department.name
        } else if (details.sortBy === 'fullName') {
          valA = `${a.firstName} ${a.lastName}`
          valB = `${b.firstName} ${b.lastName}`
        } else {
          // Standard accessors map 1:1
          valA = a[details.sortBy as keyof Employee] as string | number
          valB = b[details.sortBy as keyof Employee] as string | number
        }

        let comparison = 0
        if (valA > valB) comparison = 1
        else if (valA < valB) comparison = -1

        return details.sortDirection === 'desc' ? -comparison : comparison
      })
    }

    // 2. Apply Server-Side Pagination
    const offset = (details.page - 1) * details.pageSize
    const limit = details.pageSize
    const data = processedData.slice(offset, offset + limit)

    return {
      data,
      pagination: {
        count: employees.length,
        limit,
        offset,
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

// Helpers

function secureMathRandom() {
  const array = new Uint32Array(1)
  globalThis.crypto.getRandomValues(array)
  return array[0] * Math.pow(2, -32)
}

export function generateFakeSalary(min = 40000, max = 150000) {
  return Math.floor(secureMathRandom() * (max - min)) + min
}
