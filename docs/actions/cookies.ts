'use server'

import { cookies } from 'next/headers'

export async function getCookie(cName: string) {
  const cookieStore = await cookies()
  return cookieStore.get(cName)?.value ?? ''
}

export async function setCookie(cName: string, cValue: any) {
  let date = new Date()
  const cookieStore = await cookies()
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000)
  cookieStore.set(cName, cValue, { expires: date })
}

export async function deleteCookie(cName: string) {
  const cookieStore = await cookies()
  cookieStore.delete(cName)
}
