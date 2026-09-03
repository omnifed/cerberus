import { connection } from 'next/server'
import { codeToHtml } from 'shiki'
import { getShikiOptions } from './shiki'

/**
 * Converts a code snippet to a shiki string. Mostly used for non-demo purposes.
 * @param snippet - The code snippet to convert.
 * @returns The code snippet as a string.
 */
export async function getCodeString(snippet: string): Promise<string> {
  try {
    await connection()
    return await codeToHtml(snippet, getShikiOptions('tsx'))
  } catch (error) {
    console.error('Error converting code to string:', error)
    return ''
  }
}
