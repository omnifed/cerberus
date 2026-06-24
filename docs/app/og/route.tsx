import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { Logo } from './logo'
import { CheckmarkFilled } from '@carbon/icons-react'

const bodyPoppins = await readFile(
  join(process.cwd(), 'public/fonts/poppins-regular.ttf'),
)
const poppins = await readFile(
  join(process.cwd(), 'public/fonts/poppins-semi-bold.ttf'),
)

const upperFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

const getFontSize = (title: string) => {
  if (title.length < 14) return '104px'
  if (title.length < 28) return '84px'
  return '64px'
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // TODO: Get the file frontmatter from the URL path

    const category = searchParams.get('category') || 'Docs'
    const title = searchParams.get('title') || 'Cerberus'
    const description =
      searchParams.get('description') ||
      'Improving React development for humans and agents.'
    const lib = searchParams.get('package')

    return new ImageResponse(
      <div
        style={{
          display: 'flex',
          background: `linear-gradient(220deg, #0C0420 -4.87%, #392E55 100%)`,
          flexDirection: 'column',
          padding: '44px',
          height: '100%',
          width: '100%',
        }}
      >
        <div
          style={{
            backgroundColor: '#130024',
            borderRadius: '16px',
            boxShadow: '0 0 24px 10px rgba(5, 1, 8, 0.35)',
            color: '#fcfbfe',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            paddingLeft: '32px',
            paddingRight: '32px',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              outline: 'none',
              paddingBottom: '30px',
              paddingTop: '30px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <Logo />
              <p
                style={{
                  color: '#DFCCF0',
                  fontFamily: 'Poppins',
                  fontSize: '32px',
                  textTransform: 'uppercase',
                }}
              >
                Cerberus UI Platform
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
              <div
                style={{
                  alignItems: 'center',
                  background:
                    'linear-gradient(103deg, #E8F8ED -78.15%, #71D192 129.96%)',
                  borderRadius: '8px',
                  color: '#07471E',
                  display: 'flex',
                  gap: '4px',
                  paddingBottom: '5.5px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  paddingTop: '5.5px',
                }}
              >
                <CheckmarkFilled size={20} />
                ARIA AA Compliant
              </div>
              <div
                style={{
                  alignItems: 'center',
                  background: 'linear-gradient(207deg,#E6F3FB 16.67%, #9ACFEE 100%)',
                  borderRadius: '8px',
                  color: '#015280',
                  display: 'flex',
                  gap: '4px',
                  paddingBottom: '5.5px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  paddingTop: '5.5px',
                }}
              >
                Panda CSS
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0px' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '80%',
                flex: '1',
              }}
            >
              {category && (
                <div
                  style={{
                    display: 'flex',
                    fontFamily: 'Poppins-Regular',
                    color: '#dedce5',
                    fontSize: '16px',
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
                  lineHeight: '140%',
                  letterSpacing: '-1.5px',
                }}
              >
                {upperFirst(title)}
              </div>

              {description && (
                <div
                  style={{
                    fontSize: '28px',
                    fontFamily: 'Poppins-Regular',
                    color: '#dedce5',
                    lineHeight: 1.4,
                  }}
                >
                  {description}
                </div>
              )}

              <div
                style={{
                  alignSelf: 'flex-start',
                  backgroundColor: '#130A2A',
                  border: '1px solid #BB93E1',
                  borderRadius: '8px',
                  boxShadow: '4px 3px 0px 0px #0c0420',
                  color: '#dedce5',
                  display: 'flex',
                  fontSize: '24px',
                  fontFamily: 'Poppins-Regular',
                  letterSpacing: '-1.5px',
                  marginTop: '40px',
                  padding: '8px 16px',
                }}
              >
                {lib ? `package: ${lib}` : `pnpm i @cerberus-design/react`}
              </div>
            </div>
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
          {
            name: 'Poppins-Regular',
            data: bodyPoppins,
            style: 'normal',
            weight: 600,
          },
        ],
        debug: false,
      },
    )
  } catch (error: unknown) {
    console.log(error)
    console.log(error instanceof Error ? error.message : String(error))
    return new Response('Failed to generate the image', { status: 500 })
  }
}
