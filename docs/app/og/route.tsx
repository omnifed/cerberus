import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { Logo } from './logo'

const poppins = await readFile(join(process.cwd(), 'public/fonts/poppins-regular.ttf'))
const upperFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

const getFontSize = (title: string) => {
  if (title.length < 14) return '104px'
  if (title.length < 28) return '84px'
  return '64px'
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'There is no "I" in CerberUS'
    const description = searchParams.get('description')
    const category = searchParams.get('category')

    return new ImageResponse(
      <div
        style={{
          backgroundColor: '#130024',
          color: '#fcfbfe',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
          height: '100%',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            marginBottom: '56px',
          }}
        >
          <Logo />
        </div>

        <div style={{ display: 'flex', gap: '0px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '72%',
              flex: '1',
            }}
          >
            {category && (
              <div
                style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  color: '#dedce5',
                  fontSize: '24px',
                  marginBottom: '16px',
                }}
              >
                Cerby / {upperFirst(category)}
              </div>
            )}
            <div
              style={{
                fontSize: getFontSize(title),
                fontFamily: 'Poppins',
                fontWeight: 700,
                letterSpacing: '-1.5px',
              }}
            >
              {upperFirst(title)}
            </div>
            {description && (
              <div
                style={{
                  marginTop: '24px',
                  fontSize: '28px',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  color: '#dedce5',
                  lineHeight: 1.4,
                }}
              >
                {description}
              </div>
            )}
            {!category && !description && (
              <div
                style={{
                  marginTop: '40px',
                  fontSize: '40px',
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  letterSpacing: '-1.5px',
                  color: '#0c0420',
                  borderRadius: '12px',
                  backgroundColor: '#f9f9fb',
                  padding: '12px 24px',
                  border: '6px solid #0c0420',
                  boxShadow: '4px 3px 0px 0px #0c0420',
                  alignSelf: 'flex-start',
                }}
              >
                pnpm i @cerberus-design/react
              </div>
            )}
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        emoji: 'twemoji',
        fonts: [
          {
            name: 'Poppins',
            data: poppins,
            style: 'normal',
            weight: 700,
          },
        ],
        debug: true,
      },
    )
  } catch (error: unknown) {
    console.log(error)
    console.log(error instanceof Error ? error.message : String(error))
    return new Response('Failed to generate the image', { status: 500 })
  }
}
