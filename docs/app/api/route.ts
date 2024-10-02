import { getCachedTheme } from '../actions/theme'
import { setCookie } from '../actions/cookies'

export async function GET() {
  const { themeName, colorModeName, cached } = await getCachedTheme()

  if (!cached) {
    await setCookie('theme', themeName)
    await setCookie('colorMode', colorModeName)
  }

  return new Response(
    JSON.stringify({ themeName, colorModeName, success: true }),
  )
}
