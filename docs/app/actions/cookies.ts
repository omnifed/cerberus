'use server'

import { cookies } from 'next/headers'

export async function getCookie(cName: string) {
  return cookies().get(cName)?.value ?? ''
}

export async function setCookie(cName: string, cValue: any) {
  let date = new Date()
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000)
  cookies().set(cName, cValue, { expires: date })
}

export async function deleteCookie(cName: string) {
  cookies().delete(cName)
}
